import Editor from './ImageAdEditor';
import Preview from './ImageAdPreview';
import './index.pcss'

export default {
  type: Editor.designType,
  editor: Editor,
  preview: Preview,
  // 是否可以拖拽
  dragable: false,


  // 是否可以编辑数据
  editable: true,
  // 鼠标在组件上时 是否展示快捷操作面板
  configurable: false,
  // 选中时是否高亮
  highlightWhenSelect: true
};
