import React, { useState } from 'react';
import { Send, Store, User, Phone, Tag, CheckCircle2 } from 'lucide-react';
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

    const InputWrapper = ({ children, label, icon: Icon }) => (
        <div style={{ position: 'relative' }}>
            <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                fontSize: '0.9rem',
                color: 'var(--color-text-main)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <Icon size={16} color="var(--color-primary)" /> {label}
            </label>
            {children}
        </div>
    );

    return (
        <section className="container section" id="join" style={{ position: 'relative', marginTop: '4rem', paddingBottom: '6rem' }}>
            <FloatingIcons opacity={0.1} />

            <div style={{
                display: 'grid',
                gap: '4rem',
                gridTemplateColumns: 'minmax(0, 1fr)', // Default single column
                maxWidth: '1000px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>

                {/* Header & Benefits Section */}
                <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: 'var(--radius-pill)',
                        background: 'var(--color-primary-glow)',
                        color: 'var(--color-primary)',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem',
                        border: '1px solid var(--color-primary)'
                    }}>
                        Limited Time Offer: Join for Free!
                    </div>
                    <h2 className="animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Join as a Seller
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Expand your business reach with GaliGo. Simple, transparent, and effective.
                    </p>
                </div>

                {/* Form & Info Layout */}
                <div className="onboarding-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '2rem',
                    alignItems: 'start'
                }}>

                    {/* Left Side: Why Join? (Visible on desktop/tablet) */}
                    <div className="hidden-mobile" style={{
                        background: 'linear-gradient(135deg, var(--color-surface-glass), rgba(var(--hue-primary), 0.1))',
                        backdropFilter: 'blur(20px)',
                        padding: '2rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        height: '100%'
                    }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Why GaliGo?</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { title: 'Instant Visibility', desc: 'Get seen by thousands of local customers instantly.' },
                                { title: 'Zero Commission on Delivery', desc: 'Keep 100% of your delivery earnings.' },
                                { title: 'Easy Management', desc: 'Manage orders and inventory from a simple dashboard.' },
                                { title: 'Local Support', desc: 'Real support from real people in Moradabad.' }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                                    <CheckCircle2 color="var(--color-rating)" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="glass-panel" style={{
                        padding: '3rem',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        border: '1px solid var(--color-primary-glow)',
                        background: 'linear-gradient(to bottom, var(--color-surface), var(--color-surface-glass))'
                    }}>
                        <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Partner with GaliGo</h3>

                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                            <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <InputWrapper label="Shop Name" icon={Store}>
                                    <input
                                        type="text"
                                        name="shopName"
                                        value={formData.shopName}
                                        onChange={handleChange}
                                        placeholder="e.g. Gupta General Store"
                                        required
                                        className="form-input"
                                    />
                                </InputWrapper>
                                <InputWrapper label="Owner Name" icon={User}>
                                    <input
                                        type="text"
                                        name="ownerName"
                                        value={formData.ownerName}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                        className="form-input"
                                    />
                                </InputWrapper>
                            </div>

                            <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <InputWrapper label="Mobile Number" icon={Phone}>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        required
                                        className="form-input"
                                    />
                                </InputWrapper>
                                <InputWrapper label="Shop Category" icon={Tag}>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option>Grocery & Daily Needs</option>
                                        <option>Pharmacy & Medicine</option>
                                        <option>Restaurant & Food</option>
                                        <option>Electronics & Repair</option>
                                        <option>Fashion & Boutique</option>
                                        <option>Other</option>
                                    </select>
                                </InputWrapper>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{
                                marginTop: '1rem',
                                width: '100%',
                                justifyContent: 'center',
                                padding: '1rem',
                                fontSize: '1.1rem'
                            }}>
                                Submit Request <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Mobile-only benefits summary */}
                <div className="hidden-desktop" style={{ textAlign: 'center', marginTop: '-2rem' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        Join 500+ shops in Moradabad growing with GaliGo.
                    </p>
                </div>

                <style>{`
                    .form-input {
                        width: 100%;
                        padding: 1rem;
                        border-radius: var(--radius-sm);
                        border: 1px solid var(--color-border);
                        background: var(--color-bg);
                        color: var(--color-text-main);
                        outline: none;
                        transition: all 0.3s ease;
                        font-size: 1rem;
                    }
                    .form-input:focus {
                        border-color: var(--color-primary);
                        box-shadow: 0 0 0 3px var(--color-primary-glow);
                    }
                    @media (max-width: 768px) {
                        .onboarding-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default OnboardingForm;
