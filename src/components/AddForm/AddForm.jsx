import { Button, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    marginBottom: 20,
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textField: {
    width: '80%',
  },
  button: {
    width: '15%',
  },
}));

const noop = () => {};

const AddForm = (props) => {
  const { addToDo = noop  } = props;

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const value = formData.get('add_input');

    addToDo(value);

    form.reset();

    return false;
  }

  return (
    <Paper className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField required name="add_input" className={classes.textField} label="What do you want to do?" defaultValue="" />
        <Button type="submit" variant="contained" className={classes.button} color="primary">Add</Button>
      </form>
    </Paper>
  );
};

export default AddForm;