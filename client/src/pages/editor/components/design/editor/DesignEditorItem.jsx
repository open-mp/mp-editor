import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';


export default class DesignEditorItem extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,

        disabled: PropTypes.bool,

        className: PropTypes.string
    };

    static defaultProps = {
        disabled: false
    };

    render() {
        const { disabled, className } = this.props;

        return (
            <div className={cx(`mp-design-editor-item`, className)}>
                {disabled && <div className={`mp-design__disabled-mask`}/>}
                {this.props.children}
            </div>
        );
    }

    getBoundingBox() {
        const node = findDOMNode(this);
        return node && node.getBoundingClientRect();
    }
}
