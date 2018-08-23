import React from 'react';
import * as mpApi from 'src/common/api/mp'
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;
import { getQuery } from 'src/common/api/url'
import Basic from './views/Basic'
import Navigator from './views/Navigator'

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
                    tab="导航设置"
                    id="2"
                >
                    <Navigator mp={mpDetail} saveMp={this.saveMp}></Navigator>
                </TabPanel>
            </Tabs>
        );
    }

    saveMp = (mp) => {

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
