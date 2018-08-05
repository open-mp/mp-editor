import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import {Alert} from 'zent';
import cx from 'classnames';
import assign from 'lodash/assign';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';
import defaultTo from 'lodash/defaultTo';
import isFunction from 'lodash/isFunction';
import * as storage from 'zent/lib/utils/storage';
import uuid from 'zent/lib/utils/uuid';
import DesignEditorAddComponent from './DesignEditorAddComponent';


import DesignEditor from './DesignEditor';
import {
    getDesignType,
    isExpectedDesginType,
    serializeDesignType,
} from './utils/design-type';
import LazyMap from './utils/LazyMap';
import {ADD_COMPONENT_OVERLAY_POSITION} from './constants';

const UUID_KEY = '__zent-design-uuid__';
const CACHE_KEY = '__zent-design-cache-storage__';

const hasValidateError = v => !isEmpty(v[Object.keys(v)[0]]);
const prefix = 'mp';

/**
 * 负责数据处理
 */
export default class Design extends PureComponent {

    static defaultProps = {
        value: [], // 初始配置数据
        defaultSelectedIndex: -1,
        confirmUnsavedLeave: true,
        cacheRestoreMessage:
            '提示：在浏览器中发现未提交的内容，是否使用该内容替换当前内容？',
        scrollTopOffset: -10,
        scrollLeftOffset: -10,
    };

    constructor(props) {
        super(props);

        const {value, defaultSelectedIndex} = props;

        this.validateCacheProps(props);

        tagValuesWithUUID(value);

        const safeValueIndex = getSafeSelectedValueIndex(
            defaultSelectedIndex,
            value
        );
        const selectedValue = value[safeValueIndex];

        this.state = {
            // 当前选中的组件对应的 UUID
            selectedUUID: this.getUUIDFromValue(selectedValue),
            pluginMap: {}, // 已经安装的插件 id => 插件配置
            pluginInstanceCount: new LazyMap(0), // plugin创建的实例数

            // 每个组件当前已经添加的个数
            componentInstanceCount: makeInstanceCountMapFromValue(
                props.value,
                props.components
            ),

            // 页面设置，比如页面背景色
            settings: {},

            // 添加组件浮层的位置
            addComponentOverlayPosition: ADD_COMPONENT_OVERLAY_POSITION.UNKNOWN,

            // 可添加的组件列表
            appendableComponents: [],

            // 当前所有组件的 validation 信息
            // key 是 value 的 UUID
            validations: {},

            // 是否强制显示错误
            showError: false,

            // 是否显示从缓存中恢复的提示
            showRestoreFromCache: false,

            // 当 preview 很长时，为了对齐 preview 底部需要的额外空间
            bottomGap: 0,
        };
    }

