import React, { useState } from 'react';
import { Filter, ChevronDown, Search } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CategoryRail from '../components/CategoryRail';
import { useLocation } from '../context/LocationContext';

import { shops } from '../data/shops';

const Listing = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { location } = useLocation();

  const filters = ['All', 'Dining', 'Sweets', 'Shopping', 'Fitness', 'Automotive', 'Salon', 'Repair', 'Health', 'Cafe'];

  const filteredShops = shops.filter(shop => {
    const matchesCategory = activeFilter === 'All' || shop.category === activeFilter;
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          shop.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          shop.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="section container">
      <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ marginBottom: '0.5rem' }}>Explore Services</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>{filteredShops.length} results in {location.split(',')[0]}</p>
        </div>
        
        {/* Search Bar in Listing */}
        <div style={{
          position: 'relative',
          flex: '1',
          maxWidth: '400px',
          minWidth: '280px'
        }}>
           <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
           <input 
            type="text" 
            placeholder="Search stores, services..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 0.75rem 0.75rem 2.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-main)',
              fontSize: '1rem',
              outline: 'none'
            }}
           />
        </div>
      </div>

       {/* Category Rail (Interactive) */}
       <div style={{ marginBottom: '2rem' }}>
        <CategoryRail activeCategory={activeFilter} onSelect={setActiveFilter} />
      </div>

      {/* Grid */}

      {/* Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '2rem',
        animation: 'fadeIn 0.5s ease-out'
      }}>
        {filteredShops.length > 0 ? (
          filteredShops.map(shop => (
            <ServiceCard key={shop.id} {...shop} />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>
             <h3>No services found matching "{searchTerm}"</h3>
             <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
