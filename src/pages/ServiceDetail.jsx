import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Phone, Globe, ChevronLeft, CheckCircle, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

import { shops } from '../data/shops';

const ServiceDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const shop = shops.find(s => s.id === parseInt(id));

  if (!shop) {
    return (
      <div className="container section center-text" style={{ padding: '4rem' }}>
        <h2>Service Not Found</h2>
        <Link to="/listing" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Services</Link>
      </div>
    );
  }

  return (
    <>
       {/* Hero Image */}
       <div style={{ 
         height: '400px', 
         width: '100%', 
         backgroundImage: `url(${shop.image})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         position: 'relative'
       }}>
         <div style={{ 
           position: 'absolute', 
           inset: 0, 
           background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), var(--color-bg))' 
         }}></div>
         
         <div className="container" style={{ position: 'relative', height: '100%', paddingTop: '20px' }}>
            <Link to="/" className="btn btn-ghost" style={{ background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white' }}>
              <ChevronLeft size={20} /> Back
            </Link>
         </div>
       </div>

       <div className="container" style={{ marginTop: '-100px', position: 'relative', zIndex: 10 }}>
         <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
            <div className="flex-center" style={{ justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ 
                    background: 'var(--color-primary)', 
                    color: 'white', 
                    padding: '2px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold' 
                  }}>
                    {shop.category}
                  </span>
                  {shop.isOpen && (
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Open Now</span>
                  )}
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{shop.name}</h1>
                <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1.5rem', color: 'var(--color-text-muted)' }}>
                  <div className="flex-center" style={{ gap: '0.25rem' }}>
                    <Star size={18} fill="var(--color-accent)" color="var(--color-accent)" />
                    <span style={{ color: 'var(--color-text-main)', fontWeight: 'bold' }}>{shop.rating}</span>
                    <span>({shop.reviews} reviews)</span>
                  </div>
                  <div className="flex-center" style={{ gap: '0.25rem' }}>
                    <MapPin size={18} />
                    <span>{shop.address}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn btn-primary" onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}>Order Now</button>
                <button 
                  className="btn btn-ghost"
                  onClick={() => {
                    const text = `Check out ${shop.name} on Galigo: ${window.location.href}`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                >
                  Share
                </button>
              </div>
            </div>

            <hr style={{ borderColor: 'hsla(0,0%,100%,0.1)', margin: '2rem 0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
              {/* Left Column: Description & Menu */}
              <div>
                <h3 style={{ marginBottom: '1rem' }}>About</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                  {shop.description}
                </p>

                <h3 style={{ marginBottom: '1rem' }}>Menu / Services</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {shop.services.map((item, index) => (
                    <div key={index} className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 'var(--radius-sm)' }}>
                      <div>
                        <span style={{ fontWeight: '500', display: 'block' }}>{item.name}</span>
                        <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{item.price}</span>
                      </div>
                      <button 
                        className="btn btn-ghost" 
                        style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)', padding: '0.5rem' }}
                        onClick={() => addToCart({ ...item, image: shop.image })}
                      >
                        <Plus size={18} /> Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Info & Hours */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Info</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                      <Clock size={18} color="var(--color-text-muted)" />
                      <span>{shop.hours}</span>
                    </div>
                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                      <Phone size={18} color="var(--color-text-muted)" />
                      <span>{shop.phone}</span>
                    </div>
                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                      <Globe size={18} color="var(--color-text-muted)" />
                      <a href={`http://${shop.website}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>{shop.website}</a>
                    </div>
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                   <h4 style={{ marginBottom: '1rem' }}>Recent Reviews</h4>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     {shop.reviewsList.map((review, idx) => (
                       <div key={idx}>
                         <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                           <span style={{ fontWeight: 'bold' }}>{review.user}</span>
                           <div className="flex-center" style={{ gap: '2px' }}>
                             <Star size={12} fill="var(--color-accent)" color="var(--color-accent)" />
                             <span style={{ fontSize: '0.8rem' }}>{review.rating}</span>
                           </div>
                         </div>
                         <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>"{review.text}"</p>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
         </div>
       </div>
    </>
  );
};

export default ServiceDetail;
