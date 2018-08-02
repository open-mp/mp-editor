import React from 'react';
import {Button} from 'zent';

const components = [
    {
        name: '页面顶部配置',
        description: '',
        groupId: '',
        artifactId: '',
        version: '',
        classifier: ''
    },
    {
        name: '图片广告',
        description: '',
        groupId: '',
        artifactId: '',
        version: '',
        classifier: ''
    },
    {
        name: '富文本',
        description: '',
        groupId: '',
        artifactId: '',
        version: '',
        classifier: ''
    },
    {
        name: '分割线',
        description: '',
        groupId: '',
        artifactId: '',
        version: '',
        classifier: ''
    },
    {
        name: '空白行',
        description: '',
        groupId: '',
        artifactId: '',
        version: '',
        classifier: ''
    }
];

class ComponentList extends React.Component {
    render() {
        return components.map(component => {
            return (
                <div className="component-panel">
                    <div>{component.name}</div>
                    <div>
                        <Button type="success" onClick={() => {
                            this.props.onAddComponent && this.props.onAddComponent(component);
                        }} outline>使用</Button>
                    </div>
                </div>
            );
        });
    }
}

export default ComponentList;
