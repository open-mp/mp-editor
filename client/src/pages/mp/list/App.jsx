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
},{
    title: '最新版本号',
    name: 'lastModified',
    width: '100px',
    textAlign: 'center',
},{
    title: '上次生成时间',
    name: 'lastModified',
    width: '100px',
    textAlign: 'center',
}, {
    title: '是否需要重新生成',
    name: 'lastModified',
    width: '150px',
    textAlign: 'center',
}, {
    title: '操作',
    width: '200px',
    bodyRender(data) {
        return (<div>
            <a href={`/mp/dynamic-setting?mpId=${data.id}`}><Button type="primary" outline>微页面配置</Button></a>
            <a href={`/mp/content-list?mpId=${data.id}`}><Button type="primary" outline>微页面列表</Button></a>
            <a href={`/mp/page-list?mpId=${data.id}`}><Button type="primary" outline>页面列表</Button></a>
            <a href={`/mp/setting?mpId=${data.id}`}><Button type="primary" outline>小程序设置</Button></a>
            <Button type="primary" outline>生成小程序代码</Button>
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
