import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Accounts from './pages/accounts/accounts-page';
import Dashboard from './pages/dashboard/dashboard-page';
import Transactions from './pages/transactions/transactions-page';

import { AccountsStore } from './stores/accounts-store';
import AccountContext from './contexts/accounts.context';
import AccountDetails from './pages/account-details/account-details-page';

function App(): React.ReactElement {
  return (
    <AccountContext.Provider value={React.useMemo(() => new AccountsStore(), [])}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="accounts" element={<Accounts />}>
              <Route path=":id" element={<AccountDetails />} />
            </Route>
            <Route path="transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccountContext.Provider>
  );
}

export default App;
