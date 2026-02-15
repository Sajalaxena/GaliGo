import React, { createContext, useContext, useState, useEffect } from 'react';

const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState('Moradabad, Uttar Pradesh');
  const [isLocationConfirmed, setIsLocationConfirmed] = useState(false);

  // In a real app, we might check localStorage here
  useEffect(() => {
    const savedLocation = localStorage.getItem('galigo_location');
    if (savedLocation) {
      setLocation(savedLocation);
      setIsLocationConfirmed(true);
    }
  }, []);

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
    setIsLocationConfirmed(true);
    localStorage.setItem('galigo_location', newLocation);
  };

  return (
    <LocationContext.Provider value={{ location, updateLocation, isLocationConfirmed }}>
      {children}
    </LocationContext.Provider>
  );
};
