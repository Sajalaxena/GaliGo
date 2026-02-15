import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { MapPin, Clock, CreditCard, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { playSuccessSound } from '../utils/audio';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: location }, replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryType, setDeliveryType] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      playSuccessSound();
      setOrderPlaced(true);
      clearCart();
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="section container flex-center" style={{ flexDirection: 'column', minHeight: '60vh', textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <CheckCircle size={80} color="var(--color-secondary)" />
        </div>
        <h1 style={{ marginBottom: '1rem' }}>Order Placed!</h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '400px', marginBottom: '2rem' }}>
          Your order has been successfully placed. Your delivery partner will arrive in approximately 35 mins.
        </p>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
     return (
       <div className="section container flex-center" style={{ flexDirection: 'column', minHeight: '60vh' }}>
         <h2>Your cart is empty</h2>
         <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Go to Home</Link>
       </div>
     );
  }

  const [scheduleDay, setScheduleDay] = useState('today'); // 'today' or 'tomorrow'
  const [selectedSlot, setSelectedSlot] = useState('');

  // Generate Slots based on logic
  const getSlots = (day) => {
    const slots = [
      { id: '06-09', label: '6 AM - 9 AM', endHour: 9 },
      { id: '09-12', label: '9 AM - 12 PM', endHour: 12 },
      { id: '12-15', label: '12 PM - 3 PM', endHour: 15 },
      { id: '15-18', label: '3 PM - 6 PM', endHour: 18 },
      { id: '18-21', label: '6 PM - 9 PM', endHour: 21 },
      { id: '21-23', label: '9 PM - 11 PM', endHour: 23 },
    ];

    if (day === 'tomorrow') return slots;

    const currentHour = new Date().getHours();
    return slots.filter(slot => slot.endHour > currentHour);
  };

  return (
    <div className="container section">
      <Link to="/" className="btn btn-ghost" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
        <ArrowLeft size={18} /> Back to Shopping
      </Link>
      
      <h1 style={{ marginBottom: '2rem' }}>Checkout</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {/* Left Column - Form */}
        <div>
          <form onSubmit={handlePlaceOrder}>
            {/* Address Section */}
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
              <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <MapPin size={24} color="var(--color-primary)" />
                <h3 style={{ margin: 0 }}>Delivery Address</h3>
              </div>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                <input type="tel" placeholder="Mobile Number" defaultValue={isAuthenticated ? "9876543210" : ""} style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-main)', outline: 'none' }} />
                <input type="text" placeholder="Street Address" required style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-main)', outline: 'none' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" placeholder="City" defaultValue="Moradabad" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-main)', outline: 'none' }} />
                  <input type="text" placeholder="Postal Code" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-main)', outline: 'none' }} />
                </div>
              </div>
            </div>

            {/* Delivery Time */}
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
               <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Clock size={24} color="var(--color-primary)" />
                <h3 style={{ margin: 0 }}>Delivery Time</h3>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <label className="flex-center" style={{ 
                  flex: 1, 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-sm)', 
                  border: `1px solid ${deliveryType === 'standard' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  background: deliveryType === 'standard' ? 'rgba(var(--hue-primary), 0.1)' : 'transparent',
                  cursor: 'pointer'
                }}>
                  <input type="radio" name="delivery" checked={deliveryType === 'standard'} onChange={() => { setDeliveryType('standard'); setSelectedSlot(''); }} style={{ marginRight: '0.5rem' }} />
                  <div>
                    <span style={{ display: 'block', fontWeight: 'bold' }}>Standard</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>30-45 mins</span>
                  </div>
                </label>
                
                <label className="flex-center" style={{ 
                   flex: 1, 
                   padding: '1rem', 
                   borderRadius: 'var(--radius-sm)', 
                   border: `1px solid ${deliveryType === 'schedule' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                   background: deliveryType === 'schedule' ? 'rgba(var(--hue-primary), 0.1)' : 'transparent',
                   cursor: 'pointer'
                 }}>
                   <input type="radio" name="delivery" checked={deliveryType === 'schedule'} onChange={() => setDeliveryType('schedule')} style={{ marginRight: '0.5rem' }} />
                   <div>
                     <span style={{ display: 'block', fontWeight: 'bold' }}>Schedule</span>
                     <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Choose time</span>
                   </div>
                 </label>
              </div>

              {/* Schedule Slots UI */}
              {deliveryType === 'schedule' && (
                <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                    <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', marginBottom: '1rem' }}>
                        <button 
                            type="button"
                            onClick={() => setScheduleDay('today')}
                            style={{ 
                                flex: 1, 
                                padding: '0.75rem', 
                                background: 'transparent', 
                                border: 'none', 
                                borderBottom: scheduleDay === 'today' ? '2px solid var(--color-primary)' : 'none',
                                color: scheduleDay === 'today' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Today
                        </button>
                        <button 
                            type="button"
                            onClick={() => setScheduleDay('tomorrow')}
                            style={{ 
                                flex: 1, 
                                padding: '0.75rem', 
                                background: 'transparent', 
                                border: 'none', 
                                borderBottom: scheduleDay === 'tomorrow' ? '2px solid var(--color-primary)' : 'none',
                                color: scheduleDay === 'tomorrow' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Tomorrow
                        </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.75rem' }}>
                        {getSlots(scheduleDay).map(slot => (
                            <div 
                                key={slot.id}
                                onClick={() => setSelectedSlot(slot.id)}
                                style={{
                                    padding: '0.75rem 0.5rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: `1px solid ${selectedSlot === slot.id ? 'var(--color-primary)' : 'var(--color-border)'}`,
                                    background: selectedSlot === slot.id ? 'var(--color-primary)' : 'rgba(255,255,255,0.05)',
                                    color: selectedSlot === slot.id ? 'white' : 'var(--color-text-main)',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    fontSize: '0.85rem'
                                }}
                            >
                                {slot.label}
                            </div>
                        ))}
                        {getSlots(scheduleDay).length === 0 && (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--color-text-muted)', padding: '1rem' }}>
                                No slots available for today.
                            </div>
                        )}
                    </div>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
               <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <CreditCard size={24} color="var(--color-primary)" />
                <h3 style={{ margin: 0 }}>Payment Method</h3>
              </div>

               <label className="flex-center" style={{ 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-sm)', 
                  border: `1px solid ${paymentMethod === 'cod' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  background: paymentMethod === 'cod' ? 'rgba(var(--hue-primary), 0.1)' : 'transparent',
                  cursor: 'pointer',
                  marginBottom: '1rem'
                }}>
                  <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} style={{ marginRight: '0.5rem' }} />
                  <span style={{ fontWeight: 'bold' }}>Cash on Delivery</span>
                </label>

                <label className="flex-center" style={{ 
                   padding: '1rem', 
                   borderRadius: 'var(--radius-sm)', 
                   border: '1px solid var(--color-border)',
                   opacity: 0.5,
                   cursor: 'not-allowed'
                 }}>
                   <input type="radio" name="payment" disabled style={{ marginRight: '0.5rem' }} />
                   <span style={{ fontWeight: 'bold' }}>Credit/Debit Card (Unavailable)</span>
                 </label>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.2rem' }}>
              Place Order
            </button>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', position: 'sticky', top: '100px' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex-center" style={{ justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span>{item.quantity} x {item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
            
            <hr style={{ borderColor: 'var(--color-border)', marginBottom: '1.5rem' }} />
            
            <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Subtotal</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Delivery Fee</span>
              <span>₹40.00</span>
            </div>
            
            <hr style={{ borderColor: 'var(--color-border)', marginBottom: '1.5rem' }} />
            
            <div className="flex-center" style={{ justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold' }}>
              <span>Total</span>
              <span>₹{(cartTotal + 40).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
