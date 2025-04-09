'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LayoutContextType {
  isNewLayout: boolean;
  toggleLayout: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isNewLayout, setIsNewLayout] = useState<boolean>(false);

  const toggleLayout = () => {
    setIsNewLayout((prev) => !prev);
    localStorage.setItem('isNewLayout', JSON.stringify(!isNewLayout)); // Persist the choice
  };

  return (
    <LayoutContext.Provider value={{ isNewLayout, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return <LayoutProvider>{children}</LayoutProvider>;
}
