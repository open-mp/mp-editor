import React from 'react';
import {Button, SearchInput} from 'zent';

class ComponentList extends React.Component {
    render() {
        let {bundleList, allowUserQuery} = this.props;
        return (<div>
            {allowUserQuery && <SearchInput
                placeholder="搜索"
            />}
            {bundleList.map(bundle => {
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
            })}
        </div>)

    }
}

export default ComponentList;
