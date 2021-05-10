import { List, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TodoItem from '../TodoItem/TodoItem';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 100,
    padding: 20,
  },
}));

const noop = () => {};

const TodoList = (props) => {
  const classes = useStyles();

  const { todoList = [], handleRemoveItem = noop, handleCheckItem = noop } = props;

  return (
    <Paper className={classes.root}>
      <h2>Todo List</h2>
      {!todoList.length
        ? <Typography variant="h6">No Data to display</Typography>
        : (<List>
          {todoList.sort((a, b) => a.completed - b.completed).map((item) => (
            <div className="todo-item-box" key={item.id} data-id={item.id}>
              <TodoItem
                item={item}
                handleRemoveItem={handleRemoveItem}
                handleCheckItem={handleCheckItem}
              />
            </div>
          ))}
        </List>)
      }
    </Paper>
  );
};

export default TodoList;