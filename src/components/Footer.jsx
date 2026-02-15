import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--color-surface)', 
      borderTop: '1px solid var(--color-border)',
      padding: '4rem 0 2rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
              <img src="/favicon.svg" alt="Galigo" style={{ width: '32px', height: '32px' }} />
              <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>Galigo</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Discover the best services, shops, and experiences in your city. From food to fashion, we've got you covered.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
              <li>About Us</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div>
             <h4 style={{ marginBottom: '1rem' }}>Social</h4>
             <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem' }}>
               <div className="btn btn-ghost" style={{ padding: '0.5rem', borderRadius: '50%' }}><Instagram size={20} /></div>
               <div className="btn btn-ghost" style={{ padding: '0.5rem', borderRadius: '50%' }}><Twitter size={20} /></div>
               <div className="btn btn-ghost" style={{ padding: '0.5rem', borderRadius: '50%' }}><Facebook size={20} /></div>
               <div className="btn btn-ghost" style={{ padding: '0.5rem', borderRadius: '50%' }}><Linkedin size={20} /></div>
             </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid var(--color-border)', 
          paddingTop: '2rem', 
          textAlign: 'center', 
          color: 'var(--color-text-muted)',
          fontSize: '0.9rem'
        }}>
          &copy; {new Date().getFullYear()} Galigo Technologies Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
