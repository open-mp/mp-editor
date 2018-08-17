import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import {Alert} from 'zent';
import cx from 'classnames';
import assign from 'lodash/assign';
import isUndefined from 'lodash/isUndefined';
import * as storage from 'zent/lib/utils/storage';
import * as InstanceUtils from './utils/instance';
import pluginLoader from './bundle/loader'
import DesignEditor from './DesignEditor';

import LazyMap from './utils/LazyMap';

import {UUID_KEY, CACHE_KEY} from './constants'

/**
 * 负责数据处理
 */
export default class Design extends PureComponent {

    static defaultProps = {
        confirmUnsavedLeave: true, // 有未保存类容离开页面时是否要确认
        cacheRestoreMessage:
            '提示：在浏览器中发现未提交的内容，是否使用该内容替换当前内容？', // 存在缓存时的提示内容
        scrollTopOffset: -10,
        scrollLeftOffset: -10,
    };


    constructor(props) {
        super(props);

        this.validateCacheProps(props);

        this.state = {
            showRestoreFromCache: false,// 是否显示从缓存中恢复的提示
            settings: {},// 页面设置，比如页面背景色
            selectedUUID: '', // 当前选中的组件对应的 UUID
            instanceList: [], // 插件实例
            pluginInstanceCount: new LazyMap(0), // plugin创建的实例数
            validations: {}, // 当前所有组件的 validation 信息;  key 是 value 的 UUID
            showError: false, // 是否强制显示错误
            bottomGap: 0,// 当 preview 很长时，为了对齐 preview 底部需要的额外空间
        };
    }

    /**
     * 设置实例列表
     * @param instanceList
     */
    async setInstanceList(instanceList) {
        for (let instance of instanceList) {
            await pluginLoader.loadPlugin(instance.bundleId);
            InstanceUtils.tagInstanceWithUUID(instance);
        }

        let pluginMap = {};
        let pluginInstanceCount = new LazyMap(0);
        let newInstanceList = [];
        for (let i = 0; i < instanceList.length; i++) {
            let instance = instanceList[i];
            let pluginId = InstanceUtils.getPluginIdFromInstace(instance);
            // 找出plugin 并加载
            let plugin = await PluginLoader.loadMpComponentFromBundle(pluginId);
            let pluginStringID = pluginId.getStringId();
            pluginMap[pluginStringID] = plugin;
            pluginInstanceCount.inc(pluginStringID);
            // 加上uuid
            InstanceUtils.setUUIDForInstance(instance, InstanceUtils.generateUUID());
            newInstanceList.push(instance);
        }
        this.setState({
            pluginMap, pluginInstanceCount, instanceList: newInstanceList
        })
    }

    /**
     *  外部调用接口 创建插件实例，
     */
    async addInstanceByBundle(bundleId) {
        let {pluginMap} = this.state;
        // 需要检查该插件有没有加载，若没有则先加载，然后再创建实例
        let plugin = await pluginLoader.loadPlugin(bundleId);
        let instance = plugin.getInitialValue();
        instance.bundleId = bundleId;
        InstanceUtils.tagInstanceWithUUID(instance);

        const {instanceList} = this.state;

        let newInstanceList;
        newInstanceList = instanceList.concat(instance);
        this.setState({
            instanceList: newInstanceList
        });
        this.trackValueChange(newInstanceList);
        this.selectInstance(instance);
    }


    // 选中一个组件
    selectInstance = instance => {
        const id = InstanceUtils.getUUIDFromInstance(instance);
        if (this.isSelected(instance)) {
            return;
        }

        this.setState({
            selectedUUID: id,
        });

        this.adjustHeight();
    };

    isSelected = instance => {
        const {selectedUUID} = this.state;
        return InstanceUtils.getUUIDFromInstance(instance) === selectedUUID;
    };

