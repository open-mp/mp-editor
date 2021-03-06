import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';
import scroll from 'zent/lib/utils/scroll';

import offset from '../utils/offset';

const prefix = 'mp';

function scrollNodeToTop(node, offsets) {
    const pos = offset(node);
    const top = isFunction(offsets.top)
        ? offsets.top(pos.top)
        : pos.top + offsets.top;
    const left = isFunction(offsets.left)
        ? offsets.left(pos.left)
        : pos.left + offsets.left;
    scroll(document.body, left, top);
}

export default class DesignPreviewItem extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    static defaultProps = {};

    render() {
        const {children} = this.props;

        return <div className={`${prefix}-design-preview-item`}>{children}</div>;
    }

    scrollTop(offsets) {
        const node = findDOMNode(this);
        scrollNodeToTop(node, offsets);
    }
}
