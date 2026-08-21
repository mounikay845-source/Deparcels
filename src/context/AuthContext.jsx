import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Clear legacy/cached session so opening site link always displays Login page first
    localStorage.removeItem('isLoggedIn');
  }, []);

  const [user, setUser] = useState({
    name: 'Srinu',
    email: 'sreenugorkal19@gmail.com',
    phone: '+91 9876543210'
  });

  const login = (userInfo) => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    if (userInfo) {
      setUser((prev) => ({
        ...prev,
        ...userInfo,
        name: userInfo.name || userInfo.email?.split('@')[0] || prev.name
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
