import React from 'react';
import { Check, X } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

const SellerRateCard = () => {
    return (
        <section className="container section" id="sellers" style={{ position: 'relative' }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 0% 50%, rgba(var(--hue-accent), 0.05), transparent 60%)',
                zIndex: -1
            }}></div>

            <FloatingIcons opacity={0.08} />

            <div className="section-header">
                <h2 className="animate-fade-in">Unbeatable Pricing</h2>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto' }}>
                    Grow your business with the most competitive rates in Moradabad.
                </p>
            </div>

            <div className="grid-mobile-1" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Pros and Cons */}
                <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
                    <h3 style={{ marginBottom: '2rem' }}>Why GaliGo?</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ minWidth: '24px', color: 'var(--color-rating)' }}><Check /></div>
                            <div>
                                <strong>Instant Visibility</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Get seen by thousands of local customers instantly.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ minWidth: '24px', color: 'var(--color-rating)' }}><Check /></div>
                            <div>
                                <strong>Zero Commission on Delivery</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Keep 100% of your delivery earnings.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ minWidth: '24px', color: 'var(--color-rating)' }}><Check /></div>
                            <div>
                                <strong>Dedicated Support</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>24/7 support team to help you managing orders.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <span style={{ color: '#ef4444' }}><X size={16} /></span> No hidden charges or setup fees.
                        </p>
                    </div>
                </div>

                {/* Rate Card / Form Placeholder */}
                <div style={{
                    background: 'linear-gradient(145deg, var(--color-surface), var(--color-bg))',
                    padding: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-primary-glow)',
                    boxShadow: '0 20px 50px -10px var(--color-primary-glow)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <span style={{
                            background: 'var(--color-primary-glow)',
                            color: 'var(--color-primary)',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-pill)',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>Launch Offer</span>

                        <h3 style={{ marginTop: '1.5rem', fontSize: '3rem', lineHeight: 1 }}>
                            ₹0
                            <span style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', textDecoration: 'line-through', marginLeft: '10px' }}>₹499</span>
                        </h3>
                        <p style={{ color: 'var(--color-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>Free for first 2 Months!</p>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Starter Plan for Local Shops</p>
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                        Register Your Shop Now
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '1.5rem' }}>
                        Offer valid for first 500 shops in Moradabad.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SellerRateCard;
