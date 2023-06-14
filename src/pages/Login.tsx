import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/users/login', { username, password });
      const { token, isAdmin } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('isAdmin', isAdmin);
      navigate('/homepage');
    } catch (error) {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <TextField
          label="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <Button type="submit" variant="contained" color="primary">Iniciar sesión</Button>
      </form>
    </div>
  );
};

export default Login;
