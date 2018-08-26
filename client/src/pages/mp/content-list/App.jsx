import React from 'react';
import * as mpApi from 'src/common/api/mp'
import {Table, Button} from 'zent'
import {getQuery} from "src/common/api/url";

const columns = [{
    title: '动态页名字',
    name: 'name',
    width: '200px'
}, {
    title: '描述',
    name: 'description',
}, {
    title: '最后修改时间',
    name: 'lastModified',
    width: '100px',
}, {
    title: '操作',
    width: '200px',
    bodyRender(data) {
        return (<div>
            <Button type="primary" outline>设为Tab1(中秋活动)页面</Button>
            <a href={`/editor/mp?mpId=${data.mpId}&contentId=${data.id}&structure=dynamic`}>
                <Button type="primary" outline>编辑</Button>
            </a>
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
        let {mpId} = getQuery();
        let mpList = await mpApi.getMpContentList(mpId);
        this.setState({mpList});
    }
}

export default App;
