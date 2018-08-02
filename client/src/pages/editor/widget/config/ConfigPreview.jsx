import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
const prefix = 'mp';

export default class ConfigPreview extends PureComponent {
  static propTypes = {
    value: PropTypes.object,

    // 用来和 Design 交互
    design: PropTypes.object,

  };

  render() {
    const { value } = this.props;

    return (
      <div className={`${prefix}-design-component-config-preview`}>
        <div className={`${prefix}-design-component-config-preview__title`}>
          {value.title}
        </div>
      </div>
    );
  }
}
