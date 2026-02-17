import React from 'react';
import { Search } from 'lucide-react';
import { useLocation } from '../context/LocationContext';
import FloatingIcons from './FloatingIcons';

const Hero = ({ searchTerm, setSearchTerm }) => {
    const { location } = useLocation();

    return (
        <section style={{
            position: 'relative',
            padding: '8rem 0 4rem', // Increased top padding for navbar clearance
            textAlign: 'center',
            overflow: 'hidden',
            minHeight: '80vh', // Ensure it takes up good space
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {/* Animated Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(var(--hue-primary), 0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none',
                animation: 'pulse 10s infinite ease-in-out'
            }}></div>

            {/* Global Floating Icons */}
            <FloatingIcons opacity={0.2} />

            <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>

                {/* Logo Animation */}
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                    <img src="/favicon.svg" alt="GaliGo Logo" style={{ width: '60px', height: '60px', animation: 'float 3s ease-in-out infinite' }} />
                    <h1 style={{
                        fontSize: '3.5rem',
                        margin: 0,
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                    }}>
                        <span>Gali</span><span style={{ color: 'var(--color-text-main)', WebkitTextFillColor: 'var(--color-text-main)' }}>Go</span>
                    </h1>
                </div>

                <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1', fontSize: '2.5rem' }}>Discover the best of <br /><span style={{ color: 'var(--color-primary)' }}>{location ? location.split(',')[0] : 'Moradabad'}</span></h1>

                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Explore top-rated shops, trusted services, and hidden gems in your city.
                </p>

                {/* Search Bar (Commented Out) */}
                {/* 
                <div className="glass-panel" style={{
                    maxWidth: '700px',
                    margin: '0 auto 3rem',
                    padding: '10px',
                    borderRadius: 'var(--radius-pill)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <div className="flex-center" style={{ width: '40px', color: 'var(--color-text-muted)' }}>
                        <Search size={22} />
                    </div>
                    <input
                        type="text"
                        placeholder={`Search in ${location ? location.split(',')[0] : 'Moradabad'}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                        className="search-input"
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--color-text-main)',
                            fontSize: '1rem',
                            outline: 'none',
                            padding: '0.5rem',
                            minWidth: '0'
                        }}
                    />
                    <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', whiteSpace: 'nowrap' }}>
                        Search
                    </button>
                </div> 
                */}
            </div>
        </section>
    );
};

export default Hero;
