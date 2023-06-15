import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');

    navigate('/'); 
  };

  return (
    <button onClick={handleLogout}>Cerrar sesión</button>
  );
};

export default LogoutButton;