    render() {
        const {
            cacheRestoreMessage,
            disabled,
        } = this.props;
        const {
            showRestoreFromCache,
            bottomGap,
            selectedUUID,
            validations,
            showError,
            settings,
            instanceList
        } = this.state;


        const cls = cx(`mp-design`);

        return (
            <div className={cls} style={{paddingBottom: bottomGap}}>
                {showRestoreFromCache && (
                    <Alert
                        className={`mp-design__restore-cache-alert`}
                        closable
                        onClose={this.onRestoreCacheAlertClose}
                        type="warning"
                    >
                        {cacheRestoreMessage}
                        <a
                            className={`mp-design__restore-cache-alert-use`}
                            onClick={this.restoreCache}
                            href="javascript:void(0);"
                        >
                            使用
                        </a>
                    </Alert>
                )}
                {React.createElement(DesignEditor, {
                    settings,
                    selectedUUID,
                    instanceList,
                    validations,
                    showError,
                    onDelete: this.deleteInstance,
                    onSettingsChange: this.setSettings,
                    design: this.design,
                    disabled,
                    ref: this.savePreview,
                })}
            </div>
        );
    }

    componentWillMount() {

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
        return
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

    setSettings = value => {
        const {settings} = this.props;
        if (!settings) {
            this.setState({
                settings: {
                    ...this.state.settings,
                    ...value,
                },
            });
        } else {
            this.setState({
                settings: {
                    ...settings,
                    ...this.state.settings,
                    ...value,
                },
            });
        }
    };

    modifyInstance = async (instance, diff, replace = false) => {
        const {instanceList} = this.state;
        // 得到新的值
        const newInstanceValue = replace
            ? assign({[UUID_KEY]: this.getUUIDFromValue(instance)}, diff)
            : assign({}, instance, diff);
        // 产生新的instanceList
        const newInstanceList = instanceList.map(instanceLooped => {
            return instanceLooped === instance ? newInstanceValue : instanceLooped
        });
        this.setState({
            instanceList: newInstanceList
        });
        this.trackValueChange(newInstanceList);

        let errors = await InstanceUtils.validateInstance(instance);
        let id = InstanceUtils.getUUIDFromInstance(instance);
        this.setValidation({[id]: errors});
    };

    // 调用 onChange 的统一入口，用于处理一些需要知道有没有修改过值的情况
    trackValueChange(newInstanceList, writeCache = true) {
        const {onChange} = this.props;
        onChange && onChange(newInstanceList); // 通知外面数据变化

        if (!this._dirty) {
            this._dirty = true;
        }

        if (writeCache) {
            this.writeCache(newInstanceList);
        }

        this.adjustHeight();
    }

    // 删除一个组件, 删除后如果没有选中的组件则默认选一个
    deleteInstance = instance => {
        const {instanceList, selectedUUID} = this.state;
        let nextIndex = -1;
        const newInstanceList = instanceList.filter((v, idx) => {
            const skip = v !== instance;
            if (!skip) {
                nextIndex = idx - 1;
            }
            return skip;
        });

        const newState = {};

        // 删除选中项目后默认选中前一项可选的，如果不存在则往后找一个可选项
        const uuId = InstanceUtils.getUUIDFromInstance(instance);
        if (uuId === selectedUUID) {
            const nextSelectedInstance =
                InstanceUtils.findFirstEditableInstance(
                    newInstanceList, nextIndex
                );
            const nextUUID = InstanceUtils.getUUIDFromInstance(nextSelectedInstance);
            newState.selectedUUID = nextUUID;
        }

        this.setState({
            instanceList: newInstanceList,
            ...newState
        });

        this.trackValueChange(newInstanceList);

        this.adjustHeight();
    };

    moveInstance = (fromIndex, toIndex) => {
        let {instanceList} = this.state;
        let newInstanceList = InstanceUtils.moveInstance(instanceList, fromIndex, toIndex);

        if (newInstanceList) {
            this.setState({
                instanceList: newInstanceList
            });
        }
        this.trackValueChange(newInstanceList);
    };

    setValidation = validation => {
        this.setState({
            validations: assign({}, this.state.validations, validation),
        });

        this.adjustHeight();
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


    hasSelected = () => {
        const {selectedUUID} = this.state;

        return !!selectedUUID;
    };


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

    // 检查缓存相关的属性是否设置正确
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

            selectInstance: this.selectInstance,

            moveInstance: this.moveInstance,

            deleteInstance: this.deleteInstance,

            modifyInstance: this.modifyInstance,

            setSettings: this.setSettings,

            validateComponentValue: this.validateComponentValue,

            setValidation: this.setValidation,

            markAsSaved: this.markAsSaved,

            adjustPreviewHeight: this.adjustHeight,
        };
    })();
}

