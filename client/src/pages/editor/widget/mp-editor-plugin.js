/**
 * mp editor 插件定义
 */

let definition = {
    // 所述bundle
    bundle: {
        groupId: '',
        artifactId: '',
        version: '',
        classifier: '',
    },
    previewComponent: null, // 预览组件
    editForm: null, // 数据编辑表单
    isEditable: false, // 组件数据是否可编辑
    highlightWhenSelect: true,
    quikAction: {
        allowDrag: true, // 是否可以拖拽
        allowDelete: false,
        allowAddBefore: false,
        allowAddAfter: false
    },

    plugin: {

    },
}
