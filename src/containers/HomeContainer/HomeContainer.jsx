import React, { useEffect, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navigation from '../../components/Navigation/Navigation';
import AddForm from '../../components/AddForm/AddForm';
import TodoList from '../../components/TodoList/TodoList';
import { generateId } from '../../helpers/index';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const generateRow = (title) => ({
  id: generateId(),
  title: title,
  completed: false,
});

export default function HomeContainer() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response) => response.json())
      .then((json) => setRows(json));
  }, [])

  const addToDo = (value) => {
    if (value) {
      setRows([...rows, generateRow(value)]);
    }
  };

  const handleRemoveItem = (value) => {
    if (value) {
      setRows(rows.filter((item) => String(item.id) !== String(value)));
    }
  };

  const handleCheckItem = (value) => {
    if (value) {
      setRows(rows.map((item) => {
        if (String(item.id) === String(value)) {
          item.completed = true;
        }

        return item;
      }));
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation title="Todo List React" />
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <AddForm addToDo={addToDo} />
          <TodoList todoList={rows} handleRemoveItem={handleRemoveItem} handleCheckItem={handleCheckItem} />
        </Container>
      </main>
    </div>
  );
}
