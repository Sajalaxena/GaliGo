import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ id, name, image, rating, reviews, category, address, isOpen, price, reviewText }) => {
  return (
    <Link to={`/service/${id}`} className="service-card glass-panel" style={{ 
      display: 'block', 
      borderRadius: 'var(--radius-md)', 
      overflow: 'hidden',
      transition: 'var(--transition-fast)',
      position: 'relative'
    }}>
      {/* Image Container */}
      <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-smooth)' }} 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: isOpen ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.75rem',
          fontWeight: '600',
          backdropFilter: 'blur(4px)'
        }}>
          {isOpen ? 'Open Now' : 'Closed'}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 'var(--space-sm)' }}>
        <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '0.25rem' }}>
          <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{name}</h3>
          <div className="flex-center" style={{ background: 'var(--color-rating)', padding: '2px 6px', borderRadius: '4px', gap: '2px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{rating}</span>
            <Star size={12} fill="white" />
          </div>
        </div>

        <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>{category}</p>
          {price && <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-main)' }}>{price}</span>}
        </div>

        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
          <MapPin size={14} />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>{address}</span>
        </div>

        {/* Review Snippet */}
        {reviewText && (
          <div style={{ 
            marginTop: '0.5rem', 
            paddingTop: '0.5rem', 
            borderTop: '1px solid var(--color-border)',
            fontSize: '0.8rem',
            fontStyle: 'italic',
            color: 'var(--color-text-muted)'
          }}>
            "{reviewText}"
          </div>
        )}
      </div>
    </Link>
  );
};

export default ServiceCard;
