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

            <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
                <h2 className="animate-fade-in">Top Sellers in Moradabad</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Scroll to discover our premium partners.</p>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                {featuredShops.map((shop, index) => (
                    <div
                        key={shop.id}
                        className="glass-panel"
                        style={{
                            position: 'sticky',
                            top: `calc(100px + ${index * 20}px)`,
                            marginBottom: '4rem', // Space for next card to scroll into view
                            display: 'grid',
                            gridTemplateColumns: '1.5fr 1fr',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            padding: 0,
                            minHeight: '400px',
                            boxShadow: `0 -10px 30px rgba(0,0,0,0.1), 0 4px 30px var(--color-shadow)`, // strong shadow for depth
                            zIndex: index + 1,
                            background: `linear-gradient(to bottom right, var(--color-surface-glass), hsla(${shop.color}, 30%, 20%, 0.1))`,
                            backdropFilter: 'blur(20px)' // Heavy blur to hide content behind
                        }}
                    >
                        {/* Image Side */}
                        <div style={{ position: 'relative', height: '100%', minHeight: '300px' }} className="w-full-mobile">
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
                                background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.2))'
                            }}></div>
                        </div>

                        {/* Details Side */}
                        <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="w-full-mobile">
                            <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <span style={{
                                    background: 'var(--color-rating)',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: 'var(--radius-pill)',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                }}>
                                    {shop.rating} <Star size={12} fill="white" />
                                </span>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{shop.category}</span>
                            </div>

                            <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>{shop.name}</h2>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                                <MapPin size={18} />
                                <span>{shop.location}</span>
                            </div>

                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                                {shop.description}
                            </p>

                            <button className="btn btn-primary">
                                Visit Shop
                            </button>

                            <div style={{ marginTop: 'auto', paddingTop: '1rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', opacity: 0.7 }}>
                                #{index + 1} Top Rated Seller
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedShop;
