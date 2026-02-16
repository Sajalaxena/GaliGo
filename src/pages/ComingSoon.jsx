import React from 'react';
import { Sparkles } from 'lucide-react';

const ComingSoon = () => {
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(circle at top right, #1a1a2e, #16213e, #0f3460)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            overflow: 'hidden'
        }}>
            {/* Background Effects */}
            <div className="blob" style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'rgba(233, 69, 96, 0.3)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                animation: 'float 10s infinite ease-in-out'
            }}></div>

            <div className="blob" style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'rgba(83, 52, 131, 0.3)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                animation: 'float 15s infinite ease-in-out reverse'
            }}></div>

            {/* Logo at the very top */}
            <div style={{
                position: 'absolute',
                top: '10%',
                zIndex: 20
            }}>
                <div style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    animation: 'pulse 3s infinite ease-in-out'
                }}>
                    <img
                        src="/favicon.svg"
                        alt="GaliGo Logo"
                        style={{
                            width: '60px',
                            height: '60px',
                            filter: 'drop-shadow(0 0 15px rgba(14, 165, 233, 0.6))'
                        }}
                    />
                    <span style={{ letterSpacing: '-2px' }}>
                        <span style={{ color: '#0EA5E9' }}>Gali</span><span style={{ color: 'white' }}>Go</span>
                    </span>
                </div>
            </div>

            <div style={{
                position: 'relative',
                zIndex: 10,
                textAlign: 'center',
                padding: '2rem',
                maxWidth: '800px',
                animation: 'fadeInUp 1s ease-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '10vh' // Push content down a bit
            }}>

                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2rem',
                    marginBottom: '2rem',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <Sparkles size={16} color="#e94560" />
                    <span style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Something Amazing Is Brewing</span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    fontWeight: '900',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(to right, #fff, #a5a5a5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    COMING SOON
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    maxWidth: '600px',
                    margin: '0 auto 3rem auto',
                    lineHeight: 1.6
                }}>
                    We are crafting an experience that will redefine how you discover local services. Get ready for <span style={{ color: '#0EA5E9', fontWeight: 'bold' }}>Gali</span><span style={{ color: 'white', fontWeight: 'bold' }}>Go</span>.
                </p>

            </div>

            <div style={{
                position: 'absolute',
                bottom: '2rem',
                color: 'rgba(255, 255, 255, 0.3)',
                fontSize: '0.9rem'
            }}>
                &copy; 2026 GaliGo Inc. All rights reserved.
            </div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
      `}</style>
        </div>
    );
};

export default ComingSoon;
