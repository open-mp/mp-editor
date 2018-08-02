import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";

export default {
    components: PropTypes.arrayOf(
        PropTypes.shape({
            // 组件类型
            type: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string),
            ]).isRequired,

            // 预览这个组件的 Component
            preview: PropTypes.func.isRequired,

            // 预览组件的包裹层
            previewItem: PropTypes.func,

            // 所有预览界面上的事件都是在这个里面处理的
            previewController: PropTypes.func,

            // 编辑这个组件的 Component
            editor: PropTypes.func.isRequired,

            // 编辑组件的包裹层
            editorItem: PropTypes.func,

            // 传给 editor 的额外 props
            editorProps: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

            // 传给 preview 的额外 props
            previewProps: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

            // 组件是否可以拖拽
            dragable: PropTypes.bool,

            // 组件是否出现在添加组件的列表里面
            appendable: PropTypes.bool,

            // 是否显示右下角的编辑区域(加内容/删除)
            // 如果要单独控制删除/加内容，请使用 canDelete 和 canInsert 来控制
            // 如果要自定义编辑区域，可以通过重写 previewController 的方式来做。
            configurable: PropTypes.bool,

            // 是否可以删除
            canDelete: PropTypes.bool,

            // hover 的时候时候显示添加组件的按钮
            canInsert: PropTypes.bool,

            // 组件是否可以编辑
            // 可以选中的组件一定是可以编辑的
            // 不可编辑的组件不可选中，只能展示。
            // 右下角的编辑区域由 configurable 单独控制
            editable: PropTypes.bool,

            // 选中时是否高亮
            highlightWhenSelect: PropTypes.bool,

            // 组件可以添加的最大次数
            limit: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

            // 组件达到最大添加次数后，鼠标移上去的提示
            limitMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

            // 是否可以添加组件的回调函数，返回一个 Promise
            shouldCreate: PropTypes.func,
        })
    ).isRequired,

    value: PropTypes.arrayOf(PropTypes.object),

    // Design 组件通用的全局设置
    settings: PropTypes.object,

    // settings 改变的回调函数
    onSettingsChange(props, propName, componentName) {
        if (props.settings && !isFunction(props[propName])) {
            throw new Error(
                `Invalid prop ${propName} supplied to ${componentName}, expects a function.`
            );
        }
    },

    // 默认选中的组件下标
    defaultSelectedIndex: PropTypes.number,

    // onChange(value: object)
    onChange: PropTypes.func.isRequired,

    // 用来渲染整个 Design 组件
    preview: PropTypes.func,

    // 预览部分底部的额外信息
    previewFooter: PropTypes.node,

    // 有未保存数据关闭窗口时需要用户确认
    // 离开时的确认文案新版本的浏览器是不能自定义的。
    // https://www.chromestatus.com/feature/5349061406228480
    confirmUnsavedLeave: PropTypes.bool,

    // 是否将未保存的数据暂存到 localStorage 中
    // 下次打开时如果有未保存的数据会提示从 localStorage 中恢复
    // 这个 props 不支持动态修改，只会在 mount 的时候检查一次状态
    cache: PropTypes.bool,

    // Design 实例的缓存 id，根据这个 id 识别缓存
    cacheId: PropTypes.string,

    // 恢复缓存时的提示文案
    cacheRestoreMessage: PropTypes.string,

    // 是否禁用编辑功能
    // 开启后，会忽略 components 里面的 editable 设置，全部不可编辑
    disabled: PropTypes.bool,

    // 滚动到顶部时的偏移量
    scrollTopOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

    // 滚动到左侧时的偏移量
    scrollLeftOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

    className: PropTypes.string,

    prefix: PropTypes.string,
};
