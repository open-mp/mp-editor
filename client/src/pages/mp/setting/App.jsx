import React from 'react';
import * as mpApi from 'src/common/api/mp'
import {Table, Button} from 'zent'
import {getQuery} from 'src/common/api/url'


class App extends React.Component {
    state = {
    }

    constructor(props) {
        super(props);
    }

    render() {
        let {mpPageList} = this.state;
        return (<div>设置导航栏</div>);
    }

    async loadMpList() {
        let {mpId} = getQuery();
    }
}

export default App;
