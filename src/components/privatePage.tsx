import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const PrivatePage: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const isTryingToAccessAdmin = location.pathname === '/admin';

    if (!accessToken || (!isAdmin && isTryingToAccessAdmin)) {
      navigate('/');
    }
  }, [navigate, location]);

  return <>{children}</>;
};

export default PrivatePage;
