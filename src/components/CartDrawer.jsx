import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      justifyContent: 'flex-end',
    }}>
      {/* Backdrop */}
      <div
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer */}
      <div className="glass-panel w-full-mobile h-dvh-mobile" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        height: '100%',
        background: 'var(--color-surface)',
        borderLeft: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideInRight 0.3s ease-out'
      }}>
        {/* Header */}
        <div className="flex-center" style={{ justifyContent: 'space-between', padding: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
          <h3>Your Cart ({cartCount})</h3>
          <button onClick={() => setIsCartOpen(false)} className="btn btn-ghost" style={{ padding: '0.5rem' }}>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {cartItems.length === 0 ? (
            <div className="flex-center" style={{ flexDirection: 'column', height: '100%', color: 'var(--color-text-muted)', gap: '1rem' }}>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                <ShoppingBag size={48} />
              </div>
              <p>Your cart is empty</p>
              <button onClick={() => setIsCartOpen(false)} className="btn btn-secondary">Start Shopping</button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cartItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', flexShrink: 0 }}>
                    <img src={item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <h4 style={{ fontSize: '1rem', margin: 0 }}>{item.name}</h4>
                      <button
                        onClick={() => removeFromCart(item.id, item.name)}
                        style={{ background: 'transparent', color: 'var(--color-text-muted)', fontSize: '0.8rem', cursor: 'pointer', padding: '0.25rem' }}
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.price}</p>

                    <div className="flex-center" style={{
                      background: 'rgba(255,255,255,0.05)',
                      display: 'inline-flex',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.25rem'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.name, -1)}
                        className="btn-ghost"
                        style={{ padding: '0.25rem 0.5rem', border: 'none' }}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ padding: '0 0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.name, 1)}
                        className="btn-ghost"
                        style={{ padding: '0.25rem 0.5rem', border: 'none' }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
            <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Total</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>₹{cartTotal.toFixed(2)}</span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                setIsCartOpen(false);
                navigate('/checkout');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default CartDrawer;
