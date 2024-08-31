import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3000/auth/verify")
      .then(res => {
        if (res.data.status) {
          setIsAuthenticated(true);
        } else {
          navigate('/signin');
        }
      })
      .catch(() => {
        navigate('/signin');
      });
  }, [navigate]);

  return isAuthenticated ? children : null; // Render children if authenticated
};

export default ProtectedRoute;
