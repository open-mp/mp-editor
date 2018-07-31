import React from 'react'
import Design from '../components/design/index'
import { Button, Notify } from 'zent';

import configConf from '../widget/config';
import ConfigEditor from '../widget/config/ConfigEditor';
import whitespaceConf from '../widget/whitespace';
import lineConf from '../widget/line';
import richtextConf from '../widget/richtext';
import imageAdConf from '../widget/image-ad';

const components = [
  configConf,
  richtextConf,
  imageAdConf,
  whitespaceConf,
  lineConf
];

const groupedComponents = [configConf,
  Design.group('基础'),
  richtextConf,
  imageAdConf,
  Design.group('其他'),
  whitespaceConf,
  lineConf
];


class Simple extends React.Component {
  state = {
    grouped: true,
    value: [
      {
        type: configConf.type,
        ...ConfigEditor.getInitialValue()
      }
    ],
    settings: {
      // previewBackground: 'red'
    }
  };

  onChange = newValue => {
    this.setState({
      value: newValue
    });
  };

  onSettingsChange = newSettings => {
    this.setState({
      settings: newSettings
    });
  };

  switchMode = () => {
    const { grouped } = this.state;

    this.setState({
      grouped: !grouped
    });
  };

  render() {
    const { grouped } = this.state;

    return (
      <div>
        <Design
          ref={this.saveDesign}
          cache
          cacheId="zent-design-test"
          confirmUnsavedLeave={false}
          components={grouped ? groupedComponents : components}
          value={this.state.value}
          onChange={this.onChange}
          settings={this.state.settings}
          onSettingsChange={this.onSettingsChange}
          scrollTopOffset={-270}
          globalConfig={window._global}
        />
        <div className="design-example-actions">
          <Button type="primary" onClick={this.submit}>
            上架
          </Button>
          <Button onClick={this.notImplemented}>
            保存草稿
          </Button>
          <Button onClick={this.notImplemented}>
            预览
          </Button>
          <Button onClick={this.switchMode}>
            {grouped ? '组件合并显示' : '组件分组显示'}
          </Button>
        </div>
      </div>
    );
  }

  notImplemented() {
    Notify.error('仅作为演示，功能未开发');
  }

  saveDesign = instance => {
    this.design = instance && instance.getDecoratedComponentInstance();
  };

  triggerDesignValidation() {
    return this.design.validate();
  }

  submit = () => {
    this.triggerDesignValidation()
      .then(() => {
        const data = Design.stripUUID(this.state.value);
        console.log(data);
        // submit this.state.value to server
        this.design.markAsSaved();
        Notify.success('提交成功');
      })
      .catch(validations => {
        console.log(validations);
      });
  };
}

export default Simple