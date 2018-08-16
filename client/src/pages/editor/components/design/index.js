import "regenerator-runtime/runtime"
import Design from './Design';
import stripUUID from './stripUUID';
import './index.pcss'
import pluginLoader from '../bundle/loader'

Design.stripUUID = stripUUID;
// 初始化插件加载器
pluginLoader.init();
export default Design;

