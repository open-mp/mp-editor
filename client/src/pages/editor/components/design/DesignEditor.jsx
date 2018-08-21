import React, {PureComponent} from 'react';
import cx from 'classnames';
import defaultTo from 'lodash/defaultTo';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import get from 'lodash/get';
import find from 'lodash/find';
import * as InstanceUtils from './utils/instance';
import DesignPreviewItem from './preview/DesignPreviewItem';
import DesignPreviewController from './preview/DesignPreviewController';
import DesignEditorItem from './editor/DesignEditorItem';
import {DEFAULT_BACKGROUND, DND_PREVIEW_CONTROLLER} from './preview/constants';
import pluginLoader from './bundle/loader'

/**
 */
class DesignEditor extends PureComponent {
    // All props in this component are injected by Design
    static defaultProps = {
        background: '#f9f9f9',
        disabled: false
    };
    constructor() {
        super();
        this.previewItems = {}; // 记录预览组件实例 id -> instance
        this.editorItems = {}; // 记录编辑表单实例 id -> instance
        this.editors = {}; //  // 记录编辑表单实例 id -> editor
    }

    /**
     * 流程
     */
    render() {
        const {
            settings,
            selectedUUID,
            instanceList,
            validations,
            showError,
            design,
            disabled
        } = this.props;
       
        return (
            <DragDropContext onDragEnd={this.dispatchDragEnd}>
                <div
                    className="mp-design-preview"
                    style={{
                        backgroundColor: get(
                            settings,
                            'previewBackground',
                            DEFAULT_BACKGROUND
                        )
                    }}>
                    {disabled && <div className={`mp-design__disabled-mask`}/>}

                    <Droppable
                        droppableId={`mp-design-preview-list`}
                        type={DND_PREVIEW_CONTROLLER}
                        direction="vertical"
                    >
                        {(provided, snapshot) => {
                            let draggableIndex = 0;
                            return (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={cx(`mp-design__item-list`, `mp-design__item-list--full-height`)}
                                >
                                    {instanceList.map(instance => {
                                        const plugin = pluginLoader.getPluginByInstance(instance);
                                        // 实例id
                                        const id = InstanceUtils.getUUIDFromInstance(instance);
                                        // 是否被选中
                                        const selected = id === selectedUUID;
                                        // 是否可拖动
                                        const draggable = defaultTo(plugin.dragable, true);
                                        return (
                                            <DesignPreviewItem
                                                key={id}
                                                id={id}
                                                ref={this.savePreviewItem(id)}
                                            >
                                                <DesignPreviewController
                                                    instance={instance}
                                                    settings={settings}
                                                    design={design}
                                                    id={id}
                                                    index={draggable ? draggableIndex++ : -1}
                                                    allowHoverEffects={!snapshot.isDraggingOver}
                                                    draggable={draggable}
                                                    editable={defaultTo(plugin.editable, true)}
                                                    canDelete={defaultTo(plugin.canDelete, true)}
                                                    highlightWhenSelect={defaultTo(
                                                        plugin.highlightWhenSelect,
                                                        true
                                                    )}
                                                    isSelected={selected}
                                                    component={plugin.preview}
                                                />

                                                {selected && plugin.editable &&(
                                                    <DesignEditorItem
                                                        disabled={disabled}
                                                        ref={this.saveEditorItem(id)}
                                                    >
                                                        <plugin.editForm
                                                            ref={this.saveEditor(id)}
                                                            instance={instance}
                                                            settings={settings}
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
        let {selectedUUID} = this.props;
        let editor =  find(this.editors, (editor,id) => {
            return id == selectedUUID;
        });
        if (editor) {
            editor.onDragEnd(result)
        }
    };

    onPreviewDragEnd(result) {
        const { source, destination } = result;

        // dropped outside
        if (!destination) {
            return;
        }

        const { design } = this.props;
        design.moveInstance(source.index, destination.index);
    }

    savePreviewItem = id => instance => {
        if (!instance) {
            delete this.previewItems[id];
        } else {
            this.previewItems[id] = instance;
        }
    };

    saveEditorItem = id => instance => {
        if (!instance) {
            delete this.editorItems[id];
        } else {
            this.editorItems[id] = instance;
        }
    };

    saveEditor = id => editor => {
        if (!editor) {
            delete this.editors[id];
        } else {
            this.editors[id] = editor;
        }
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


export default DesignEditor;
