import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

const ComparisonSection = () => {
    // Branding Component (Increased Size)
    const GaliGoBrand = () => (
        <span style={{ fontWeight: '800', fontSize: '2rem' }}>
            <span style={{ color: 'var(--color-primary)' }}>Gali</span>
            <span style={{ color: 'var(--color-text-main)' }}>Go</span>
        </span>
    );

    return (
        <section className="section" id="comparison" style={{
            // Stronger gradient for better light mode visibility
            background: 'linear-gradient(180deg, rgba(var(--hue-primary), 0.15) 0%, rgba(var(--hue-bg), 1) 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Blur */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(var(--hue-primary), 0.25) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <FloatingIcons opacity={0.1} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="animate-fade-in" style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        Why Choose <GaliGoBrand />?
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>We are built for Moradabad, not Silicon Valley.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                    alignItems: 'center'
                }} className="grid-mobile-1">

                    {/* Competitor Card - "The Old Way" */}
                    <div className="glass-panel" style={{
                        borderRadius: 'var(--radius-lg)',
                        padding: '2rem',
                        border: '1px solid var(--color-border)',
                        opacity: 0.9,
                        transform: 'scale(0.95)',
                        background: 'var(--color-surface)'
                    }}>
                        <h3 style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', textAlign: 'center' }}>Other Delivery Apps</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { label: "Commission", value: "25-30%", icon: <X size={20} color="#ef4444" /> },
                                { label: "Delivery Radius", value: "Limited (3-5km)", icon: <X size={20} color="#ef4444" /> },
                                { label: "Hidden Charges", value: "High", icon: <X size={20} color="#ef4444" /> },
                                { label: "Support", value: "Chatbots", icon: <X size={20} color="#ef4444" /> }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                                    <span style={{ color: 'var(--color-text-muted)' }}>{item.label}</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                                        {item.value} {item.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* GaliGo Card - "The Better Way" */}
                    <div style={{
                        borderRadius: 'var(--radius-lg)',
                        padding: '3rem',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                        color: 'white',
                        boxShadow: '0 20px 40px -10px var(--color-primary-glow)',
                        transform: 'scale(1.05)',
                        position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', top: '-15px', right: '2rem', background: 'white', color: 'var(--color-primary)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-pill)', fontWeight: 'bold', fontSize: '0.8rem', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                            RECOMMENDED
                        </div>

                        <h3 style={{ marginBottom: '2rem', textAlign: 'center', color: 'white' }}>The <span style={{ fontWeight: '800' }}>GaliGo</span> Advantage</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { label: "Commission", value: "0% (Launch Offer)", icon: <Check size={20} color="white" /> },
                                { label: "Delivery Radius", value: "Entire Moradabad", icon: <Check size={20} color="white" /> },
                                { label: "Hidden Charges", value: "None", icon: <Check size={20} color="white" /> },
                                { label: "Support", value: "Local Manager", icon: <ShieldCheck size={20} color="white" /> }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
                                    <span style={{ opacity: 0.9 }}>{item.label}</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                                        {item.value} {item.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
