import React from 'react';
import { Target, Heart, TrendingUp } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

const About = () => {
    return (
        <section className="container section" id="about" style={{ position: 'relative' }}>
            <FloatingIcons opacity={0.05} />

            <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
                <h2 className="animate-fade-in">What we are doing</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Empowering Moradabad, one connection at a time.</p>
            </div>

            <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', position: 'relative', zIndex: 1 }}>
                {[
                    {
                        icon: <Target size={32} color="var(--color-primary)" />,
                        title: "Connecting Locals",
                        desc: "Bringing the best of your city to your fingertips. Find everything from local snacks to essential services."
                    },
                    {
                        icon: <TrendingUp size={32} color="var(--color-secondary)" />,
                        title: "Empowering Sellers",
                        desc: "Giving local businesses a digital platform to compete with giants. Zero commission for maximum growth."
                    },
                    {
                        icon: <Heart size={32} color="var(--color-accent)" />,
                        title: "Community First",
                        desc: "We prioritize local needs and build relationships, not just transactions. Made in Moradabad, for Moradabad."
                    }
                ].map((item, index) => (
                    <div key={index} className="glass-panel hover-lift" style={{
                        padding: '2rem',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center',
                        borderTop: `4px solid var(--color-primary)`
                    }}>
                        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                                padding: '1rem',
                                background: 'rgba(var(--hue-primary), 0.1)',
                                borderRadius: '50%'
                            }}>
                                {item.icon}
                            </div>
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
