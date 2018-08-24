import React from 'react';
import { Form, Radio, Checkbox, Button, Notify, Pop, Icon } from 'zent';
const { Field, FormInputField, FormSelectField, FormRadioGroupField, FormCheckboxField,
    FormCheckboxGroupField, FormColorPickerField,
    FormDateRangePickerField, FormNumberInputField, FormSwitchField,
    FormSection, FieldArray, createForm } = Form;
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
                            <FormSection name={name}>
                                <FormInputField
                                    name="text"
                                    type="text"
                                    label="Tab名字:"
                                    required
                                    spellCheck={false}
                                    validations={{ required: true }}
                                    validationErrors={{ required: '请填写Tab名字' }}
                                />
                                <FormInputField
                                    name="iconUrl"
                                    type="text"
                                    label="默认图标:"
                                    spellCheck={false}
                                    validationErrors={{ required: '默认图标' }}
                                    value={window.navigationBarTitleText}
                                />
                                <FormInputField
                                    name="selectedIconUrl"
                                    type="text"
                                    label="选中图标:"
                                    spellCheck={false}
                                    validationErrors={{ required: '选中图标' }}
                                    value={window.navigationBarTitleText}
                                />
                                <FormSelectField
                                    name="pageStructure"
                                    label="页面类型:"
                                    data={[
                                        { value: 'dynamic', text: '动态' },
                                        { value: 'static', text: '静态' }
                                    ]}
                                    required
                                    validations={{ required: true }}
                                    validationErrors={{ required: '页面类型' }}
                                    value={window.navigationBarTextStyle}
                                />
                                <FormSelectField
                                    name="pageStructure"
                                    label="跳转的静态页:"
                                    data={[
                                        { value: 1, text: '我的' },
                                        { value: 2, text: '爆品' }
                                    ]}
                                    required
                                    validations={{ required: true }}
                                    validationErrors={{ required: '跳转的静态页' }}
                                    value={window.navigationBarTextStyle}
                                />
                               <FormSelectField
                                    name="pageStructure"
                                    label="跳转的动态页:"
                                    data={[
                                        { value: 1, text: '国庆活动' },
                                        { value: 2, text: '中秋活动' }
                                    ]}
                                    required
                                    validations={{ required: true }}
                                    validationErrors={{ required: '跳转的动态页' }}
                                    value={window.navigationBarTextStyle}
                                />
                            </FormSection>
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