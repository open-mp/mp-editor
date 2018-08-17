import {isExpectedDesginType, serializeDesignType} from "./design-type";
import find from "lodash/find";
import defaultTo from "lodash/defaultTo";
import LazyMap from "./LazyMap";
import uuid from 'zent/lib/utils/uuid';
import pluginLoader from '../bundle/loader'
import assign from "lodash/assign";
import isEmpty from "lodash/isEmpty";

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
 * 从 startIndex 开始往前找到第一个可以选中的值
 * @param {array} value 当前的值
 * @param {array} components 当前可用的组件列表
 * @param {number} startIndex 开始搜索的下标
 */
export function findFirstEditableInstance(instanceList, startIndex) {
    const loop = i => {
        const instance = instanceList[i];
        let plugin = pluginLoader.getPluginByInstance(instance);
        if (plugin && defaultTo(plugin.editable, true)) {
            return instance;
        }
    };

    const total = instanceList.length;
    // 往前找
    for (let i = startIndex; i >= 0 && i < total; i--) {
        const instance = loop(i);
        if (instance) {
            return instance;
        }
    }

    // 往后找
    for (let i = startIndex + 1; i < total; i++) {
        const instance = loop(i);
        if (instance) {
            return instance;
        }
    }

    return null;
}

/**
 * 移动实例
 * 不是仅仅交换两个位置的节点，所有中间节点都需要移位
 * 需要考虑数组中间有不可拖拽节点的情况，这种情况下 fromIndex, toIndex 的值是不包括这些节点的
 * 例如 [1, 0, 0, 1, 0, 0, 1]: fromIndex = 0, toIndex = 1 表示移动第一个和第二个 1。
 * @param instanceList
 * @param fromIndex
 * @param toIndex
 */
export function moveInstance(instanceList, fromIndex, toIndex) {
    if (fromIndex === toIndex) {
        return;
    }
    const newInstanceList = [];
    let tmp;

    let passedFromIndex = false;
    let passedToIndex = false;

    if (fromIndex < toIndex) {// 从上拖到下面
        for (let i = 0, dragableIndex = -1; i < instanceList.length; i++) {
            let instance = instanceList[i];
            let plugin = pluginLoader.getPluginByInstance(instance);
            const dragable = plugin && defaultTo(plugin.dragable, true);
            if (dragable) {
                dragableIndex++;
            }

            /* Invariant: Each step copies one value, except one copies 2 and another doesn't copy */
            if (dragableIndex === fromIndex && !passedFromIndex) {
                tmp = instance;
                passedFromIndex = true;
            } else if (dragableIndex < toIndex && passedFromIndex) {
                newInstanceList[i - 1] = instance;
            } else if (dragableIndex === toIndex && !passedToIndex) {
                newInstanceList[i - 1] = instance;
                newInstanceList[i] = tmp;
                passedToIndex = true;
            } else {
                newInstanceList[i] = instance;
            }
        }
    } else { // 从下往上托
        let toInsetIndex;

        for (let i = 0, dragableIndex = -1; i < instanceList.length; i++) {
            let instance = instanceList[i];
            let plugin = pluginLoader.getPluginByInstance(instance);
            const dragable = plugin && defaultTo(plugin.dragable, true);
            if (dragable) {
                dragableIndex++;
            }

            /* Invariant: each step copies one value */
            if (dragableIndex === toIndex && !passedToIndex) {
                toInsetIndex = i;
                newInstanceList[i + 1] = instance;
                passedToIndex = true;
            } else if (dragableIndex < fromIndex && passedToIndex) {
                newInstanceList[i + 1] = instance;
            } else if (dragableIndex === fromIndex && !passedFromIndex) {
                newInstanceList[toInsetIndex] = instance;
                passedFromIndex = true;
            } else {
                newInstanceList[i] = instance;
            }
        }
    }
    return newInstanceList;
}

export async function validateInstance(instance) {
    let plugin = pluginLoader.getPluginByInstance(instance);
    let errors = await plugin.validate(instance);
    return errors;
}

// 验证所有组件，如果有错误选中并跳转到第一个有错误的组件。
// 如果没有错误，Promise resolve；如果有错误，Promise reject。
// reject 的是个数组，
// [
//   { '508516bf-d3e5-40a5-812e-834d3dee1d54': {} },
//   { 'c7c72599-2ac5-41bb-9ba0-45e8178ff5a6': { content: '请填写公告内容' } }
// ]
export async function validateInstanceList(instance) {
    const {value, components} = this.props;

    return new Promise((resolve, reject) =>
        Promise.all(
            value.map(v => {
                const id = this.getUUIDFromValue(v);
                const {type} = v;
                const comp = find(components, c => isExpectedDesginType(c, type));
                // 假如组件设置了 editable: false，不处罚校验
                if (!defaultTo(comp.editable, true)) {
                    return Promise.resolve({[id]: {}});
                }

                return this.validateComponentValue(v, v, {}).then(errors => {
                    return {[id]: errors};
                });
            })
        ).then(validationList => {
            const validations = assign({}, ...validationList);
            this.setState(
                {
                    showError: true,
                    validations,
                },
                () => {
                    // 跳转到第一个有错误的组件
                    const firstError = find(validationList, hasValidateError);

                    if (firstError) {
                        const id = Object.keys(firstError)[0];
                        this.scrollToPreviewItem(id);

                        // 选中第一个有错误的组件
                        this.setState({
                            selectedUUID: id,
                        });
                    }

                    this.adjustHeight();
                }
            );

            // 过滤所有错误信息，将数组合并为一个对象，key 是每个组件的 id
            const validationErrors = validationList.filter(hasValidateError);
            const hasError = !isEmpty(validationErrors);

            if (!hasError) {
                resolve();
            } else {
                reject(
                    validationErrors.reduce((err, v) => {
                        const key = Object.keys(v)[0];
                        if (key) {
                            err[key] = v[key];
                        }

                        return err;
                    }, {})
                );
            }
        })
    );
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
