/**
 * instance工具函数
 */

const UUID_KEY = '__zent-design-uuid__';

export function getUUIDFromInstance(instance) {
    return instance && instance[UUID_KEY];
}

export function setUUIDForInstance(instance, id) {
    if (instance) {
        instance[UUID_KEY] = id;
    }

    return instance;
}
