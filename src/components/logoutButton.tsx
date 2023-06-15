import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2),
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
}));

const LogoutButton: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('isAdmin', 'false');

    navigate('/');
  };

  return (
    <Button className={classes.button} onClick={handleLogout}>
      Cerrar sesión
    </Button>
  );
};

export default LogoutButton;
