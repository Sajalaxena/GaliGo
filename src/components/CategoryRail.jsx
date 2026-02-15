import React from 'react';
import { Utensils, Scissors, Wrench, ShoppingBag, Coffee, Car, Stethoscope, Dumbbell, LayoutGrid, Cake } from 'lucide-react';

const categories = [
  { id: 'All', name: 'All', icon: LayoutGrid },
  { id: 'Dining', name: 'Dining', icon: Utensils },
  { id: 'Sweets', name: 'Sweets', icon: Cake },
  { id: 'Salon', name: 'Salon', icon: Scissors },
  { id: 'Repair', name: 'Repair', icon: Wrench },
  { id: 'Shopping', name: 'Shopping', icon: ShoppingBag },
  { id: 'Cafe', name: 'Cafe', icon: Coffee },
  { id: 'Automotive', name: 'Automotive', icon: Car },
  { id: 'Health', name: 'Health', icon: Stethoscope },
  { id: 'Fitness', name: 'Fitness', icon: Dumbbell },
];

const CategoryRail = ({ activeCategory, onSelect }) => {
  return (
    <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '1rem' }}>
      <div style={{ display: 'flex', gap: '1.5rem', padding: '0.5rem' }}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <div 
              key={cat.id} 
              className="flex-center" 
              style={{ 
                flexDirection: 'column', 
                gap: '0.5rem', 
                minWidth: '80px', 
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                opacity: isActive ? 1 : 0.7
              }}
              onClick={() => onSelect && onSelect(cat.id)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                if (!isActive) e.currentTarget.style.opacity = '0.7';
              }}
            >
              <div className="glass-panel flex-center" style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%',
                background: isActive ? 'var(--color-primary)' : 'var(--color-surface-glass)',
                border: isActive ? '2px solid var(--color-primary-glow)' : '1px solid var(--color-border)',
                boxShadow: isActive ? '0 8px 20px var(--color-primary-glow)' : '0 4px 10px var(--color-shadow)',
                transition: 'var(--transition-smooth)'
               }}>
                <cat.icon size={28} color={isActive ? 'white' : 'var(--color-primary)'} />
              </div>
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: isActive ? '700' : '500', 
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-main)' 
              }}>
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryRail;
