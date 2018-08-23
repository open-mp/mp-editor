import React from 'react';
import { Form, Radio, Checkbox, Button, Notify } from 'zent';
const { Field, FormInputField, FormSelectField, FormRadioGroupField, FormCheckboxField, FormCheckboxGroupField, FormColorPickerField, FormDateRangePickerField, FormNumberInputField, FormSwitchField, createForm } = Form;

class Basic extends React.Component {
    state = {
        checkedList: []
    }

    constructor(props) {
        super(props)
    }
    render() {
        const { handleSubmit, mp } = this.props;
        let { tabBar = {}, tabBarButtons = {} } = mp;
        return (
            <Form horizontal onSubmit={handleSubmit(this.submit)} >
                <FormColorPickerField
                    name="color"
                    label="文字默认颜色:"
                    value={tabBar.color}
                />
                <FormColorPickerField
                    name="selectedColor"
                    label="文字选中颜色:"
                    value={tabBar.selectedColor}
                />
                <FormColorPickerField
                    name="backgroundColor"
                    label="背景色:"
                    value={tabBar.backgroundColor}
                />
                <FormSelectField
                    name="borderStyle"
                    label="上边框颜色:"
                    data={[
                        { value: 'black', text: '黑色' },
                        { value: 'white', text: '白色' }
                    ]}
                    required
                    validations={{ required: true }}
                    validationErrors={{ required: '导航栏文字颜色' }}
                    value={tabBar.borderStyle}
                />
                <FormSelectField
                    name="position"
                    label="位置:"
                    data={[
                        { value: 'bottom', text: '底部' },
                        { value: 'top', text: '顶部' }
                    ]}
                    required
                    validations={{ required: true }}
                    validationErrors={{ required: '导航栏文字颜色' }}
                    value={tabBar.position}
                />

                <div className="zent-form__form-actions">
                    <Button type="primary" htmlType="submit">获取表单值</Button>
                    <Button type="primary" outline onClick={this.resetForm}>重置表单值</Button>
                </div>
            </Form>
        );
    }

    submit = (values, zentForm) => {
        this.props.saveMp({
            tabBar: values
        })
    };

    resetForm = () => {
        this.props.zentForm.resetFieldsValue();
    }
}

export default createForm()(Basic)