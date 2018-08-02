import React from 'react';
import ComponentList from './ComponentList';

import Design from '../components/design/index';
import {Button, Notify} from 'zent';

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

class App extends React.Component {
    state = {
        value: [
            {
                type: configConf.type,
                ...ConfigEditor.getInitialValue()
            }
        ]
    };

    render() {
        return (
            <div className="mp-workspace">
                <div className="mp-workspace--toolbox">
                    <ComponentList onAddComponent={(component) => {
                        this.onAddComponent(component);
                    }}/>
                </div>
                <div className="mp-workspace--editor-wrapper">
                    <Design
                        ref={this.saveDesign}
                        cache
                        cacheId="zent-design-test"
                        confirmUnsavedLeave={false}
                        components={components}
                        value={this.state.value}
                        onChange={this.onChange}
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
                    </div>
                </div>
            </div>);
    }

    onAddComponent() {

    }

    notImplemented() {
        Notify.error('仅作为演示，功能未开发');
    }

    saveDesign = instance => {
        this.design = instance && instance.getDecoratedComponentInstance();
    };

    submit = () => {
        this.design.validate()
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
}

export default App;
