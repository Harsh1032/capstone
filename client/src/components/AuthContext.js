import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (token && storedUser) {
      setUser(storedUser);
      setLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
