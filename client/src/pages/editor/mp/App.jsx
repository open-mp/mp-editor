import React from 'react';
import ComponentList from './ComponentList';

import Design from '../components/design/index';
import {Button, Notify} from 'zent';

import {getQuery} from "src/common/api/url";
import * as bundleAPi from "src/common/api/bundle";


class App extends React.Component {
    constructor(props) {
        super(props);
        let {pageId, structure, contentId} = getQuery();
        // 动态页的内容编辑不允许用户搜索
        this.setState({
            pageId, structure, contentId,
            allowUserQuery: structure == 'static'
        });
        this.loadBundleList();
    }

    state = {
        bundleSerchKey: '',// bundle搜索的key
        bundleList: [], // bundle列表
        bundlePageIndex: 1,
        bundlePageSize: 10,
        allowUserQuery: true,
        pageId: null,
        contentId: null,
        structure: 'static',
        instanceList: [],
    }

    render() {
        let {bundleList,allowUserQuery} = this.state;
        return (
            <div className="mp-workspace">
                <div className="mp-workspace--toolbox">
                    <ComponentList bundleList={bundleList} allowUserQuery={allowUserQuery} onAddComponent={(bundleId) => {
                        this.onAddComponent(bundleId);
                    }}/>
                </div>
                <div className="mp-workspace--editor-wrapper">
                    <Design
                        ref={this.saveDesign}
                        cache
                        confirmUnsavedLeave={false}
                        scrollTopOffset={-270}
                    />
                    <div className="design-example-actions">
                        <Button type="primary" onClick={this.submit}>
                            上架
                        </Button>
                        <Button onClick={this.notImplemented}>
                            保存草稿
                        </Button>
                        <Button onClick={this.notImplemented}>
                            预览
                        </Button>
                    </div>
                </div>
            </div>);
    }

    onAddComponent(bundleId) {
        this.design.addInstanceByBundle(bundleId);

    }

    notImplemented() {
        Notify.error('仅作为演示，功能未开发');
    }

    saveDesign = instance => {
        this.design = instance;
    }

    submit = () => {
        this.design.validate()
            .then(() => {
                const data = Design.stripUUID(this.state.value);
                console.log(data);
                // submit this.state.value to server
                this.design.markAsSaved();
                Notify.success('提交成功');
            })
            .catch(validations => {
                console.log(validations);
            });
    }

    onChange = newValue => {
        this.setState({
            value: newValue
        });
    }

    onSettingsChange = newSettings => {
        this.setState({
            settings: newSettings
        });
    }

    /**
     * 加载bundle
     */
    async loadBundleList() {
        let {pageId, pageSize, pageNo, bundleSerchKey} = this.state;
        let {list: bundleList} = await bundleAPi.queryBundle({pageId, pageSize, pageNo, key: bundleSerchKey});
        this.setState({bundleList});
    }

    /**
     * 加载bundle配置
     */
    loadInstanceList() {

    }
}

export default App;
