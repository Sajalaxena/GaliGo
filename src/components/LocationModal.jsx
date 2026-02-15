import React, { useState, useEffect } from 'react';
import { MapPin, X, Navigation } from 'lucide-react';
import { useLocation } from '../context/LocationContext';

const LocationModal = () => {
  const { location, updateLocation, isLocationConfirmed } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!isLocationConfirmed) {
      setIsOpen(true);
      setInputValue(location);
    }
  }, [isLocationConfirmed, location]);

  const handleConfirm = () => {
    updateLocation(inputValue);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="glass-panel w-full-mobile" style={{
        width: '100%',
        maxWidth: '500px',
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--color-surface)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h2>Select Location</h2>
          {isLocationConfirmed && (
            <button onClick={() => setIsOpen(false)} className="btn btn-ghost" style={{ padding: '0.5rem' }}>
              <X size={24} />
            </button>
          )}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div className="flex-center" style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1rem'
          }}>
            <MapPin size={20} color="var(--color-primary)" style={{ marginRight: '0.75rem' }} />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search city, e.g. Delhi, Mumbai..."
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--color-text-main)',
                fontSize: '1.1rem',
                flex: 1,
                outline: 'none'
              }}
              autoFocus
            />
          </div>

          <button
            className="btn btn-ghost"
            style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}
            onClick={() => {
              // Simulate GPS fetch (mock)
              setInputValue("New Delhi, India");
            }}
          >
            <Navigation size={18} />
            Detect Current Location
          </button>
        </div>

        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '1rem' }}
          onClick={handleConfirm}
        >
          Confirm Location
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
