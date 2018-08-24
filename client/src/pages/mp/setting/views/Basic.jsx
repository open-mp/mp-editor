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
        let { window = {} } = mp;
        return (
            <Form horizontal onSubmit={handleSubmit(this.submit)} >
                <FormInputField
                    name="navigationBarTitleText"
                    type="text"
                    label="小程序名字:"
                    required
                    spellCheck={false}
                    validations={{ required: true }}
                    validationErrors={{ required: '请填写小程序名字' }}
                    value={window.navigationBarTitleText}
                />
                <FormSelectField
                    name="navigationBarTextStyle"
                    label="导航栏文字颜色:"
                    data={[
                        { value: 'black', text: '黑色' },
                        { value: 'white', text: '白色' }
                    ]}
                    required
                    validations={{ required: true }}
                    validationErrors={{ required: '导航栏文字颜色' }}
                    value={window.navigationBarTextStyle}
                />
                <FormColorPickerField
                    name="navigationBarBackgroundColor"
                    label="导航栏背景色:"
                    value={window.navigationBarBackgroundColor}
                />
                <FormColorPickerField
                    name="backgroundColor"
                    label="窗口背景颜色:"
                    value={window.backgroundColor}
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
            window: values
        })
    };

    resetForm = () => {
        this.props.zentForm.resetFieldsValue();
    }
}

export default createForm()(Basic)