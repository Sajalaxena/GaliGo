import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('galigo_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('galigo_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.name === item.name); // Check name too in case ID isn't unique across shops for services
      if (existing) {
        return prev.map(i => 
          (i.id === item.id && i.name === item.name) 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId, itemName) => {
    setCartItems(prev => prev.filter(i => !(i.id === itemId && i.name === itemName)));
  };

  const updateQuantity = (itemId, itemName, delta) => {
    setCartItems(prev => {
      return prev.map(i => {
        if (i.id === itemId && i.name === itemName) {
          const newQty = i.quantity + delta;
          return newQty > 0 ? { ...i, quantity: newQty } : i;
        }
        return i;
      });
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => {
    // Assuming price is a string like "$10.00" or similar, we need to parse it.
    // For specific Indian context, maybe "₹500".
    const priceString = item.price.replace(/[^0-9.]/g, '');
    const price = parseFloat(priceString) || 0;
    return total + (price * item.quantity);
  }, 0);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      cartTotal, 
      cartCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};
