// context/NavContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';

const NavContext = createContext({
  isVisible: true,
  setNavVisible: (val: boolean) => {},
});

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const setNavVisible = (val: boolean) => setIsVisible(val);

  return (
    <NavContext.Provider value={{ isVisible, setNavVisible: setNavVisible }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);