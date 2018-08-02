import PropTypes from "prop-types";

export  default {
    className: PropTypes.string,

        prefix: PropTypes.string,

    design: PropTypes.object.isRequired,

    components: PropTypes.array.isRequired,

    value: PropTypes.array.isRequired,

    settings: PropTypes.object,

    onSettingsChange: PropTypes.func,

    footer: PropTypes.node,

    appendableComponents: PropTypes.array,

    showAddComponentOverlay: PropTypes.bool.isRequired,

    addComponentOverlayPosition: PropTypes.number.isRequired,

    selectedUUID: PropTypes.string,

    getUUIDFromValue: PropTypes.func.isRequired,

    onSelect: PropTypes.func.isRequired,

    // 处理添加按钮的回调函数
    onAdd: PropTypes.func.isRequired,

    // 添加新组件
    onAddComponent: PropTypes.func.isRequired,

    onDelete: PropTypes.func.isRequired,

    onEdit: PropTypes.func.isRequired,

    onMove: PropTypes.func.isRequired,

    disabled: PropTypes.bool,

    // 每个组件的实例数量
    componentInstanceCount: PropTypes.object,

    // 以下 props 由 config 组件提供
    background: PropTypes.string,
};
