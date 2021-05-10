import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const CheckButton = ({ handleClick, checked = false }) => (
  <IconButton aria-label="check" onClick={handleClick}>
    { checked
      ? <CheckCircleIcon color="primary" fontSize="small" />
      : <RadioButtonUncheckedIcon  color="primary" fontSize="small" />
    }
  </IconButton>
);

export default CheckButton;
