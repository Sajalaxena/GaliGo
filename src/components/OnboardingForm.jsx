import React, { useState } from 'react';
import { Send } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

const OnboardingForm = () => {
    const [formData, setFormData] = useState({
        shopName: '',
        ownerName: '',
        mobile: '',
        category: 'Grocery'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.ownerName}! We have received your request for ${formData.shopName}. Our team will contact you shortly at ${formData.mobile}.`);
    };

    return (
        <section className="container section" id="join" style={{ position: 'relative' }}>
            <FloatingIcons opacity={0.08} />

            <div className="glass-panel" style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '3rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Partner with GaliGo</h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>Ready to grow your business? Fill out the form below to get started.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                    <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Shop Name</label>
                            <input
                                type="text"
                                name="shopName"
                                value={formData.shopName}
                                onChange={handleChange}
                                placeholder="e.g. Gupta General Store"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg)',
                                    color: 'var(--color-text-main)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Owner Name</label>
                            <input
                                type="text"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                placeholder="Your full name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg)',
                                    color: 'var(--color-text-main)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg)',
                                    color: 'var(--color-text-main)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Shop Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg)',
                                    color: 'var(--color-text-main)',
                                    outline: 'none'
                                }}
                            >
                                <option>Grocery & Daily Needs</option>
                                <option>Pharmacy & Medicine</option>
                                <option>Restaurant & Food</option>
                                <option>Electronics & Repair</option>
                                <option>Fashion & Boutique</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', justifySelf: 'start' }}>
                        Submit Request <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default OnboardingForm;
