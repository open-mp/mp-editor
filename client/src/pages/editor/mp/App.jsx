import React from 'react';
import ComponentList from './ComponentList';

import Design from '../components/design/index';
import {Button, Notify} from 'zent';

import {getQuery} from "src/common/api/url";
import * as bundleAPi from "src/common/api/bundle";
import * as mpAPi from "src/common/api/mp";


class App extends React.Component {
    constructor(props) {
        super(props);
        
    }

    state = {
        bundleSerchKey: '',// bundle搜索的key
        bundleList: [], // bundle列表
        bundlePageIndex: 1,
        bundlePageSize: 10,
        allowUserQuery: true,
        pageId: '',
        contentId: '',
        structure: 'static',
        instanceList: [],
    }

    componentDidMount() {
        let {pageId, structure, contentId} = getQuery();

        // 动态页的内容编辑不允许用户搜索
        this.setState({
            pageId, 
            structure, 
            contentId,
            allowUserQuery: structure == 'static'
        }, () => {
            this.loadBundleList();
            this.loadInstanceList();
        });     
    }

    render() {
        let {bundleList ,allowUserQuery} = this.state;
        return (
            <div className="mp-workspace">
                <div className="mp-workspace--toolbox">
                    <ComponentList bundleList={bundleList} allowUserQuery={allowUserQuery} onAddComponent={(coordinate) => {
                        this.onAddComponent(coordinate);
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

    onAddComponent(coordinate) {
        this.design.addInstanceByBundle(coordinate);
    }

    notImplemented() {
        Notify.error('仅作为演示，功能未开发');
    }

    saveDesign = design => {
        this.design = design;   
    }

    submit = async() => {
       let valid = this.design.validate();
       if (valid) {
            const data =  this.design.getInstanceList();
            console.log(JSON.stringify(data));
       }
    }

    /**
     * 加载bundle
     */
    async loadBundleList() {
        let {pageId, pageSize, pageNo, bundleSerchKey} = this.state;
        let bundleList = await bundleAPi.queryBundle({pageId, pageSize, pageNo, key: bundleSerchKey});
        this.setState({bundleList});
    }

    /**
     * 加载bundle配置
     */
    async loadInstanceList() {
        let { pageId, structure, contentId} = this.state;
        if (contentId) {
            let result = 
                await mpAPi.getContentDetail(contentId);
            this.design.setInstanceList(result.instanceList);
        } else if (pageId) {
            let result = 
                await mpAPi.getMpPageStructure(pageId);
            this.design.setInstanceList(result.instanceList);
        } else {
            this.design.initInstanceList({
                groupId: 'org.tsxuemu.bundle.example',
                artifactId: 'config',
                version: '1.0.0',
                classifier: ''
            });
        }
    }
}

export default App;
