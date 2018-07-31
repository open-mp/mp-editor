import Editor from './RichtextEditor';
import Preview from './RichtextPreview';
import './index.pcss'

export default {
  type: Editor.designType,
  editor: Editor,
  preview: Preview,
  limit: 1
};
