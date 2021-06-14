import React from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteButton from '../buttons/DeleteButton';
import CheckButton from '../buttons/CheckButton';
import AlertDialog from '../AlertDialog/AlertDialog';

const TodoItem = ({
  item, handleRemoveItem, handleCheckItem
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleConfirmOpen = () => {
    setIsOpen(true);
  };

  const handleConfirmClose = () => {
    setIsOpen(false);
  };

  const handleConfirmSubmit = () => {
    handleRemoveItem(item.id);

    setIsOpen(false);
  };

  const handleCheck = () => {
    handleCheckItem(item.id);
  };

  return (
    <ListItem button data-id={item.id} disabled={item.completed}>
      <CheckButton handleClick={handleCheck} checked={item.completed} />
      <ListItemText primary={item.title} />
      <ListItemSecondaryAction>
        <DeleteButton handleClick={handleConfirmOpen} />
        <AlertDialog
          open={isOpen}
          title="Confirm dialog"
          description="Are you sure you want to remove this item?"
          handleClose={handleConfirmClose}
          handleSubmit={handleConfirmSubmit}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
