
"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { Service, CartItem } from '@/lib/types';
import { useToast } from "@/hooks/use-toast"

interface CartContextType {
  cartItems: CartItem[];
  viewedItems: string[];
  addToCart: (service: Service) => void;
  removeFromCart: (serviceId: string) => void;
  updateQuantity: (serviceId: string, quantity: number) => void;
  getCartTotal: () => number;
  addViewedItem: (serviceId: string) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [viewedItems, setViewedItems] = useState<string[]>([]);
  const { toast } = useToast();

  const addToCart = useCallback((service: Service) => {
    let wasAdded = false;
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.service.id === service.id);
      if (existingItem) {
        wasAdded = false;
        return prevItems;
      }
      wasAdded = true;
      return [...prevItems, { service, quantity: 1 }];
    });

    if (wasAdded) {
      toast({
          title: "Added to Bag",
          description: `${service.name} has been added to your shopping bag.`,
      });
    } else {
      toast({
        title: "Already in Bag",
        description: `${service.name} is already in your shopping bag.`,
      });
    }
  }, [toast]);
  
  const removeFromCart = useCallback((serviceId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.service.id !== serviceId));
    toast({
        title: "Item Removed",
        description: `The service has been removed from your bag.`,
        variant: "destructive"
      });
  }, [toast]);

  const updateQuantity = useCallback((serviceId: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prevItems) => 
        prevItems.map(item => 
            item.service.id === serviceId ? {...item, quantity: quantity} : item
        )
    )
  }, []);
  
  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.service.price * item.quantity, 0);
  }, [cartItems]);
  
  const addViewedItem = useCallback((serviceId: string) => {
    setViewedItems((prev) => {
      if (prev.includes(serviceId)) return prev;
      const newHistory = [serviceId, ...prev];
      return newHistory.slice(0, 10);
    });
  }, []);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, viewedItems, addToCart, removeFromCart, updateQuantity, getCartTotal, addViewedItem, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
