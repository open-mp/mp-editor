/**
 * mp editor 插件定义
 */

let definition = {
    // 所属bundle
    bundleId: {
        groupId: '',
        artifactId: '',
        version: '',
        classifier: '',
    },
    name: '',
    description: '',
    preview: null, // 预览组件
    previewType: 'react',
    editForm: null, // 数据编辑表单
    editFormType: 'react',
    isEditable: false, // 组件数据是否可编辑
    highlightWhenSelect: true, // 选择后是否高亮
    quikAction: {
        allowDrag: true, // 是否可以拖拽
        allowDelete: false,
    },
    // 获取初始值
    getInitialValue() {

    },
    // 验证示例数据
    validate(instance) {

    }
}
