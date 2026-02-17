import React from 'react';
import { Quote } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Raju Bhaiya",
            role: "Owner, Raju Chaat Bhandar",
            content: "Sach bataun toh pehle darr lag raha tha online aane mein, par GaliGo ne sab aasan kar diya. Ab toh ghar baithe order aate hain!",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww"
        },
        {
            id: 2,
            name: "Meena Ji",
            role: "Owner, Meena Boutique",
            content: "GaliGo ki wajah se meri shop ab poore Moradabad mein famous ho gayi hai. Best part ye hai ki 2 mahine tak koi commission nahi dena!",
            image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 3,
            name: "Suresh Gupta",
            role: "Owner, Gupta Electronics",
            content: "Local support team bahut badhiya hai. Koi bhi dikkat hoti hai toh turant phone uthate hain. Sales bhi double ho gayi hai.",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        }
    ];

    return (
        <section className="container section" id="reviews" style={{ marginBottom: '4rem', position: 'relative' }}>
            <FloatingIcons opacity={0.06} />

            <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
                <h2 className="animate-fade-in">Humare Sellers Ki Kahani</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Dekhiye kaise GaliGo ne badla inka business.</p>
            </div>

            <div className="grid-mobile-1" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                position: 'relative',
                zIndex: 1
            }}>
                {reviews.map((review) => (
                    <div key={review.id} className="glass-panel" style={{
                        padding: '2rem',
                        borderRadius: 'var(--radius-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        borderTop: '4px solid var(--color-primary)'
                    }}>
                        <div style={{ color: 'var(--color-primary-glow)' }}>
                            <Quote size={40} />
                        </div>

                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', flex: 1, lineHeight: '1.6' }}>
                            "{review.content}"
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                            <img
                                src={review.image}
                                alt={review.name}
                                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-surface)' }}
                            />
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{review.name}</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{review.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
