import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            background: 'var(--color-surface)',
            marginBottom: '1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
            boxShadow: isOpen ? '0 10px 30px var(--color-shadow)' : 'none',
            transition: 'all 0.3s ease',
            position: 'relative',
            zIndex: 2
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--color-text-main)',
                    cursor: 'pointer'
                }}
            >
                {question}
                <span style={{
                    color: isOpen ? 'white' : 'var(--color-primary)',
                    background: isOpen ? 'var(--color-primary)' : 'rgba(var(--hue-primary), 0.1)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '1rem',
                    transition: 'all 0.3s ease'
                }}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>
            <div style={{
                maxHeight: isOpen ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s cubic-bezier(0, 1, 0, 1)'
            }}>
                <p style={{ padding: '0 1.5rem 1.5rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQSection = () => {
    // Branding Component (Increased Size)
    const GaliGoBrand = () => (
        <span style={{ fontWeight: '800', fontSize: '1.5rem' }}>
            <span style={{ color: 'var(--color-primary)' }}>Gali</span>
            <span style={{ color: 'var(--color-text-main)' }}>Go</span>
        </span>
    );

    const faqs = [
        {
            q: "How do I register my shop on GaliGo?",
            a: "Simply fill out the 'Register Your Shop' form above. Our local team will visit your shop for verification and onboarding within 24 hours."
        },
        {
            q: "Is the 2-month free trial really free?",
            a: "Yes! For the first two months, we charge ₹0 subscription fees. You only pay standard transaction charges if applicable. There are no hidden setup costs."
        },
        {
            q: "What types of shops can join?",
            a: "We welcome all local businesses in Moradabad! Grocery stores, pharmacies, restaurants, boutiques, electronics repair shops, and more."
        },
        {
            q: "How fast are payouts?",
            a: "We offer daily settlements. Your earnings from today are transferred to your bank account by tomorrow morning."
        }
    ];

    return (
        <section className="section" id="faq" style={{
            // Stronger gradient for light mode
            background: 'linear-gradient(180deg, rgba(var(--hue-secondary), 0.1) 0%, rgba(var(--hue-primary), 0.2) 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <FloatingIcons opacity={0.1} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="animate-fade-in" style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        Everything you need to know about joining <GaliGoBrand />.
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((item, idx) => (
                        <FAQItem key={idx} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
