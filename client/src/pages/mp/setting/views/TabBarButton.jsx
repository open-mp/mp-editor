import React from 'react';
import TabBarConfig from '../components/TabBarConfig'
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
                <FormInputField
                    name="name"
                    type="text"
                    label={
                        <span>
                            用户名&nbsp;
                        </span>
                    }
                    helpDesc="用户名为5-25个字符"
                    required
                />
                <FieldArray
                    name="tabBarButtons"
                    value={tabBarButtons}
                    component={TabBarConfig}
                />

                <div className="zent-form__form-actions">
                    <Button type="primary" htmlType="submit">保存</Button>
                    <Button type="primary" outline onClick={this.resetForm}>增加一个TabBarButton</Button>
                </div>
            </Form>
        );
    }

    submit = (values, zentForm) => {
        console.log(values)
        // this.props.saveMp({
        //     tabBarButtons: values
        // })
    };

    resetForm = () => {
        this.props.zentForm.resetFieldsValue();
    }
}

export default createForm()(Basic)