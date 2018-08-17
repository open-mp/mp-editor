import React, {PureComponent} from 'react';
import cx from 'classnames';
import {Pop} from 'zent';
import pick from 'lodash/pick';
import get from 'lodash/get';
import {Draggable} from 'react-beautiful-dnd';
import {DND_PREVIEW_CONTROLLER, DEFAULT_BACKGROUND} from './constants';

const prefix = 'mp';

class DesignPreviewController extends PureComponent {

    static defaultProps = {
    };

    render() {
        const {
            draggable,
            editable,
            canDelete,
            highlightWhenSelect,
            isSelected,
            component: PreviewComponent,
            settings,
            id,
            index,
            allowHoverEffects,
        } = this.props;
        const props = pick(this.props, [
            'instance',
            'design',
            'settings',
        ]);
        const getClassName = highlight =>
            cx(`mp-design-preview-controller`, {
                [`mp-design-preview-controller--editable`]: editable,
                [`mp-design-preview-controller--selected`]: isSelected,
                [`mp-design-preview-controller--highlight`]: highlight,
                [`mp-design-preview-controller--dragable`]: draggable,
            });

        const tree = draggable ? (
            <Draggable
                draggableId={id}
                type={DND_PREVIEW_CONTROLLER}
                isDragDisabled={!draggable}
                index={index}
            >
                {(provided, snapshot) => {
                    // 拖拽的时候隐藏各种按钮，会很丑
                    const showDeleteButtons =
                        canDelete && allowHoverEffects && !snapshot.isDragging;
                    const cls = getClassName(allowHoverEffects && highlightWhenSelect); // 拖动的时候不展示快捷操作按钮

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
                                className={`mp-design-preview-controller__drag-handle`}
                            >
                                <PreviewComponent
                                    {...props}
                                />
                            </div>
                            {provided.placeholder}

                            { showDeleteButtons && (
                                <DeleteButton onDelete={this.onDelete}/>
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
                        `mp-design-preview-controller__drag-handle`,
                        `mp-design-preview-controller__drag-handle--inactive`
                    )}
                >
                    <PreviewComponent {...props} />
                </div>

                {canDelete && (
                    <DeleteButton onDelete={this.onDelete}/>
                )}
            </div>
        );

        return tree;
    }

    onSelect = evt => {
        const {editable, design, instance} = this.props;
        if (!editable) {
            return;
        }
        design.selectInstance(instance);
    };

    onDelete = () => {
        this.invokeCallback('onDelete', null, true);
    };

    invokeCallback(action, evt, stopPropagation, ...args) {
        if (stopPropagation && evt) {
            evt.stopPropagation();
        }

        const {value} = this.props;
        const cb = this.props[action];
        cb && cb(value, ...args);
    }
}

function DeleteButton({onDelete}) {
    return (
        <Pop
            content="确定删除？"
            trigger="click"
            position="left-center"
            centerArrow
            onConfirm={onDelete}
            wrapperClassName={`mp-design-preview-controller__action-btn-delete`}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className={`mp-design-preview-controller__icon-delete`}
                onClick={(evt)=>{ evt && evt.stopPropagation();}}
            >
                <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10"/>
                    <path
                        fill="#FFF"
                        d="M13.75 7.188l-.937-.938L10 9.063 7.188 6.25l-.938.937L9.062 10 6.25 12.812l.937.938L10 10.938l2.812 2.812.938-.937L10.938 10"
                    />
                </g>
            </svg>
        </Pop>
    );
}

export default DesignPreviewController;
