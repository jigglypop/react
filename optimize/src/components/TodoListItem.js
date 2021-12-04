import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
import { memo } from 'react';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? (
          <MdCheckBox onClick={() => onToggle(id)} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={() => onToggle(id)} />
        )}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline onClick={() => onRemove(id)} />
      </div>
    </div>
  );
};
export default memo(TodoListItem);
