import React from 'react';
import * as mpApi from 'src/common/api/mp'
import {Table, Button} from 'zent'
import {getQuery} from 'src/common/api/url'

class App extends React.Component {
    state = {
        page: {}
    }

    constructor(props) {
        super(props);
        // 加载小程序
        this.loadPage();
    }

    render() {
        return (<div>详情</div>);
    }

    async loadPage() {
        let {pageId} = getQuery();
        let page = await mpApi.getMpPageDetail(pageId);
        this.setState({page});
    }
}

export default App;
