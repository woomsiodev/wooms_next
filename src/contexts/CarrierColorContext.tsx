'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface CarrierColorContextType {
  color: string;
  setColor: (color: string) => void;
}

const CarrierColorContext = createContext<CarrierColorContextType | null>(null);

export function CarrierColorProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState('#FFCC00');

  return (
    <CarrierColorContext.Provider value={{ color, setColor }}>
      {children}
    </CarrierColorContext.Provider>
  );
}

export function useCarrierColor() {
  const context = useContext(CarrierColorContext);
  // Wenn kein Provider vorhanden ist (auf anderen Seiten), gib Default-Werte zurück
  if (!context) {
    return { color: '#FFCC00', setColor: () => {} };
  }
  return context;
}
