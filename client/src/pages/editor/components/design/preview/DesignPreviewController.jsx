import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Pop} from 'zent';
import pick from 'lodash/pick';
import get from 'lodash/get';
import { Draggable } from 'react-beautiful-dnd';
import { DND_PREVIEW_CONTROLLER, DEFAULT_BACKGROUND } from './constants';
import { ADD_COMPONENT_OVERLAY_POSITION } from '../constants';

class DesignPreviewController extends PureComponent {

  static defaultProps = {
    prefix: 'mp',
  };

  render() {
    const {
      dragable,
      configurable,
      editable,
      canDelete,
      canInsert,
      highlightWhenSelect,
      isSelected,
      component: PreviewComponent,
      previewProps,
      settings,
      prefix,
      id,
      index,
      allowHoverEffects,
    } = this.props;
    const props = pick(this.props, [
      'value',
      'design',
      'settings',
    ]);
    const getClassName = highlight =>
      cx(`${prefix}-design-preview-controller`, {
        [`${prefix}-design-preview-controller--editable`]: editable,
        [`${prefix}-design-preview-controller--selected`]: isSelected,
        [`${prefix}-design-preview-controller--highlight`]: highlight,
        [`${prefix}-design-preview-controller--dragable`]: dragable,
      });

    const tree = dragable ? (
      <Draggable
        draggableId={id}
        type={DND_PREVIEW_CONTROLLER}
        isDragDisabled={!dragable}
        index={index}
      >
        {(provided, snapshot) => {
          // 拖拽的时候隐藏各种按钮，会很丑
          const showButtons =
            configurable && allowHoverEffects && !snapshot.isDragging;
          const cls = getClassName(allowHoverEffects && highlightWhenSelect);

          return (
            <div className={cls} onClick={this.onSelect}>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={{
                  ...provided.draggableProps.style,
                  backgroundColor: get(
                    settings,
                    'previewBackground',
                    DEFAULT_BACKGROUND
                  ),
                }}
                className={`${prefix}-design-preview-controller__drag-handle`}
              >
                <PreviewComponent
                  prefix={prefix}
                  {...previewProps}
                  {...props}
                />
              </div>
              {provided.placeholder}

              {showButtons &&
                canDelete && (
                  <DeleteButton prefix={prefix} onDelete={this.onDelete} />
                )}
            </div>
          );
        }}
      </Draggable>
    ) : (
      <div
        className={getClassName(highlightWhenSelect)}
        onClick={this.onSelect}
      >
        <div
          className={cx(
            `${prefix}-design-preview-controller__drag-handle`,
            `${prefix}-design-preview-controller__drag-handle--inactive`
          )}
        >
          <PreviewComponent prefix={prefix} {...previewProps} {...props} />
        </div>

        {configurable &&
          canDelete && (
            <DeleteButton prefix={prefix} onDelete={this.onDelete} />
          )}
      </div>
    );

    return tree;
  }

  onSelect = evt => {
    const { editable } = this.props;
    if (!editable) {
      return;
    }

    this.invokeCallback('onSelect', evt, false);
  };

  onDelete = () => {
    this.invokeCallback('onDelete', null, true);
  };

  invokeCallback(action, evt, stopPropagation, ...args) {
    if (stopPropagation && evt) {
      evt.stopPropagation();
    }

    const { value } = this.props;
    const cb = this.props[action];
    cb && cb(value, ...args);
  }
}

function DeleteButton({ prefix, onDelete }) {
  return (
    <Pop
      content="确定删除？"
      trigger="click"
      position="left-center"
      centerArrow
      onConfirm={onDelete}
      wrapperClassName={`${prefix}-design-preview-controller__action-btn-delete`}
    >
      <IconDelete prefix={prefix} onClick={stopEventPropagation} />
    </Pop>
  );
}

function AddButton({ prefix, onAdd, className }) {
  return (
    <div
      className={cx(
        `${prefix}-design-preview-controller__action-btn-add-container`,
        className
      )}
    >
      <a
        className={`${prefix}-design-preview-controller__action-btn-add`}
        onClick={onAdd}
      >
        <IconAdd prefix={prefix} />
      </a>
      <AddMarker prefix={prefix} />
    </div>
  );
}

function AddMarker({ prefix }) {
  return (
    <div className={`${prefix}-design-preview-controller__add-marker`}>
      <i
        className={cx(
          `${prefix}-design-preview-controller__add-marker-circle`,
          `${prefix}-design-preview-controller__add-marker-circle--left`
        )}
      />
      <div className={`${prefix}-design-preview-controller__add-marker-line`} />
      <i
        className={cx(
          `${prefix}-design-preview-controller__add-marker-circle`,
          `${prefix}-design-preview-controller__add-marker-circle--right`
        )}
      />
    </div>
  );
}

function IconAdd({ prefix }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg"
      className={`${prefix}-design-preview-controller__icon-add`}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="8.5" cy="8.5" r="8.5" />
        <path d="M8 8H5v1h3v3h1V9h3V8H9V5H8v3z" fill="#FFF" />
      </g>
    </svg>
  );
}

class IconDelete extends PureComponent {
  render() {
    const { prefix, onClick } = this.props;
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className={`${prefix}-design-preview-controller__icon-delete`}
        onClick={onClick}
      >
        <g fill="none" fillRule="evenodd">
          <circle cx="10" cy="10" r="10" />
          <path
            fill="#FFF"
            d="M13.75 7.188l-.937-.938L10 9.063 7.188 6.25l-.938.937L9.062 10 6.25 12.812l.937.938L10 10.938l2.812 2.812.938-.937L10.938 10"
          />
        </g>
      </svg>
    );
  }
}

function stopEventPropagation(evt) {
  evt && evt.stopPropagation();
}

export default DesignPreviewController;
