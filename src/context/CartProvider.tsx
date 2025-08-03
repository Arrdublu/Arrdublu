
"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import type { Service, CartItem, Currency, ExchangeRates } from '@/lib/types';
import { useToast } from "@/hooks/use-toast"
import { formatCurrency } from '@/lib/utils';

// Mock exchange rates relative to USD
const MOCK_RATES: ExchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 157,
};

interface CartContextType {
  cartItems: CartItem[];
  viewedItems: string[];
  addToCart: (service: Service) => void;
  removeFromCart: (serviceId: string) => void;
  updateQuantity: (serviceId: string, quantity: number) => void;
  getCartTotal: () => number;
  addViewedItem: (serviceId: string) => void;
  cartCount: number;
  currency: Currency;
  exchangeRates: ExchangeRates;
  setCurrency: (currency: Currency) => void;
  getFormattedPrice: (amount: number, currencyOverride?: Currency) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [viewedItems, setViewedItems] = useState<string[]>([]);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [exchangeRates] = useState<ExchangeRates>(MOCK_RATES);
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

  const cartCount = useMemo(() => cartItems.reduce((count, item) => count + item.quantity, 0), [cartItems]);
  
  const getFormattedPrice = useCallback((amount: number, currencyOverride?: Currency) => {
    const targetCurrency = currencyOverride || currency;
    return formatCurrency(amount, targetCurrency, exchangeRates);
  }, [currency, exchangeRates]);


  const value = {
    cartItems,
    viewedItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    addViewedItem,
    cartCount,
    currency,
    exchangeRates,
    setCurrency,
    getFormattedPrice
  };


  return (
    <CartContext.Provider value={value}>
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
