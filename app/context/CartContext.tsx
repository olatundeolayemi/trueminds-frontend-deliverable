'use client';

import React, { createContext, useContext, useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
  protein?: string;
  extras?: string[];
  specialInstructions?: string;
}

interface DeliveryInfo {
  address: string;
  time: string;
  instructions: string;
  phone: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  deliveryInfo: DeliveryInfo;
  setDeliveryInfo: (info: DeliveryInfo) => void;
  orderNumber: string;
  setOrderNumber: (number: string) => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    address: 'Home: 123 Main Street, Victoria Island, Lagos Apt 4B, Opposite Mega Plaza',
    time: 'ASAP(30-25)',
    instructions: 'E.g leave at the front of the door, knock twice...................',
    phone: '+234 801 234 5678',
  });
  const [orderNumber, setOrderNumber] = useState('');

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = (item: CartItem) => {
    console.log("[v0] addToCart called with:", item);
    setCart((prevCart) => {
      console.log("[v0] Previous cart state:", prevCart);
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        const newCart = prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
        console.log("[v0] Updated existing item, new cart:", newCart);
        return newCart;
      }
      const newCart = [...prevCart, item];
      console.log("[v0] Added new item, new cart:", newCart);
      return newCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        deliveryInfo,
        setDeliveryInfo,
        orderNumber,
        setOrderNumber,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
