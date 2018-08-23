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
        const { handleSubmit } = this.props;
        return (
            <Form horizontal onSubmit={handleSubmit(this.submit)} >
                <FormInputField
                    name="name"
                    type="text"
                    label="昵称:"
                    required
                    spellCheck={false}
                    validations={{ required: true }}
                    validationErrors={{ required: '请填写昵称' }}
                />
                <FormColorPickerField
                    name="color"
                    label="喜欢的颜色:"
                    value="#5197FF"
                />
                <div className="zent-form__form-actions">
                    <Button type="primary" htmlType="submit">获取表单值</Button>
                    <Button type="primary" outline onClick={this.resetForm}>重置表单值</Button>
                </div>
            </Form>
        );
    }

    onCheckboxChange = (checkedList) => {
        this.setState({ checkedList });
    }

    submit = (values, zentForm) => {
        Notify.success(JSON.stringify(values));
    };

    resetForm = () => {
        this.props.zentForm.resetFieldsValue();
    }
}

export default createForm()(Basic)