

import React from 'react';
import { Menu, Icon } from 'zent';
import './BasicLayout.pcss'
const { MenuItem, SubMenu } = Menu;

const onClick = (e, key) => {
    console.log(e, key);
}

export default class BasicLayout extends React.PureComponent {

    render() {
        let {children} = this.props;
        return (
            <div className="mp-layout mp-layout-basic">
                <div className="mp-layout__slide">
                    <div className="mp-menu-header">
                        小程序工厂
                    </div>
                    {this.renderMenu()}
                </div>
                <div className="mp-layout__content">
                    <div className="mp-layout__header">
                        header
                    </div>
                    <div className="mp-layout__body">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    renderMenu() {
        return (
            <Menu
                mode="inline"
                onClick={this.onClick}
            >
                <MenuItem key="1">
                    小程序列表
                </MenuItem>
                <MenuItem key="2">
                    我的Bundle
                </MenuItem>
                <MenuItem key="3">
                    Bundle市场
                </MenuItem>
            </Menu>
        )
    }

    onClick = (e)=>{

    }
}
