import React from 'react';
import { Form, Radio, Checkbox, Button, Notify } from 'zent';
const { Field, FormInputField, FormSelectField, FormRadioGroupField, FormCheckboxField,
    FormCheckboxGroupField, FormColorPickerField,
    FormDateRangePickerField, FormNumberInputField, FormSwitchField,
    FormSection, FieldArray, createForm } = Form;

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
            <ul>
                {fields.map((member, index, key) => {
                    return (
                            <FormInputField
                                name="text"
                                type="text"
                                label="小程序名字:"
                                required
                                spellCheck={false}
                                validations={{ required: true }}
                                validationErrors={{ required: '请填写小程序名字' }}
                            />
                    );
                })}
            </ul>
        );
    }

    submit = (values, zentForm) => {
        this.props.saveMp({
            tabBarButtons: values
        })
    };

    resetForm = () => {
        this.props.zentForm.resetFieldsValue();
    }
}

export default createForm()(Basic)