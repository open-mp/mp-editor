import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import {Alert, Notify} from 'zent';
import cx from 'classnames';
import assign from 'lodash/assign';
import isUndefined from 'lodash/isUndefined';
import * as storage from 'zent/lib/utils/storage';
import * as InstanceUtils from './utils/instance';
import pluginLoader from './bundle/loader'
import DesignEditor from './DesignEditor';

import LazyMap from './utils/LazyMap';

import {UUID_KEY, CACHE_KEY, cacheId} from './constants'
import Bundle from "./bundle/bundle";

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
        this.pluginInstanceCount = new LazyMap(0);
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

    async initInstanceList(coordinate) {
        if (!coordinate) {
            return;
        }
        // 需要检查该插件有没有加载，若没有则先加载，然后再创建实例
        let plugin = await pluginLoader.loadPlugin(coordinate);
        let instance = plugin.getInitialValue();
        instance.coordinate = coordinate;
        InstanceUtils.tagInstanceWithUUID(instance);
        let newInstanceList = [instance];

        let bundle = new Bundle(coordinate);
        this.pluginInstanceCount = new LazyMap(0);
        let stringID = bundle.getStringId();
        this.pluginInstanceCount.inc(stringID);

        this.setState({
            instanceList: newInstanceList
        });
        this._trackValueChange(newInstanceList);
        this._selectInstance(instance);
    }
    /**
     * 设置实例列表
     * @param instanceList
     */
    async setInstanceList(instanceList) {
        for (let instance of instanceList) {
            await pluginLoader.loadPlugin(instance.coordinate);
            InstanceUtils.tagInstanceWithUUID(instance);
        }
        let pluginMap = {};
        let pluginInstanceCount = this.pluginInstanceCount = new LazyMap(0);
        let newInstanceList = [];
        for (let i = 0; i < instanceList.length; i++) {
            let instance = instanceList[i];
            let bundle = new Bundle(instance.coordinate);
            // 找出plugin 并加载
            let plugin = await pluginLoader.loadPlugin(instance.coordinate);
            let stringID = bundle.getStringId();
            pluginMap[stringID] = plugin;
            pluginInstanceCount.inc(stringID);
            // 加上uuid
            InstanceUtils.tagInstanceWithUUID(instance);
            newInstanceList.push(instance);
        }
        this.setState({
            pluginMap, instanceList: newInstanceList
        })
    }

    /**
     *  外部调用接口 创建插件实例，
     */
    async addInstanceByBundle(coordinate) {
        let {} = this.state;
        // 需要检查该插件有没有加载，若没有则先加载，然后再创建实例
        let plugin = await pluginLoader.loadPlugin(coordinate);

        let bundle = new Bundle(coordinate);
        let stringID = bundle.getStringId();
        let pluginInstanceCount = this.pluginInstanceCount;
        let count = pluginInstanceCount.get(stringID);
        if (plugin.limitPerPage && plugin.limitPerPage <=count) {
            Notify.error('页面中此插件的数量超过限制');
            return;
        }
        
        let instance = plugin.getInitialValue();
        instance.coordinate = coordinate;
        InstanceUtils.tagInstanceWithUUID(instance);

        const {instanceList} = this.state;

        let newInstanceList;
        newInstanceList = instanceList.concat(instance);
        pluginInstanceCount.inc(stringID);
        this.setState({
            instanceList: newInstanceList
        });
        this._trackValueChange(newInstanceList);
        this._selectInstance(instance);
    }

    selectByIndex = (index) => {
        let {instanceList} = this.state;
        index = isUndefined(index) ? this.props.defaultSelectedIndex : index;
        const instance = instanceList[index];

        this.setState({
            selectedUUID: InstanceUtils.getUUIDFromInstance(instance),
        });
    };

    /**
     * 验证，如果返回false，则存在错误
     * TODO
     */
    async validate() {
        return true;
    }

    getInstanceList() {
        this._dirty = false;
        this._removeCache();
        let instanceList = InstanceUtils.removeUUID(this.state.instanceList);
        return instanceList;
    }


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
                        onClose={this._closeRestoreCacheAlert}
                        type="warning"
                    >
                        {cacheRestoreMessage}
                        <a
                            className={`mp-design__restore-cache-alert-use`}
                            onClick={this._restoreCache}
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
                    design: this.design,
                    disabled,
                    ref: this._savePreview,
                })}
            </div>
        );
    }

    componentDidMount() {
        this._setupBeforeUnloadHook();
        this._checkCache();
    }

    componentDidUpdate() {
        this._setupBeforeUnloadHook();
    }

    componentWillUnmount() {
        this._uninstallBeforeUnloadHook();
    }

    _savePreview = instance => {

        this.preview = instance;
    }

    // 选中一个组件
    _selectInstance = instance => {
        const {selectedUUID} = this.state;
        const id = InstanceUtils.getUUIDFromInstance(instance);
        if (InstanceUtils.getUUIDFromInstance(instance) === selectedUUID) {
            return;
        }

        this.setState({
            selectedUUID: id,
        });

        this._adjustHeight();
    };

    _setSettings = value => {
        this.setState({
            settings: {
                ...this.state.settings,
                ...value,
            },
        });
    };

    _modifyInstance = async (instance, diff, replace = false) => {
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
        this._trackValueChange(newInstanceList);

        let errors = await InstanceUtils.validateInstance(instance);
        let id = InstanceUtils.getUUIDFromInstance(instance);
        this._setValidation({[id]: errors});
    };

    // 调用 onChange 的统一入口，用于处理一些需要知道有没有修改过值的情况
    _trackValueChange(newInstanceList, writeCache = true) {
        const {onChange} = this.props;
        onChange && onChange(newInstanceList); // 通知外面数据变化

        if (!this._dirty) {
            this._dirty = true;
        }

        if (writeCache) {
            this._writeCache(newInstanceList);
        }

        this._adjustHeight();
    }

    // 删除一个组件, 删除后如果没有选中的组件则默认选一个
    _deleteInstance = instance => {
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

        let bundle = new Bundle(instance.coordinate);
        this.pluginInstanceCount.dec(bundle.getStringId());
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

        this._trackValueChange(newInstanceList);

        this._adjustHeight();
    };

    _moveInstance = (fromIndex, toIndex) => {
        let {instanceList} = this.state;
        let newInstanceList = InstanceUtils.moveInstance(instanceList, fromIndex, toIndex);

        if (newInstanceList) {
            this.setState({
                instanceList: newInstanceList
            });
        }
        this._trackValueChange(newInstanceList);
    };

    _setValidation = validation => {
        this.setState({
            validations: assign({}, this.state.validations, validation),
        });

        this._adjustHeight();
    };

    // 滚动到第一个有错误的组件
    _scrollToPreviewItem(id) {
        const {scrollTopOffset, scrollLeftOffset} = this.props;
        this.preview.scrollToItem(id, {
            top: scrollTopOffset,
            left: scrollLeftOffset,
        });
    }

    // 调整 Design 的高度，因为 editor 是 position: absolute 的，所以需要动态的更新
    // 实际并未改变高度，而是设置了margin/padding
    _adjustHeight = id => {
        // 不要重复执行
        if (this._adjustHeightTimer) {
            clearTimeout(this._adjustHeightTimer);
            this._adjustHeightTimer = undefined;
        }

        this._adjustHeightTimer = setTimeout(() => {
            id = id || this.state.selectedUUID;

            // 获取编辑器框
            const editorBB = this.preview.getEditorBoundingBox(id);
            if (!editorBB) {
                return this.setState({
                    bottomGap: 0,
                });
            }

            // 获取展示框
            const previewNode = findDOMNode(this.preview);
            const previewBB = previewNode && previewNode.getBoundingClientRect();
            if (!previewBB) {
                return;
            }

            const gap = Math.max(0, editorBB.bottom - previewBB.bottom);
            this.setState({
                bottomGap: gap,
            });
        }, 0);
    };

    _setupBeforeUnloadHook() {
        const {confirmUnsavedLeave} = this.props;

        if (this._hasBeforeUnloadHook || !confirmUnsavedLeave) {
            return;
        }

        window.addEventListener('beforeunload', this._windowUnloadHandler);
        this._hasBeforeUnloadHook = true;
    }

    _uninstallBeforeUnloadHook() {
        window.removeEventListener('beforeunload', this._windowUnloadHandler);
        this._hasBeforeUnloadHook = false;
    }

    _windowUnloadHandler = evt => {
        if (!this._dirty) {
            return;
        }
        // 这个字符串其实不会展示给用户
        const confirmLeaveMessage = '页面上有未保存的数据，确定要离开吗？';
        evt.returnValue = confirmLeaveMessage;
        return confirmLeaveMessage;
    };

    _checkCache() {
        const {cache} = this.props;

        if (cache) {
            const cachedValue = this._readCache();

            if (cachedValue !== storage.NOT_FOUND) {
                this.setState({
                    showRestoreFromCache: true,
                });
            }
        }
    }

    _readCache() {
        const {cache} = this.props;
        if (!cache) {
            return storage.NOT_FOUND;
        }

        return storage.read(CACHE_KEY, cacheId);
    }

    _writeCache(value) {
        const {cache} = this.props;
        if (!cache) {
            return false;
        }
        return storage.write(CACHE_KEY, cacheId, value);
    }

    _removeCache() {
        // 这个函数不需要检查有没有开启缓存，强制清除
        return storage.write(CACHE_KEY, cacheId, undefined);
    }

    // 关闭提示，但是不清楚缓存
    _closeRestoreCacheAlert = () => {
        this.setState({
            showRestoreFromCache: false,
        });
    };

    // 恢复缓存的数据并删除缓存
    _restoreCache = async (evt) => {
        evt.preventDefault();

        const cachedValue = this._readCache();
        if (cachedValue !== storage.NOT_FOUND) {
            this._trackValueChange(cachedValue, false);
            await this.setInstanceList(cachedValue);
            this.setState({
                showRestoreFromCache: false,
            });
            this._removeCache();
        }
    };

    // 暴露给子组件的接口
    design = (() => {
        return {

            selectInstance: this._selectInstance,

            moveInstance: this._moveInstance,

            deleteInstance: this._deleteInstance,

            modifyInstance: this._modifyInstance,

            setSettings: this._setSettings,

            adjustPreviewHeight: this._adjustHeight,
        };
    })();
}

