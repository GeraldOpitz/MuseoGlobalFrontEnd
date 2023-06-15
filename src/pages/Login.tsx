import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  errorText: {
    color: theme.palette.error.main,
    marginBottom: theme.spacing(2),
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://museoglobalbackend.onrender.com/api/users/login', { username, password });
      const { token, isAdmin } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('isAdmin', isAdmin);
      navigate('/homepage');
    } catch (error) {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <div className={classes.form}>
          <Typography component="h2" variant="h5" align="center">
            Iniciar sesión
          </Typography>
          <form onSubmit={handleLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Nombre de usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  fullWidth
                  type="password"
                  label="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            {error && <Typography variant="body2" className={classes.errorText}>{error}</Typography>}
            <Button
              className={classes.submitButton}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Iniciar sesión
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
