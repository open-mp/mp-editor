import PropTypes from "prop-types";

export default {
    // 这个组件的唯一标示，不随位置变化而变化
    id: PropTypes.string.isRequired,

    // 组件的下标，-1 如果不可拖拽
    index: PropTypes.number,

    // 是否允许 hover 效果，不允许的话不会显示各种按钮
    // 拖拽的时候用
    allowHoverEffects: PropTypes.bool.isRequired,

    // 是否可以编辑，UMP里面有些地方config是不能编辑的
    editable: PropTypes.bool,

    // 组件是否可以拖拽
    dragable: PropTypes.bool,

    // 是否显示右下角的编辑区域
    configurable: PropTypes.bool,

    // 时候现实删除按钮
    canDelete: PropTypes.bool,

    // 是否吸纳事添加组件按钮
    canInsert: PropTypes.bool,

    // 选中时是否高亮
    highlightWhenSelect: PropTypes.bool,

    // 当前是否选中
    isSelected: PropTypes.bool.isRequired,

    // 这个组件对应的值
    value: PropTypes.object.isRequired,

    // Design 组件的全局配置
    settings: PropTypes.object,

    // 选中的会掉函数
    onSelect: PropTypes.func.isRequired,

    // 编辑的回调函数
    onEdit: PropTypes.func.isRequired,

    // 添加新组件的回调函数
    onAdd: PropTypes.func.isRequired,

    // 删除组件的回调函数
    onDelete: PropTypes.func.isRequired,

    // 拖拽时移动组件的回调函数
    onMove: PropTypes.func.isRequired,

    // design 组件暴露的方法
    design: PropTypes.object.isRequired,

    // 用来渲染预览的组件
    component: PropTypes.func.isRequired,

    // preview 额外的 props
    previewProps: PropTypes.object,

    prefix: PropTypes.string,
};
