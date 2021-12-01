import { RouterPage } from './pages/router-page';
import { UIProvider } from './context/ui-context';

export const TicketApp = () => {
  return (
    <UIProvider>
      <RouterPage />
    </UIProvider>
  );
};
