import { createContext, useState } from 'react';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(false);

  const handleShowMenu = () => {
    setHideMenu(true);
  };

  const handleHideMenu = () => {
    setHideMenu(false);
  };

  return (
    <UIContext.Provider value={{
      hideMenu,
      handleShowMenu,
      handleHideMenu,
    }}>
      { children }
    </UIContext.Provider>
  );
};