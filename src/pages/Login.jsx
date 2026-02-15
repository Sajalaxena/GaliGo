import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Phone, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';

const Login = () => {
  const [step, setStep] = useState('mobile'); // mobile, otp, name
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    if (mobile.length < 10) {
      setError('Please enter a valid mobile number');
      return;
    }
    setError('');
    setStep('otp');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp !== '1234') {
      setError('Invalid OTP. Please enter 1234');
      return;
    }
    
    setError('');
    // Check if user exists
    const result = login(mobile);
    if (result.isNewUser) {
        setStep('name');
    } else {
        navigate(from, { replace: true });
    }
  };

  const handleNameSubmit = (e) => {
      e.preventDefault();
      if (name.trim().length === 0) {
          setError('Please enter your name');
          return;
      }
      signup(mobile, name);
      navigate(from, { replace: true });
  };

  return (
    <div className="container section flex-center" style={{ minHeight: '80vh' }}>
      <div className="glass-panel" style={{ 
        width: '100%', 
        maxWidth: '400px', 
        padding: '2.5rem', 
        borderRadius: 'var(--radius-lg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract Background Decoration */}
        <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(var(--hue-primary), 0.2) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            pointerEvents: 'none'
        }}></div>

        <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>
            {step === 'mobile' ? 'Welcome' : step === 'otp' ? 'Verify OTP' : 'Profile'}
        </h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            {step === 'mobile' ? 'Enter your mobile number to continue' : 
             step === 'otp' ? `Sent to +91 ${mobile}` : 
             'Complete your profile'}
        </p>

        {step === 'mobile' && (
            <form onSubmit={handleMobileSubmit}>
                <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                    <Phone size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                    <input 
                        type="tel" 
                        placeholder="Mobile Number" 
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        style={{ 
                            width: '100%', 
                            padding: '1rem 1rem 1rem 3rem', 
                            borderRadius: 'var(--radius-md)', 
                            border: '1px solid var(--color-border)', 
                            background: 'rgba(255,255,255,0.05)', 
                            color: 'var(--color-text-main)', 
                            outline: 'none',
                            fontSize: '1.1rem'
                        }} 
                        autoFocus
                    />
                </div>
                {error && <p style={{ color: '#ff4444', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                    Continue <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
            </form>
        )}

        {step === 'otp' && (
            <form onSubmit={handleOtpSubmit}>
                <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                    <Lock size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                    <input 
                        type="text" 
                        placeholder="Enter OTP (1234)" 
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        style={{ 
                            width: '100%', 
                            padding: '1rem 1rem 1rem 3rem', 
                            borderRadius: 'var(--radius-md)', 
                            border: '1px solid var(--color-border)', 
                            background: 'rgba(255,255,255,0.05)', 
                            color: 'var(--color-text-main)', 
                            outline: 'none',
                            fontSize: '1.1rem',
                            letterSpacing: '0.2rem'
                        }} 
                        autoFocus
                    />
                </div>
                {error && <p style={{ color: '#ff4444', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    Verify <CheckCircle size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                     <button type="button" className="btn" style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '0.9rem', cursor: 'pointer' }} onClick={() => setStep('mobile')}>
                        Change Number
                     </button>
                </div>
            </form>
        )}

        {step === 'name' && (
             <form onSubmit={handleNameSubmit}>
                <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                    <User size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ 
                            width: '100%', 
                            padding: '1rem 1rem 1rem 3rem', 
                            borderRadius: 'var(--radius-md)', 
                            border: '1px solid var(--color-border)', 
                            background: 'rgba(255,255,255,0.05)', 
                            color: 'var(--color-text-main)', 
                            outline: 'none',
                            fontSize: '1.1rem'
                        }} 
                        autoFocus
                    />
                </div>
                 {error && <p style={{ color: '#ff4444', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                    Complete Sign Up <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
            </form>
        )}

      </div>
    </div>
  );
};

export default Login;
