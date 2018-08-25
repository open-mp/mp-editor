import React from 'react';
import * as mpApi from 'src/common/api/mp'
import * as bundleApi from 'src/common/api/bundle'
import {Layout, Input, ColorPicker, Select, Notify, Button} from 'zent'
import {getQuery} from 'src/common/api/url'

const {Row, Col} = Layout

class App extends React.Component {
    state = {
        loaded: false,
        page: {
            config: {}
        },
        bundleList: []
    }

    constructor(props) {
        super(props);
        // 加载小程序
        this.loadPage();
        this.loadBundleList();
    }

    handleChange = (evt) => {
        const {target} = evt;
        let {name, type, value} = target;
        let {page} = this.state;
        if (name.indexOf('.') > -1) {
            let parts = name.split('.');
            page[parts[0]][parts[1]] = value;
        } else {
            page[name] = value;

        }
        this.setState({
            page
        });
    }

    colorChange = (name) => {
        return (value) => {
            let {page} = this.state;
            if (name.indexOf('.') > -1) {
                let parts = name.split('.');
                page[parts[0]][parts[1]] = value;
            } else {
                page[name] = value;

            }
            this.setState({
                page
            });
        }
    }

    render() {
        let {page, loaded, bundleList} = this.state;
        if (!loaded) return null;
        return (<div className="mp-papge-detail">
            <Row>
                <Col span={4}>Label</Col>
                <Col span={8}><Input placeholder="请输入Label"
                                     value={page.label}
                                     name="label"
                                     onChange={this.handleChange}/></Col>
            </Row>
            <Row>
                <Col span={4}>页面名字</Col>
                <Col span={8}><Input placeholder="页面名字"
                                     name="name"
                                     value={page.name} onChange={this.handleChange}/></Col>
            </Row>
            <Row>
                <Col span={4}>description</Col>
                <Col span={8}><Input placeholder="description"
                                     name="description"
                                     value={page.description} onChange={this.handleChange}/></Col>
            </Row>
            <Row>
                <Col span={4}>导航栏文字</Col>
                <Col span={8}><Input
                    placeholder="导航栏文字"
                    name="config.navigationBarTitleText"
                    value={page.config.navigationBarTitleText} onChange={this.handleChange}/></Col>
            </Row>
            <Row>
                <Col span={4}>导航栏颜色</Col>
                <Col span={8}><ColorPicker color={page.config.navigationBarBackgroundColor}
                                           onChange={this.colorChange('config.navigationBarBackgroundColor')}/></Col>
            </Row>
            <Row>
                <Col span={4}>导航栏背景色</Col>
                <Col span={8}>
                    <Select value={page.config.navigationBarTextStyle} onChange={this.handleChange}
                            name="config.navigationBarTextStyle">
                        <Option value="black">黑色</Option>
                        <Option value="white">白色</Option>
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col span={4}>页面背景色</Col>
                <Col span={8}><ColorPicker color={page.config.backgroundColor}
                                           onChange={this.colorChange('config.backgroundColor')}/></Col>
            </Row>
            <Row>
                <Col span={4}>下拉文字颜色</Col>
                <Col span={8}>
                    <Select value={page.config.backgroundTextStyle} onChange={this.handleChange}
                            name="config.backgroundTextStyle">
                        <Option value="dark">黑色</Option>
                        <Option value="light">白色</Option>
                    </Select>
                </Col>
            </Row>
            {page.structure == 'dynamic' && (<Row>
                <Col span={4}>动态组件(多选)</Col>
                <Col span={8}>
                    <Select
                        value={page.bundleList}
                        data={bundleList}
                        optionText="name"
                        optionValue="id"
                        tags
                    >
                    </Select>
                </Col>
            </Row>)}
            <div>
                <Button type="primary" outline onClick={this.savePage}>保存</Button>
            </div>
        </div>);
    }

    async loadPage() {
        let {pageId} = getQuery();
        let page = await mpApi.getMpPageDetail(pageId);
        this.setState({page, loaded: true});
    }

    savePage = async () => {
        let page = this.state.page;
        await mpApi.saveMpPageDetail(page);
        Notify.success('保存成功');
    }

    async loadBundleList() {
        let bundleList = await bundleApi.queryBundle({});
        this.setState({
            bundleList
        });
    }
}

export default App;
