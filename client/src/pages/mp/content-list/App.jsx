import React from 'react';
import * as mpApi from 'src/common/api/mp'
import {Table, Button} from 'zent'

const columns = [{
    title: '小程序名字',
    name: 'name',
    width: '200px'
}, {
    title: '描述',
    name: 'description',
}, {
    title: '最后修改时间',
    name: 'lastModified',
    width: '100px',
    textAlign: 'center',
}, {
    title: '操作',
    width: '200px',
    bodyRender(data) {
        return (<div>
            <a href={`/mp/page-list?mpId=${data.id}`} target="_blank"><Button type="primary" outline>页面列表</Button></a>
            <a href={`/mp/detail?mpId=${data.id}`} target="_blank"><Button type="primary" outline>小程序详情</Button></a>
        </div>)
    }
}];

class App extends React.Component {
    state = {
        mpList: []
    }

    constructor(props) {
        super(props);
        // 加载小程序
        this.loadMpList();
    }

    render() {
        let {mpList} = this.state;
        return (<Table
            columns={columns}
            pageInfo={null}
            datasets={mpList}
            rowKey="id"
        />);
    }

    async loadMpList() {
        let mpList = await mpApi.getMpList();
        this.setState({mpList});
    }
}

export default App;
