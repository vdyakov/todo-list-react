import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = (props) => {
  const { title = 'Todo List' } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6">
          { title }
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;