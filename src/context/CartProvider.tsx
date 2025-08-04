
"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { Currency, ExchangeRates } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

// Mock exchange rates relative to USD
const MOCK_RATES: ExchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 157,
  JMD: 155,
};

interface CartContextType {
  viewedItems: string[];
  addViewedItem: (serviceId: string) => void;
  currency: Currency;
  exchangeRates: ExchangeRates;
  setCurrency: (currency: Currency) => void;
  getFormattedPrice: (amount: number, currencyOverride?: Currency) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [viewedItems, setViewedItems] = useState<string[]>([]);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [exchangeRates] = useState<ExchangeRates>(MOCK_RATES);

  const addViewedItem = useCallback((serviceId: string) => {
    setViewedItems((prev) => {
      if (prev.includes(serviceId)) return prev;
      const newHistory = [serviceId, ...prev];
      return newHistory.slice(0, 10);
    });
  }, []);
  
  const getFormattedPrice = useCallback((amount: number, currencyOverride?: Currency) => {
    const targetCurrency = currencyOverride || currency;
    return formatCurrency(amount, targetCurrency, exchangeRates);
  }, [currency, exchangeRates]);


  const value = {
    viewedItems,
    addViewedItem,
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
