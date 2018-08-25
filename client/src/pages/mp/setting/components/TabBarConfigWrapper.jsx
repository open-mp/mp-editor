import React from 'react';
import { Form, Radio, Checkbox, Button, Notify, Pop, Icon } from 'zent';
const { Field, FormInputField, FormSelectField, FormRadioGroupField, FormCheckboxField,
    FormCheckboxGroupField, FormColorPickerField,
    FormDateRangePickerField, FormNumberInputField, FormSwitchField,
    FormSection, FieldArray, createForm } = Form;
import TabBarConfig from './TabBarConfig'
import './tab-bar-config.pcss'
class Basic extends React.Component {
    state = {
        checkedList: []
    }

    constructor(props) {
        super(props)
    }
    render() {
        const { fields } = this.props;

        return (
            <div>
                <div><Button type="primary" outline onClick={this.addTabBarBtn}>增加一个TabBarButton</Button></div>
                {fields.map((name, index, key, item, fieldsValue) => {
                    return (
                        <div className="tab-bar-container" key={`tabBar${key}`}>
                            <span className="tab-bar-title"> TabBarButton {index + 1} </span>
                            <Pop centerArrow trigger="hover" content="删除该成员">
                                <Icon
                                    className="del-btn"
                                    type="close-circle"
                                    onClick={() => fields.remove(index)}
                                />
                            </Pop>
                            <TabBarConfig index={index} name={name} tabBar={item} />
                        </div>
                    );
                })}
            </div>
        );
    }


    addTabBarBtn = () => {
        this.props.fields.push({
            "pageId": 1,
            "pageName": "",
            "pageStructure": "static",
            "contentId": "",
            "iconUrl": "",
            "selectedIconUrl": "",
            "text": "新增按钮 " + this.props.fields.length
        });
    };


}

export default Basic