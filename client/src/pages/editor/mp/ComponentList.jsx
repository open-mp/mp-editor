import React from 'react';
import {Button} from 'zent';

class ComponentList extends React.Component {
    render() {
        let {bundleList} = this.props;

        return bundleList.map(bundle => {
            return (
                <div className="component-panel">
                    <div>{bundle.name}</div>
                    <div>
                        <Button type="success" onClick={() => {
                            this.props.onAddComponent && this.props.onAddComponent(bundle.bundleId);
                        }} outline>使用</Button>
                    </div>
                </div>
            );
        });
    }
}

export default ComponentList;
