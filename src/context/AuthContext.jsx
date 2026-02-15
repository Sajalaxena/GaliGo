import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Simulate checking local storage

  useEffect(() => {
    // Check local storage for existing session
    const storedUser = localStorage.getItem('galigo_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (mobile) => {
    // In a real app, this would verify OTP with backend
    // Here we simulate a successful login
    // Check if user exists in "database" (local storage for mock)
    const storedUsers = JSON.parse(localStorage.getItem('galigo_users_db') || '{}');
    
    if (storedUsers[mobile]) {
        const userData = storedUsers[mobile];
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('galigo_user', JSON.stringify(userData));
        return { success: true, isNewUser: false };
    } else {
        return { success: true, isNewUser: true };
    }
  };

  const signup = (mobile, name) => {
      const newUser = { mobile, name };
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('galigo_user', JSON.stringify(newUser));

      // Save to "db"
      const storedUsers = JSON.parse(localStorage.getItem('galigo_users_db') || '{}');
      storedUsers[mobile] = newUser;
      localStorage.setItem('galigo_users_db', JSON.stringify(storedUsers));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('galigo_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
