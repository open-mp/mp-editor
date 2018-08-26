import React from 'react';
import {Form, Radio, Checkbox, Button, Notify, Pop, Icon} from 'zent';

const {
    Field, FormInputField, FormSelectField, FormRadioGroupField, FormCheckboxField,
    FormCheckboxGroupField, FormColorPickerField,
    FormDateRangePickerField, FormNumberInputField, FormSwitchField,
    FormSection, FieldArray, createForm
} = Form;
import * as mpApi from 'src/common/api/mp'
import {getQuery} from 'src/common/api/url'

import './tab-bar-config.pcss'

class Basic extends React.Component {
    state = {
        checkedList: [],
        staticPageList: [],
        dynamicPageList: [],
        contentList: []
    }

    constructor(props) {
        super(props)
    }

    render() {
        let {name, tabBar} = this.props;
        let {staticPageList, dynamicPageList, contentList} = this.state;

        return (
            <FormSection name={name}>
                <FormInputField
                    name="text"
                    type="text"
                    label="Tab名字:"
                    required
                    spellCheck={false}
                    validations={{required: true}}
                    validationErrors={{required: '请填写Tab名字'}}
                />
                <FormInputField
                    name="iconUrl"
                    type="text"
                    label="默认图标:"
                    spellCheck={false}
                    validationErrors={{required: '默认图标'}}
                    value={window.navigationBarTitleText}
                />
                <FormInputField
                    name="selectedIconUrl"
                    type="text"
                    label="选中图标:"
                    spellCheck={false}
                    validationErrors={{required: '选中图标'}}
                    value={window.navigationBarTitleText}
                />
                <FormSelectField
                    name="pageType"
                    label="页面类型:"
                    data={[
                        {value: 'dynamic', text: '动态'},
                        {value: 'static', text: '静态'}
                    ]}
                    required
                    onChange={this.onPageTypeChange}
                    validations={{required: true}}
                    validationErrors={{required: '页面类型'}}
                    value={window.navigationBarTextStyle}
                />
                {tabBar.pageType == 'static' && <FormSelectField
                    name="pageId"
                    label="跳转的静态页:"
                    data={staticPageList}
                    optionText="label"
                    optionValue="id"
                    validationErrors={{required: '跳转的静态页'}}
                    value={window.navigationBarTextStyle}
                />}
            </FormSection>
        );
    }

    onPageTypeChange = (e) => {
        this.forceUpdate();
    }

    async componentDidMount() {
        let {mpId} = getQuery();
        let staticPageList = await mpApi.getMpStaticPageList(mpId);
        this.setState({staticPageList})
    }
}

export default Basic