import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './router/AppRouter';
import { AccountStore } from './store/AccountStore';
import AccountContext from './store/AccountStoreContext';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <AccountContext.Provider value={React.useMemo(() => new AccountStore(), [])}>
        <AppRouter />
      </AccountContext.Provider>
    </BrowserRouter>
  );
}

export default App;
