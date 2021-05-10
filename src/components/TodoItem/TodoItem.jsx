import React from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteButton from '../buttons/DeleteButton';
import CheckButton from '../buttons/CheckButton';

const TodoItem = ({
  item, handleRemoveItem, handleCheckItem
}) => {
  const handleRemove = (e) => {
    const question = 'Are you sure you want to remove this item?';

    if (window.confirm(question)) {
      const { id } = e.currentTarget.closest('div.todo-item-box').dataset;
      handleRemoveItem(id);
    }
  };

  const handleCheck = (e) => {
    const { id } = e.currentTarget.closest('div.todo-item-box').dataset;
    handleCheckItem(id);
  };

  return (
    <ListItem button data-id={item.id} disabled={item.completed}>
      <CheckButton handleClick={handleCheck} checked={item.completed} />
      <ListItemText primary={item.title} />
      <ListItemSecondaryAction>
        <DeleteButton handleClick={handleRemove} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
