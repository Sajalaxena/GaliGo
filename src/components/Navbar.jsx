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
            padding: '0.75rem 0',
            borderBottom: '1px solid var(--color-border)',
            backdropFilter: 'blur(12px)'
        }}>
            <div className="container flex-center" style={{ justifyContent: 'space-between' }}>
                {/* Logo */}
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                    <img src="/favicon.svg" alt="Valigo" style={{ width: '32px', height: '32px' }} />
                    <span><span style={{ color: 'var(--color-primary)' }}>Gali</span>Go</span>
                </Link>

                {/* Mobile Actions (Cart & Hamburger) */}
                <div className="flex-center hidden-desktop" style={{ gap: '1rem' }}>
                    <button onClick={() => setIsMenuOpen(true)} className="btn btn-ghost" style={{ padding: '0.5rem', color: 'var(--color-text-main)' }}>
                        <Menu size={24} />
                    </button>
                </div>

                {/* Desktop Actions */}
                <div className="flex-center hidden-mobile" style={{ gap: '1.5rem' }}>
                    <button onClick={toggleTheme} className="btn btn-ghost" style={{ padding: '0.5rem' }}>
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
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
                                    gap: '0.25rem',
                                    background: 'var(--color-surface)',
                                    zIndex: 10
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

            {/* Mobile Menu Drawer */}
            {isMenuOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <div
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                    <div className="glass-panel" style={{
                        position: 'relative',
                        width: '85%',
                        maxWidth: '320px',
                        height: '100dvh',
                        background: 'var(--color-surface)',
                        color: 'var(--color-text-main)',
                        borderLeft: '1px solid var(--color-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2rem',
                        gap: '2rem',
                        boxShadow: '-10px 0 30px rgba(0,0,0,0.2)'
                    }}>
                        <div className="flex-center" style={{ justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Menu</span>
                            <button onClick={() => setIsMenuOpen(false)} className="btn btn-ghost" style={{ padding: '0.5rem', color: 'var(--color-text-main)' }}>
                                <X size={28} />
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1, overflowY: 'auto' }}>
                            {/* Location in Menu */}
                            <button
                                className="btn btn-ghost"
                                style={{ padding: '1rem', justifyContent: 'flex-start', gap: '1rem', width: '100%', border: '1px solid var(--color-border)' }}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsLocationConfirmed(false);
                                }}
                            >
                                <MapPin size={20} color="var(--color-primary)" />
                                <span style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>{location}</span>
                            </button>

                            {/* Theme Toggle */}
                            <div className="flex-center" style={{ justifyContent: 'space-between', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                                <span style={{ fontWeight: '500' }}>Appearance</span>
                                <button onClick={toggleTheme} className="btn btn-ghost" style={{ padding: '0.5rem' }}>
                                    {isDarkMode ? <span className="flex-center" style={{ gap: '0.5rem' }}><Sun size={20} /> Light</span> : <span className="flex-center" style={{ gap: '0.5rem' }}><Moon size={20} /> Dark</span>}
                                </button>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {isAuthenticated ? (
                                    <>
                                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem', padding: '1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-sm)' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
                                                {user?.name?.charAt(0).toUpperCase()}
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontWeight: '600' }}>{user?.name}</span>
                                                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Logged In</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-ghost" style={{ justifyContent: 'flex-start', width: '100%', color: '#ef4444' }} onClick={() => { logout(); setIsMenuOpen(false); }}>
                                            <LogOut size={18} style={{ marginRight: '0.5rem' }} /> Logout
                                        </button>
                                    </>
                                ) : (
                                    <Link to="/login" className="btn btn-primary" onClick={() => setIsMenuOpen(false)} style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                                        Login / Signup
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
