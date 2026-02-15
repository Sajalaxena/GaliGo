import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShoppingBag, Menu, X, Sun, Moon, LogOut } from 'lucide-react';
import { useLocation } from '../context/LocationContext';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { location, setIsLocationConfirmed } = useLocation();
  const { cartCount, setIsCartOpen } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="glass-panel" style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      padding: '1rem 0',
      borderBottom: '1px solid var(--color-border)',
      backdropFilter: 'blur(12px)'
    }}>
      <div className="container flex-center" style={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/favicon.svg" alt="Valigo" style={{ width: '32px', height: '32px' }} />
          <span><span style={{ color: 'var(--color-primary)' }}>Gali</span>Go</span>
        </Link>
        
        {/* Actions */}
        <div className="flex-center" style={{ gap: '1.5rem' }}>
          {/* Location Selector (Mock) */}
          <div 
            className="flex-center" 
            style={{ gap: '0.5rem', color: 'var(--color-text-muted)', cursor: 'pointer', maxWidth: '200px' }}
            onClick={() => setIsLocationConfirmed(false)}
          >
            <MapPin size={18} color="var(--color-primary)" />
            <span style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{location}</span>
          </div>

          <button onClick={toggleTheme} className="btn btn-ghost" style={{ padding: '0.5rem' }}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Cart Icon */}
          <div 
            className="flex-center" 
            style={{ position: 'relative', cursor: 'pointer' }}
            onClick={() => setIsCartOpen(true)}
          >
             <ShoppingBag size={22} color="var(--color-text-main)" />
             {cartCount > 0 && (
               <div style={{ 
                 position: 'absolute', 
                 top: '-5px', 
                 right: '-5px', 
                 background: 'var(--color-primary)', 
                 color: 'white', 
                 fontSize: '0.7rem', 
                 width: '16px', 
                 height: '16px', 
                 borderRadius: '50%', 
                 display: 'flex', 
                 justifyContent: 'center', 
                 alignItems: 'center' 
               }}>{cartCount}</div>
             )}
          </div>
          
          {isAuthenticated ? (
            <div style={{ position: 'relative' }}>
                <button 
                    className="btn btn-ghost flex-center" 
                    style={{ gap: '0.5rem', padding: '0.5rem 1rem' }}
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    onBlur={() => setTimeout(() => setShowProfileMenu(false), 200)}
                >
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{user?.name?.split(' ')[0]}</span>
                </button>
                
                {showProfileMenu && (
                    <div className="glass-panel" style={{ 
                        position: 'absolute', 
                        top: '100%', 
                        right: 0, 
                        marginTop: '0.5rem', 
                        padding: '0.5rem', 
                        borderRadius: 'var(--radius-md)', 
                        minWidth: '150px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <button className="btn btn-ghost" style={{ justifyContent: 'flex-start', fontSize: '0.9rem', width: '100%' }} onClick={logout}>
                            <LogOut size={16} style={{ marginRight: '0.5rem' }} /> Logout
                        </button>
                    </div>
                )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">Login</Link>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
