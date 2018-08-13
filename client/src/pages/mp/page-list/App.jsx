import React from 'react';
import * as mpApi from 'src/common/api/mp'
import {Table, Button} from 'zent'
import {getQuery} from 'src/common/api/url'

const columns = [{
    title: '页面名字',
    name: 'name',
    width: '200px'
}, {
    title: '类型',
    name: 'description',
    bodyRender(data) {
        return (<span>{data.structure == 'static' ? '静态结构页' : '动态结构'}</span>)
    }
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
    bodyRender(page) {
        // 动态结构页
        // 静态结构页
        if (page.structure == 'static') {
            return (<div>
                <Button type="primary" outline>页面设置</Button>
                <a href={`/editor/mp?pageId=${page.id}&structure=static`} target="_blank">
                    <Button type="primary" outline>编辑</Button>
                </a>
            </div>)
        } else {
            return (<div>
                <Button type="primary" outline>页面设置</Button>
                <Button type="primary" outline>编辑页面组件</Button>
                <a href={`/mp/content-list?pageId=${page.id}`}><Button type="primary" outline>内容列表</Button></a>
            </div>)
        }

    }
}];

class App extends React.Component {
    state = {
        mpPageList: []
    }

    constructor(props) {
        super(props);
        // 加载小程序
        this.loadMpList();
    }

    render() {
        let {mpPageList} = this.state;
        return (<Table
            columns={columns}
            pageInfo={null}
            datasets={mpPageList}
            rowKey="id"
        />);
    }

    async loadMpList() {
        let {mpId} = getQuery();
        let mpPageList = await mpApi.getMpPageList(mpId);
        this.setState({mpPageList});
    }
}

export default App;
