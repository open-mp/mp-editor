import React from 'react';
import * as mpApi from 'src/common/api/mp'
import { Tabs, Notify } from 'zent';
const TabPanel = Tabs.TabPanel;
import { getQuery } from 'src/common/api/url'
import Basic from './views/Basic'
import TabBarStyle from './views/TabBarStyle'
import TabBarButton from './views/TabBarButton'
class App extends React.Component {

    onTabChange = (id) => {
        this.setState({
            activeId: id
        });
    }

    constructor(props) {
        super(props);
        let { mpId } = getQuery();
        this.state = {
            mpId,
            activeId: '1',
            mpDetail: {

            }
        }
    }

    render() {
        let { mpDetail } = this.state;
        return (
            <Tabs
                activeId={this.state.activeId}
                onChange={this.onTabChange}
            >
                <TabPanel
                    tab={<span>基础设置</span>}
                    id="1"
                >
                    <Basic  mp={mpDetail} saveMp={this.saveMp}></Basic>
                </TabPanel>
                <TabPanel
                    tab="TabBar样式"
                    id="2"
                >
                    <TabBarStyle mp={mpDetail} saveMp={this.saveMp}></TabBarStyle>
                </TabPanel>
                <TabPanel
                    tab="TabBar按钮"
                    id="3"
                >
                    <TabBarButton mp={mpDetail} saveMp={this.saveMp}></TabBarButton>
                </TabPanel>
            </Tabs>
        );
    }

    saveMp = async (mp) => {
       let { mpId } = this.state;
       await  mpApi.saveMp(mpId, mp);
       Notify.success('保存成功');
    }

    async loadMpList() {
        let { mpId } = this.state;
        let mpDetail = await mpApi.getMpDetail(mpId);
        this.setState({ mpDetail })

    }

    componentDidMount() {
        this.loadMpList();
    }
}

export default App;
