import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AccountDetails from '../pages/AccountDetails';
import Accounts from '../pages/Accounts';
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="accounts" element={<Accounts />} />
      <Route path="accounts/:id" element={<AccountDetails />} />
      <Route path="transactions" element={<Transactions />} />
    </Routes>
  );
}

export default AppRouter;
