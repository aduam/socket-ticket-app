import { useContext, useEffect } from 'react';

import { UIContext } from '../context/ui-context';

export const useHideMenu = (hide) => {
  const {
    handleShowMenu,
    handleHideMenu,
  } = useContext(UIContext);

  useEffect(() => {
    if (hide) {
      handleShowMenu();
    } else {
      handleHideMenu();
    }
  }, [
    hide,
    handleShowMenu,
    handleHideMenu,
  ]);
};
