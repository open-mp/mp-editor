import Design from './Design';
import stripUUID from './stripUUID';
import { createGroup } from './utils/component-group';

Design.stripUUID = stripUUID;
Design.group = createGroup;

export default Design;
