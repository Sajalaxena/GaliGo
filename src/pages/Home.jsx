import React, { useState } from 'react';
import { Search, Pizza, Hammer, Zap, ShoppingBag, Sandwich, Dumbbell, Candy, Carrot } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CategoryRail from '../components/CategoryRail';
import { useLocation } from '../context/LocationContext';

import { shops } from '../data/shops';

const Home = () => {
  const { location } = useLocation();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering Logic
  const filteredShops = shops.filter(shop => {
    const matchesCategory = activeFilter === 'All' || shop.category === activeFilter;
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '6rem 0 2rem',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(var(--hue-primary), 0.15) 0%, rgba(0,0,0,0) 70%)',
          zIndex: -1,
          pointerEvents: 'none',
          animation: 'pulse 10s infinite ease-in-out'
        }}></div>

        {/* Floating Icons (Hidden on Mobile) */}
        <div className="hidden-mobile" style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          animation: 'float 6s infinite ease-in-out',
          zIndex: -1,
          opacity: 0.15
        }}>
          <Pizza size={80} color="var(--color-primary)" />
        </div>

        <div className="hidden-mobile" style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          animation: 'float 8s infinite ease-in-out reverse',
          zIndex: -1,
          opacity: 0.15
        }}>
          <Hammer size={100} color="var(--color-accent)" />
        </div>

        <div className="hidden-mobile" style={{
          position: 'absolute',
          top: '15%',
          right: '20%',
          animation: 'float 7s infinite ease-in-out',
          zIndex: -1,
          opacity: 0.15
        }}>
          <Zap size={60} color="var(--color-secondary)" />
        </div>

        <div className="hidden-mobile" style={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          animation: 'float 9s infinite ease-in-out reverse',
          zIndex: -1,
          opacity: 0.15
        }}>
          <ShoppingBag size={70} color="var(--color-text-muted)" />
        </div>

        {/* Extended Icons: Burger, Gym, Sugar, Veg */}
        <div className="hidden-mobile" style={{
          position: 'absolute',
          top: '25%',
          left: '35%',
          animation: 'float 7.5s infinite ease-in-out',
          zIndex: -1,
          opacity: 0.12
        }}>
          <Sandwich size={65} color="#e67e22" />
        </div>

        <div className="hidden-mobile" style={{
          position: 'absolute',
          bottom: '30%',
          right: '5%',
          animation: 'float 8.5s infinite ease-in-out reverse',
          zIndex: -1,
          opacity: 0.12
        }}>
          <Dumbbell size={75} color="#3498db" />
        </div>

        <div className="hidden-mobile" style={{
          position: 'absolute',
          top: '5%',
          right: '40%',
          animation: 'float 6.5s infinite ease-in-out',
          zIndex: -1,
          opacity: 0.12
        }}>
          <Candy size={55} color="#e91e63" />
        </div>

        <div className="hidden-mobile" style={{
          position: 'absolute',
          bottom: '10%',
          left: '45%',
          animation: 'float 9.5s infinite ease-in-out reverse',
          zIndex: -1,
          opacity: 0.12
        }}>
          <Carrot size={60} color="#2ecc71" />
        </div>

        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>Discover the best of <br /><span style={{ color: 'var(--color-primary)' }}>{location.split(',')[0]}</span></h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Explore top-rated shops, trusted services, and hidden gems in your city.
          </p>

          {/* Search Bar */}
          <div className="glass-panel" style={{
            maxWidth: '700px',
            margin: '0 auto 3rem',
            padding: '10px',
            borderRadius: 'var(--radius-pill)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div className="flex-center" style={{ width: '40px', color: 'var(--color-text-muted)' }}>
              <Search size={22} />
            </div>
            <input
              type="text"
              placeholder={`Search in ${location.split(',')[0]}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                color: 'var(--color-text-main)',
                fontSize: '1rem',
                outline: 'none',
                padding: '0.5rem',
                minWidth: '0'
              }}
            />
            <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', whiteSpace: 'nowrap' }}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Explore Section (Merged from Listing) */}
      <section className="container section" style={{ paddingTop: '0' }}>
        {/* Category Rail */}
        <div style={{ marginBottom: '2rem' }}>
          <CategoryRail activeCategory={activeFilter} onSelect={setActiveFilter} />
        </div>

        <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.75rem' }}>
            {activeFilter === 'All' ? 'All Services' : activeFilter}
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>{filteredShops.length} results</p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem',
          animation: 'fadeIn 0.5s ease-out'
        }} className="grid-mobile-1">
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
      </section>
    </>
  );
};

export default Home;
