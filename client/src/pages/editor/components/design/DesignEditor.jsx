import React, {PureComponent} from 'react';
import cx from 'classnames';
import find from 'lodash/find';
import defaultTo from 'lodash/defaultTo';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import get from 'lodash/get';

import DesignPreviewItem from './preview/DesignPreviewItem';
import DesignPreviewController from './preview/DesignPreviewController';
import DesignEditorItem from './editor/DesignEditorItem';
import {isExpectedDesginType} from './utils/design-type';
import {DEFAULT_BACKGROUND, DND_PREVIEW_CONTROLLER} from './preview/constants';

const prefix = 'mp';

/**
 * DesignPreview 和 config 组件是相互关联的
 *
 * 这个组件里的一些 props 是需要 config 组件提供的
 *
 * 负责实例的预览、编辑
 */
class DesignEditor extends PureComponent {
    // All props in this component are injected by Design
    static defaultProps = {
        background: '#f9f9f9',
        disabled: false
    };

    previewItems = {}; // 记录预览组件实例 id -> instance
    editorItems = {}; // 记录编辑表单实例 id -> instance

    /**
     * 流程
     */
    render() {
        const {
            components,
            value,
            validations,
            showError,
            settings,
            onSettingsChange,
            onComponentValueChange,
            design,
            selectedUUID,
            getUUIDFromValue,
            onSelect,
            onDelete,
            className,
            disabled
        } = this.props;
        const cls = cx(`${prefix}-design-preview`, className);

        return (
            <DragDropContext onDragEnd={this.dispatchDragEnd}>
                <div
                    className={cls}
                    style={{
                        backgroundColor: get(
                            settings,
                            'previewBackground',
                            DEFAULT_BACKGROUND
                        )
                    }}>
                    {disabled && <div className={`${prefix}-design__disabled-mask`}/>}

                    <Droppable
                        droppableId={`${prefix}-design-preview-list`}
                        type={DND_PREVIEW_CONTROLLER}
                        direction="vertical"
                    >
                        {(provided, snapshot) => {
                            let draggableIndex = 0;
                            return (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={cx(`${prefix}-design__item-list`, `${prefix}-design__item-list--full-height`)}
                                >
                                    {value.map(v => {
                                        const valueType = v.type;
                                        const comp = find(components, c =>
                                            isExpectedDesginType(c, valueType)
                                        );
                                        // 实例id
                                        const id = getUUIDFromValue(v);
                                        // 是否被选中
                                        const selected = id === selectedUUID;
                                        // 是否可拖动
                                        const draggable = defaultTo(comp.dragable, true);

                                        return (
                                            <DesignPreviewItem
                                                key={id}
                                                id={id}
                                                ref={this.savePreviewItem(id)}
                                            >
                                                <DesignPreviewController
                                                    value={v}
                                                    settings={settings}
                                                    design={design}
                                                    id={id}
                                                    index={draggable ? draggableIndex++ : -1}
                                                    allowHoverEffects={!snapshot.isDraggingOver}
                                                    dragable={draggable}
                                                    editable={defaultTo(comp.editable, true)}
                                                    configurable={defaultTo(comp.configurable, true)}
                                                    canDelete={defaultTo(comp.canDelete, true)}
                                                    highlightWhenSelect={defaultTo(
                                                        comp.highlightWhenSelect,
                                                        true
                                                    )}
                                                    isSelected={selected}
                                                    onSelect={onSelect}
                                                    onDelete={onDelete}
                                                    component={comp.preview}
                                                />

                                                {selected && (
                                                    <DesignEditorItem
                                                        disabled={disabled}
                                                        ref={this.saveEditorItem(id)}
                                                    >
                                                        <comp.editor
                                                            value={v}
                                                            onChange={onComponentValueChange(v)}
                                                            settings={settings}
                                                            onSettingsChange={onSettingsChange}
                                                            design={design}
                                                            validation={validations[id] || {}}
                                                            showError={showError}
                                                        />
                                                    </DesignEditorItem>
                                                )}
                                            </DesignPreviewItem>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            );
                        }}
                    </Droppable>


                </div>
            </DragDropContext>
        );
    }

    dispatchDragEnd = result => {
        const { type } = result;
        if (type === DND_PREVIEW_CONTROLLER) {
            this.onPreviewDragEnd(result);
            return;
        }
    };

    onPreviewDragEnd(result) {
        const { source, destination } = result;

        // dropped outside
        if (!destination) {
            return;
        }

        const { onMove } = this.props;
        onMove(source.index, destination.index);
    }

    savePreviewItem = id => instance => {
        saveRef(this.previewItems, id, instance);
    };

    saveEditorItem = id => instance => {
        saveRef(this.editorItems, id, instance);
    };

    scrollToItem = (id, offsets) => {
        const item = this.previewItems[id];

        if (!item) {
            return;
        }

        item.scrollTop(offsets);
    };

    getEditorBoundingBox(id) {
        const item = this.editorItems[id];

        if (!item) {
            return;
        }

        return item.getBoundingBox();
    }
}

function saveRef(map, id, instance) {
    if (!instance) {
        delete map[id];
    } else {
        map[id] = instance;
    }
}

export default DesignEditor;
