import React, { PureComponent } from 'react';
import cx from 'classnames';
import find from 'lodash/find';
import some from 'lodash/some';
import defaultTo from 'lodash/defaultTo';
import isFunction from 'lodash/isFunction';
import get from 'lodash/get';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import DesignPreviewItem from './DesignPreviewItem';
import DesignPreviewController from './DesignPreviewController';
import DesignEditorItem from '../editor/DesignEditorItem';
import { isExpectedDesginType } from '../utils/design-type';
import { DND_PREVIEW_CONTROLLER, DEFAULT_BACKGROUND } from './constants';

const prefix = 'mp';
/**
 * DesignPreview 和 config 组件是相互关联的
 *
 * 这个组件里的一些 props 是需要 config 组件提供的
 */
class DesignPreview extends PureComponent {
  // All props in this component are injected by Design
  static defaultProps = {
    background: '#f9f9f9',
    disabled: false,
    appendableComponents: [],
  };

  previewItems = {};
  editorItems = {};
  editors = {};

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
      onEdit,
      onAdd,
      onMove,
      className,
      disabled,
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
            ),
          }}
        >
          {disabled && <div className={`${prefix}-design__disabled-mask`} />}

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
                  className={cx(`${prefix}-design__item-list`,`${prefix}-design__item-list--full-height`)}
                >
                  {value.map(v => {
                    const valueType = v.type;
                    const comp = find(components, c =>
                      isExpectedDesginType(c, valueType)
                    );
                    const PreviewItem = comp.previewItem || DesignPreviewItem;
                    const EditorItem = comp.editorItem || DesignEditorItem;
                    const id = getUUIDFromValue(v);
                    const selected = id === selectedUUID;
                    const PreviewController =
                      comp.previewController || DesignPreviewController;
                    const draggable = defaultTo(comp.dragable, true);

                    return (
                      <PreviewItem
                        key={id}
                        id={id}
                        ref={this.savePreviewItem(id)}
                      >
                        <PreviewController
                          prefix={prefix}
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
                          canInsert={defaultTo(comp.canInsert, true)}
                          highlightWhenSelect={defaultTo(
                            comp.highlightWhenSelect,
                            true
                          )}
                          isSelected={selected}
                          onSelect={onSelect}
                          onDelete={onDelete}
                          onEdit={onEdit}
                          onAdd={onAdd}
                          onMove={onMove}
                          component={comp.preview}
                          previewProps={getAdditionalProps(
                            comp.previewProps,
                            v
                          )}
                        />

                        {selected && (
                            <EditorItem
                              prefix={prefix}
                              disabled={disabled}
                              ref={this.saveEditorItem(id)}
                            >
                              <comp.editor
                                {...getAdditionalProps(comp.editorProps, v)}
                                ref={this.saveEditor(id)}
                                value={v}
                                onChange={onComponentValueChange(v)}
                                settings={settings}
                                onSettingsChange={onSettingsChange}
                                design={design}
                                validation={validations[id] || {}}
                                showError={showError}
                              />
                            </EditorItem>
                          )}
                      </PreviewItem>
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

    // Let editors handle their dnd actions
    some(this.editors, editor => {
      if (
        isFunction(editor.shouldHandleDragEnd) &&
        editor.shouldHandleDragEnd(type)
      ) {
        isFunction(editor.onDragEnd) && editor.onDragEnd(result);
        return true;
      }

      return false;
    });
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

  saveEditor = id => instance => {
    saveRef(this.editors, id, instance);
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

function getAdditionalProps(propsOrFn, value) {
  const props = isFunction(propsOrFn) ? propsOrFn(value) : propsOrFn;

  return props || {};
}

function saveRef(map, id, instance) {
  if (!instance) {
    delete map[id];
  } else {
    map[id] = instance;
  }
}

export default DesignPreview;
