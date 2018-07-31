import Design from './Design';
import stripUUID from './stripUUID';
import { createGroup } from './utils/component-group';
import '../../css/design.pcss'
Design.stripUUID = stripUUID;
Design.group = createGroup;

export default Design;
