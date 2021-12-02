import { RouterPage } from './pages/router-page';
import { UIProvider } from './context/ui-context';
import { SocketProvider } from './context/socket-context';

export const TicketApp = () => {
  return (
    <SocketProvider>
      <UIProvider>
        <RouterPage />
      </UIProvider>
    </SocketProvider>
  );
};
