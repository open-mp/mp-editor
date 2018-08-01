import Editor from './ConfigEditor';
import Preview from './ConfigPreview';
import './index.pcss'
export default {
  type: Editor.designType,
  editor: Editor,
  preview: Preview,
  // 是否可以拖拽
  dragable: false,

  // 是否出现在底部的添加组件区域
  appendable: false,

  // 是否可以编辑数据
  editable: true,
  // 鼠标在组件上时 是否展示快捷操作面板
  configurable: true,
  // 选中时是否高亮
  highlightWhenSelect: false
};
