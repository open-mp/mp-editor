import {isExpectedDesginType, serializeDesignType} from "./design-type";
import find from "lodash/find";
import defaultTo from "lodash/defaultTo";
import LazyMap from "./LazyMap";
import uuid from 'zent/lib/utils/uuid';

/**
 * instance工具函数
 */

const UUID_KEY = '__zent-design-uuid__';

export function getUUIDFromInstance(instance) {
    return instance && instance[UUID_KEY];
}

export function tagInstanceWithUUID(instance) {
    if (instance) {
        instance[UUID_KEY] = uuid();
    }

    return instance;
}

/**
 * 为实例加上uuid
 * @param instanceList
 */
export function tagInstanceListWithUUID(instanceList) {
    instanceList.forEach(v => {
        if (!v[UUID_KEY]) {
            v[UUID_KEY] = uuid();
        }
    });
}


/**
 * 从 startIndex 开始往前找到第一个可以选中的值
 * @param {array} value 当前的值
 * @param {array} components 当前可用的组件列表
 * @param {number} startIndex 开始搜索的下标
 */
export function findFirstEditableSibling(instanceList, pluginMap, nextIndex) {
    const loop = i => {
        const val = value[i];
        const type = val.type;
        const comp = find(components, c => isExpectedDesginType(c, type));
        if (comp && defaultTo(comp.editable, true)) {
            return val;
        }
    };

    const valueLength = value.length;
    // 往前找
    for (let i = startIndex; i >= 0 && i < valueLength; i--) {
        const val = loop(i);
        if (val) {
            return val;
        }
    }

    // 往后找
    for (let i = startIndex + 1; i < valueLength; i++) {
        const val = loop(i);
        if (val) {
            return val;
        }
    }

    return null;
}

/**
 * 根据当前的值生成一个组件使用计数
 * @param {Array} value Design 当前的值
 * @param {Array} components Design 支持的组件列表
 */
export function makeInstanceCountMapFromValue(value, components) {
    const instanceCountMap = new LazyMap(0);

    (value || []).forEach(val => {
        const comp = find(components, c => isExpectedDesginType(c, val.type));
        instanceCountMap.inc(serializeDesignType(comp.type));
    });

    return instanceCountMap;
}

export function getSafeSelectedValueIndex(index, value) {
    return Math.min(index, value.length - 1);
}

export function getBundleIdFromInstace(instance) {
    return instance.bundleId;
}