    render() {
        const {
            className,
            cacheRestoreMessage,
            components,
            value,
            disabled,
            settings,
        } = this.props;

        const {
            showRestoreFromCache,
            bottomGap,
            selectedUUID,
            appendableComponents,
            addComponentOverlayPosition,
            validations,
            showError,
            settings: managedSettings,
            componentInstanceCount,
        } = this.state;


        const cls = cx(`${prefix}-design`, className);

        return (
            <div className={cls} style={{paddingBottom: bottomGap}}>
                {showRestoreFromCache && (
                    <Alert
                        className={`${prefix}-design__restore-cache-alert`}
                        closable
                        onClose={this.onRestoreCacheAlertClose}
                        type="warning"
                    >
                        {cacheRestoreMessage}
                        <a
                            className={`${prefix}-design__restore-cache-alert-use`}
                            onClick={this.restoreCache}
                            href="javascript:void(0);"
                        >
                            使用
                        </a>
                    </Alert>
                )}
                {React.createElement(DesignEditor, {
                    components,
                    value,
                    validations,
                    showError,
                    settings: settings || managedSettings,
                    onSettingsChange: this.onSettingsChange,
                    componentInstanceCount,
                    onComponentValueChange: this.onComponentValueChange,
                    appendableComponents,
                    selectedUUID,
                    getUUIDFromValue: this.getUUIDFromValue,
                    addComponentOverlayPosition,
                    onSelect: this.onSelect,
                    onMove: this.onMove,
                    onDelete: this.onDelete,
                    design: this.design,
                    disabled,
                    ref: this.savePreview,
                })}
                {appendableComponents.length > 0 && (
                    <div
                        className={cx(`${prefix}-design__add`, `${prefix}-design__add--mixed`)}
                    >
                        <DesignEditorAddComponent
                            prefix={prefix}
                            componentInstanceCount={componentInstanceCount}
                            components={appendableComponents}
                            onAddComponent={(component, fromSelected)=>{
                                this.onAdd(component, fromSelected);
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }

    componentWillMount() {
        this.cacheAppendableComponents(this.props.components);
    }

    componentDidMount() {
        this.setupBeforeUnloadHook();
        this.checkCache();
    }

    componentDidUpdate() {
        this.setupBeforeUnloadHook();
    }

    componentWillUnmount() {
        this.uninstallBeforeUnloadHook();
    }

    componentWillReceiveProps(nextProps) {
        this.validateCacheProps(nextProps);

        let shouldUpdateInstanceCountMap = false;

        if (nextProps.value !== this.props.value) {
            tagValuesWithUUID(nextProps.value);
            shouldUpdateInstanceCountMap = true;
        }

        if (nextProps.components !== this.props.components) {
            this.cacheAppendableComponents(nextProps.components);
            shouldUpdateInstanceCountMap = true;
        }

        // 如果当前没有选中的并且 value 或者 defaultSelectedIndex 改变的话
        // 重新尝试设置默认值
        if (
            !this.hasSelected() &&
            (nextProps.defaultSelectedIndex !== this.props.defaultSelectedIndex ||
                nextProps.value !== this.props.value)
        ) {
            const {value, defaultSelectedIndex} = nextProps;
            this.selectByIndex(defaultSelectedIndex, value);
        }

        if (shouldUpdateInstanceCountMap) {
            this.setState({
                componentInstanceCount: makeInstanceCountMapFromValue(
                    nextProps.value,
                    nextProps.components
                ),
            });
        }
    }

    cacheAppendableComponents(components) {
        this.setState({
            appendableComponents: components.filter(
                c => c.appendable === undefined || c.appendable
            ),
        });
    }

    onSettingsChange = value => {
        const {settings, onSettingsChange} = this.props;
        const onSettingsChangeExists = isFunction(onSettingsChange);

        if (settings && !onSettingsChangeExists) {
            throw new Error('Expects onSettingsChange to be a function');
        }

        if (settings && onSettingsChangeExists) {
            onSettingsChange({
                ...settings,
                ...value,
            });
        }

        if (!settings) {
            this.setState({
                settings: {
                    ...this.state.settings,
                    ...value,
                },
            });
        }
    };

    onComponentValueChange = identity => (diff, replace = false) => {
        const {value} = this.props;
        const newComponentValue = replace
            ? assign({[UUID_KEY]: this.getUUIDFromValue(identity)}, diff)
            : assign({}, identity, diff);
        const newValue = value.map(v => (v === identity ? newComponentValue : v));
        const changedProps = Object.keys(diff);

        this.trackValueChange(newValue);
        this.validateComponentValue(newComponentValue, identity, changedProps).then(
            errors => {
                const id = this.getUUIDFromValue(newComponentValue);
                this.setValidation({[id]: errors});
            }
        );
    };

    validateComponentValue = (value, prevValue, changedProps) => {
        const {type} = value;
        const {components} = this.props;
        const comp = find(components, c => isExpectedDesginType(c, type));
        const {validate} = comp.editor;
        const p = validate(value, prevValue, changedProps);

        return p;
    };

    // 选中一个组件
    onSelect = component => {
        const id = this.getUUIDFromValue(component);

        if (this.isSelected(component)) {
            return;
        }

        this.setState({
            selectedUUID: id,
        });

        this.adjustHeight();
    };

    /**
     *  外部调用接口 创建插件实例，
     */
    addInstance(bundleId) {
        // 需要检查该插件有没有加载，若没有则先加载，然后再创建实例
    }

    // 添加一个新组件
    onAdd = (component, fromSelected) => {
        const {value, settings} = this.props;
        const {editor, defaultType} = component;
        const instance = editor.getInitialValue({
            settings
        });
        instance.type = getDesignType(editor, defaultType);
        const id = uuid();
        this.setUUIDForValue(instance, id);

        /**
         * 添加有两种来源：底部区域或者弹层。
         * 如果来自底部的话，就在当前数组最后加；如果来自弹层就在当前选中的那个组件后面加
         */
        let newValue;
        if (fromSelected) {
            index = value.slice();
            const {addComponentOverlayPosition} = this.state;
            const {selectedUUID} = this.state;
            const selectedIndex = findIndex(value, {[UUID_KEY]: selectedUUID});

            // 两种位置，插入到当前选中的前面或者后面
            const delta =
                addComponentOverlayPosition === ADD_COMPONENT_OVERLAY_POSITION.TOP
                    ? 0
                    : 1;
            newValue.splice(selectedIndex + delta, 0, instance);
        } else {
            newValue = value.concat(instance);
        }

        this.trackValueChange(newValue);
        this.onSelect(instance);
    };

    // 删除一个组件
    onDelete = component => {
        const {value, components} = this.props;
        let nextIndex = -1;
        const newValue = value.filter((v, idx) => {
            const skip = v !== component;
            if (!skip) {
                nextIndex = idx - 1;
            }
            return skip;
        });

        const newState = {
        };

        // 删除选中项目后默认选中前一项可选的，如果不存在则往后找一个可选项
        const componentUUID = this.getUUIDFromValue(component);
        if (componentUUID === this.state.selectedUUID) {
            const nextSelectedValue = findFirstEditableSibling(
                newValue,
                components,
                nextIndex
            );
            const nextUUID = this.getUUIDFromValue(nextSelectedValue);
            newState.selectedUUID = nextUUID;
        }

        this.trackValueChange(newValue);
        this.setState(newState);

        this.adjustHeight();
    };

    onMove = (fromIndex, toIndex) => {
        if (fromIndex === toIndex) {
            return;
        }
        const {value, components} = this.props;
        const newValue = [];
        let tmp;
        /**
         * 这个算法不是仅仅交换两个位置的节点，所有中间节点都需要移位
         * 需要考虑数组中间有不可拖拽节点的情况，这种情况下 fromIndex, toIndex 的值是不包括这些节点的
         * 例如 [1, 0, 0, 1, 0, 0, 1]: fromIndex = 0, toIndex = 1 表示移动第一个和第二个 1。
         */
        let passedFromIndex = false;
        let passedToIndex = false;

        if (fromIndex < toIndex) {// 从上拖到下面
            for (let i = 0, dragableIndex = -1; i < value.length; i++) {
                const val = value[i];

                const comp = find(components, c => isExpectedDesginType(c, val.type));
                const dragable = comp && defaultTo(comp.dragable, true);
                if (dragable) {
                    dragableIndex++;
                }

                /* Invariant: Each step copies one value, except one copies 2 and another doesn't copy */
                if (dragableIndex === fromIndex && !passedFromIndex) {
                    tmp = val;
                    passedFromIndex = true;
                } else if (dragableIndex < toIndex && passedFromIndex) {
                    newValue[i - 1] = val;
                } else if (dragableIndex === toIndex && !passedToIndex) {
                    newValue[i - 1] = val;
                    newValue[i] = tmp;
                    passedToIndex = true;
                } else {
                    newValue[i] = val;
                }
            }
        } else { // 从下往上托
            let toInsetIndex;

            for (let i = 0, dragableIndex = -1; i < value.length; i++) {
                const val = value[i];

                const comp = find(components, c => isExpectedDesginType(c, val.type));
                const dragable = comp && defaultTo(comp.dragable, true);
                if (dragable) {
                    dragableIndex++;
                }

                /* Invariant: each step copies one value */
                if (dragableIndex === toIndex && !passedToIndex) {
                    toInsetIndex = i;
                    newValue[i + 1] = val;
                    passedToIndex = true;
                } else if (dragableIndex < fromIndex && passedToIndex) {
                    newValue[i + 1] = val;
                } else if (dragableIndex === fromIndex && !passedFromIndex) {
                    newValue[toInsetIndex] = val;
                    passedFromIndex = true;
                } else {
                    newValue[i] = val;
                }
            }
        }

        this.trackValueChange(newValue);
    };

    setValidation = validation => {
        this.setState({
            validations: assign({}, this.state.validations, validation),
        });

        this.adjustHeight();
    };

    // 验证所有组件，如果有错误选中并跳转到第一个有错误的组件。
    // 如果没有错误，Promise resolve；如果有错误，Promise reject。
    // reject 的是个数组，
    // [
    //   { '508516bf-d3e5-40a5-812e-834d3dee1d54': {} },
    //   { 'c7c72599-2ac5-41bb-9ba0-45e8178ff5a6': { content: '请填写公告内容' } }
    // ]
    validate = () => {
        const {value, components} = this.props;

        return new Promise((resolve, reject) =>
            Promise.all(
                value.map(v => {
                    const id = this.getUUIDFromValue(v);
                    const {type} = v;
                    const comp = find(components, c => isExpectedDesginType(c, type));
                    // 假如组件设置了 editable: false，不处罚校验
                    if (!defaultTo(comp.editable, true)) {
                        return Promise.resolve({[id]: {}});
                    }

                    return this.validateComponentValue(v, v, {}).then(errors => {
                        return {[id]: errors};
                    });
                })
            ).then(validationList => {
                const validations = assign({}, ...validationList);

                this.setState(
                    {
                        showError: true,
                        validations,
                    },
                    () => {
                        // 跳转到第一个有错误的组件
                        const firstError = find(validationList, hasValidateError);

                        if (firstError) {
                            const id = Object.keys(firstError)[0];
                            this.scrollToPreviewItem(id);

                            // 选中第一个有错误的组件
                            this.setState({
                                selectedUUID: id,
                            });
                        }

                        this.adjustHeight();
                    }
                );

                // 过滤所有错误信息，将数组合并为一个对象，key 是每个组件的 id
                const validationErrors = validationList.filter(hasValidateError);
                const hasError = !isEmpty(validationErrors);

                if (!hasError) {
                    resolve();
                } else {
                    reject(
                        validationErrors.reduce((err, v) => {
                            const key = Object.keys(v)[0];
                            if (key) {
                                err[key] = v[key];
                            }

                            return err;
                        }, {})
                    );
                }
            })
        );
    };

    // 保存数据后请调用这个函数通知组件数据已经保存
    markAsSaved = () => {
        this._dirty = false;
        this.removeCache();
    };

    selectByIndex = (index, value) => {
        value = value || this.props.value;
        index = isUndefined(index) ? this.props.defaultSelectedIndex : index;
        const safeIndex = getSafeSelectedValueIndex(index, value);
        const safeValue = value[safeIndex];

        this.setState({
            selectedUUID: this.getUUIDFromValue(safeValue),
        });
    };

    isSelected = instance => {
        const {selectedUUID} = this.state;
        return this.getUUIDFromValue(instance) === selectedUUID;
    };

    hasSelected = () => {
        const {selectedUUID} = this.state;

        return !!selectedUUID;
    };

    getUUIDFromValue(value) {
        return value && value[UUID_KEY];
    }

    setUUIDForValue(value, id) {
        if (value) {
            value[UUID_KEY] = id;
        }

        return value;
    }

    savePreview = instance => {
        if (instance && instance.getDecoratedComponentInstance) {
            instance = instance.getDecoratedComponentInstance();
        }
        this.preview = instance;
    };

    // 滚动到第一个有错误的组件
    scrollToPreviewItem(id) {
        if (this.preview) {
            const {scrollTopOffset, scrollLeftOffset} = this.props;
            this.preview.scrollToItem &&
            this.preview.scrollToItem(id, {
                top: scrollTopOffset,
                left: scrollLeftOffset,
            });
        }
    }

    // 调整 Design 的高度，因为 editor 是 position: absolute 的，所以需要动态的更新
    // 实际并未改变高度，而是设置了margin/padding
    adjustHeight = id => {
        // 不要重复执行
        if (this.adjustHeightTimer) {
            clearTimeout(this.adjustHeightTimer);
            this.adjustHeightTimer = undefined;
        }

        this.adjustHeightTimer = setTimeout(() => {
            id = id || this.state.selectedUUID;
            if (this.preview && this.preview.getEditorBoundingBox) {
                const editorBB = this.preview.getEditorBoundingBox(id);
                if (!editorBB) {
                    return this.setState({
                        bottomGap: 0,
                    });
                }

                const previewNode = findDOMNode(this.preview);
                const previewBB = previewNode && previewNode.getBoundingClientRect();
                if (!previewBB) {
                    return;
                }

                const gap = Math.max(0, editorBB.bottom - previewBB.bottom);
                this.setState({
                    bottomGap: gap,
                });
            }
        }, 0);
    };

    // 调用 onChange 的统一入口，用于处理一些需要知道有没有修改过值的情况
    trackValueChange(newValue, writeCache = true) {
        const {onChange} = this.props;
        onChange(newValue);

        if (!this._dirty) {
            this._dirty = true;
        }

        if (writeCache) {
            this.writeCache(newValue);
        }

        this.adjustHeight();
    }

    setupBeforeUnloadHook() {
        const {confirmUnsavedLeave} = this.props;

        if (this._hasBeforeUnloadHook || !confirmUnsavedLeave) {
            return;
        }

        window.addEventListener('beforeunload', this.onBeforeWindowUnload);
        this._hasBeforeUnloadHook = true;
    }

    uninstallBeforeUnloadHook() {
        window.removeEventListener('beforeunload', this.onBeforeWindowUnload);
        this._hasBeforeUnloadHook = false;
    }

    onBeforeWindowUnload = evt => {
        if (!this._dirty) {
            return;
        }

        // 这个字符串其实不会展示给用户
        const confirmLeaveMessage = '页面上有未保存的数据，确定要离开吗？';
        evt.returnValue = confirmLeaveMessage;
        return confirmLeaveMessage;
    };

    // 缓存相关的函数
    validateCacheProps(props) {
        props = props || this.props;
        const {cache, cacheId} = props;
        if (cache && !cacheId) {
            throw new Error('Design: cacheId is required when cache is on');
        }
    }

    checkCache() {
        const {cache} = this.props;

        if (cache) {
            const cachedValue = this.readCache();

            if (cachedValue !== storage.NOT_FOUND) {
                this.setState({
                    showRestoreFromCache: true,
                });
            }
        }
    }

    readCache() {
        const {cache} = this.props;
        if (!cache) {
            return storage.NOT_FOUND;
        }

        const {cacheId} = this.props;
        return storage.read(CACHE_KEY, cacheId);
    }

    writeCache(value) {
        const {cache} = this.props;
        if (!cache) {
            return false;
        }

        const {cacheId} = this.props;
        return storage.write(CACHE_KEY, cacheId, value);
    }

    removeCache() {
        // 这个函数不需要检查有没有开启缓存，强制清除
        const {cacheId} = this.props;
        return storage.write(CACHE_KEY, cacheId, undefined);
    }

    // 关闭提示，但是不清楚缓存
    onRestoreCacheAlertClose = () => {
        this.setState({
            showRestoreFromCache: false,
        });
    };

    // 恢复缓存的数据并删除缓存
    restoreCache = evt => {
        evt.preventDefault();

        const cachedValue = this.readCache();
        if (cachedValue !== storage.NOT_FOUND) {
            this.trackValueChange(cachedValue, false);
            this.setState({
                showRestoreFromCache: false,
            });
            this.removeCache();
        }
    };

    // Dummy method to make Design and DesignWithDnd compatible at source code level
    getDecoratedComponentInstance() {
        return this;
    }

    // Actions on design
    design = (() => {
        return {
            injections: {
                getPreviewProps: (/* implementation */) => {
                    // eslint-disable-next-line
                    console.warn(
                        'Design injections are no longer supported, use `settings` and `onSettingsChange` instead.'
                    );

                    // this.getPreviewProps = implementation;
                },
            },

            getUUID: this.getUUIDFromValue,

            validateComponentValue: this.validateComponentValue,

            setValidation: this.setValidation,

            markAsSaved: this.markAsSaved,

            adjustPreviewHeight: this.adjustHeight,
        };
    })();
}

// ================================================
// 工具函数
// ================================================

function tagValuesWithUUID(values) {
    values.forEach(v => {
        if (!v[UUID_KEY]) {
            v[UUID_KEY] = uuid();
        }
    });
}

/**
 * 从 startIndex 开始往前找到第一个可以选中的值
 * @param {array} value 当前的值
 * @param {array} components 当前可用的组件列表
 * @param {number} startIndex 开始搜索的下标
 */
function findFirstEditableSibling(value, components, startIndex) {
    const loop = i => {
        const val = value[i];
        const type = val.type;
        const comp = find(components, c => isExpectedDesginType(c, type));
        if (comp && defaultTo(comp.editable, true)) {
            return val;
        }
    };

    const valueLength = value.length;
    // 往前找
    for (let i = startIndex; i >= 0 && i < valueLength; i--) {
        const val = loop(i);
        if (val) {
            return val;
        }
    }

    // 往后找
    for (let i = startIndex + 1; i < valueLength; i++) {
        const val = loop(i);
        if (val) {
            return val;
        }
    }

    return null;
}

/**
 * 根据当前的值生成一个组件使用计数
 * @param {Array} value Design 当前的值
 * @param {Array} components Design 支持的组件列表
 */
function makeInstanceCountMapFromValue(value, components) {
    const instanceCountMap = new LazyMap(0);

    (value || []).forEach(val => {
        const comp = find(components, c => isExpectedDesginType(c, val.type));
        instanceCountMap.inc(serializeDesignType(comp.type));
    });

    return instanceCountMap;
}

function getSafeSelectedValueIndex(index, value) {
    return Math.min(index, value.length - 1);
}
