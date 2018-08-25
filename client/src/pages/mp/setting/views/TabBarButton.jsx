import React from 'react';
import TabBarConfig from '../components/TabBarConfigWrapper'
import { Form, Radio, Checkbox, Button, Notify } from 'zent';
const { Field, FormInputField, FormSelectField, FormRadioGroupField, FormCheckboxField,
    FormCheckboxGroupField, FormColorPickerField,
    FormDateRangePickerField, FormNumberInputField, FormSwitchField,
    FieldArray, createForm } = Form;

class Basic extends React.Component {
    state = {
        checkedList: []
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { handleSubmit, mp } = this.props;
        let { tabBar = {}, tabBarButtons = [] } = mp;
        return (
            <Form horizontal onSubmit={handleSubmit(this.submit)} >
                <FieldArray
                    name="tabBarButtons"
                    component={TabBarConfig}
                    value={tabBarButtons}
                />
                <div className="zent-form__form-actions">
                    <Button type="primary" htmlType="submit">保存</Button>
                </div>
            </Form>
        );
    }

    submit = (values, zentForm) => {
        this.props.saveMp(values)
    };

    resetForm = () => {
        this.props.zentForm.resetFieldsValue();
    }
}

export default createForm()(Basic)