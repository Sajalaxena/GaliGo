import React from 'react';
import { Star, MapPin } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

const FeaturedShop = () => {
    // Dynamic shop data
    const featuredShops = [
        {
            id: 1,
            name: "Gulshan-e-Karim",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000",
            category: "Restaurant & Catering",
            rating: 4.8,
            location: "Jama Masjid, Moradabad",
            description: "Famous for authentic Mughlai cuisine and best-in-class catering services in Moradabad. Try our signature Chicken Biryani.",
            color: 'var(--hue-primary)'
        },
        {
            id: 2,
            name: "Prabhat Medical Store",
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000",
            category: "Pharmacy & Healthcare",
            rating: 4.9,
            location: "Kanth Road, Moradabad",
            description: "Your trusted neighborhood pharmacy. Genuine medicines, 24/7 availability, and free home delivery for elderly citizens.",
            color: 'var(--hue-secondary)'
        },
        {
            id: 3,
            name: "Gupta General Store",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000",
            category: "Grocery & Daily Needs",
            rating: 4.7,
            location: "Civil Lines, Moradabad",
            description: "Serving Moradabad for over 20 years. Fresh vegetables, dairy, and household essentials delivered to your doorstep.",
            color: 'var(--hue-accent)'
        }
    ];

    return (
        <section className="container section" id="featured" style={{ position: 'relative' }}>
            <FloatingIcons opacity={0.08} />

            <div className="section-header">
                <h2 className="animate-fade-in">Top Sellers in Moradabad</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Scroll to discover our premium partners.</p>
            </div>

            <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingBottom: '4rem' }}>
                {featuredShops.map((shop, index) => (
                    <div
                        key={shop.id}
                        className="glass-panel featured-card"
                        style={{
                            position: 'sticky',
                            top: `calc(100px + ${index * 15}px)`,
                            marginBottom: '60px', // Space for next card
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            padding: 0,
                            boxShadow: `0 -5px 20px rgba(0,0,0,0.1), 0 4px 30px var(--color-shadow)`,
                            zIndex: index + 1,
                            background: `linear-gradient(to bottom right, var(--color-surface-glass), hsla(${shop.color}, 30%, 20%, 0.1))`,
                            backdropFilter: 'blur(20px)',
                            display: 'flex',
                            flexDirection: 'column', // Mobile Default: Column
                        }}
                    >
                        {/* Image Side */}
                        <div style={{
                            position: 'relative',
                            height: '220px', // Fixed height for mobile image
                            width: '100%',
                            flexShrink: 0
                        }} className="featured-image">
                            <img
                                src={shop.image}
                                alt={shop.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.3))'
                            }}></div>
                        </div>

                        {/* Details Side */}
                        <div style={{
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flex: 1
                        }}>
                            <div style={{ marginBottom: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <span style={{
                                    background: 'var(--color-rating)',
                                    color: 'white',
                                    padding: '0.25rem 0.6rem',
                                    borderRadius: 'var(--radius-pill)',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                }}>
                                    {shop.rating} <Star size={10} fill="white" />
                                </span>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{shop.category}</span>
                            </div>

                            <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{shop.name}</h2>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                <MapPin size={16} />
                                <span>{shop.location}</span>
                            </div>

                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.5', fontSize: '0.95rem' }}>
                                {shop.description}
                            </p>

                            {/* 'Visit Shop' Button Removed as requested */}

                            <div style={{ marginTop: 'auto', paddingTop: '1rem', fontSize: '0.75rem', color: 'var(--color-text-muted)', opacity: 0.7 }}>
                                #{index + 1} Top Rated Seller
                            </div>
                        </div>
                    </div>
                ))}

                <style>{`
                    @media (min-width: 768px) {
                        .featured-card {
                            display: grid !important;
                            grid-template-columns: 1.5fr 1fr !important;
                            min-height: 400px;
                        }
                        .featured-image {
                            height: 100% !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default FeaturedShop;
