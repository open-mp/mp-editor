
export let DesignEditor = {
    value: PropTypes.object,

    onChange: PropTypes.func.isRequired,

    // 验证状态
    validation: PropTypes.object.isRequired,

    // 是否强制显示所有错误
    showError: PropTypes.bool.isRequired,

    // 用来和 Design 交互
    design: PropTypes.object.isRequired,

    // Design 全剧配置
    settings: PropTypes.object,

    // 修改 settings 的回调函数
    onSettingsChange: PropTypes.func,
};

export let ControlGroup = {
    showError: PropTypes.bool,
    error: PropTypes.node,
    showLabel: PropTypes.bool,
    helpDesc: PropTypes.node,
    label: PropTypes.node,

    // 自定义label对齐方式
    labelAlign: PropTypes.string,

    // 点击 label 区域时是否 focus 到 control 的 input 上
    focusOnLabelClick: PropTypes.bool,

    required: PropTypes.bool,
    className: PropTypes.string,
    prefix: PropTypes.string,
};
