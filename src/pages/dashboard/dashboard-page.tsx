import React from 'react';

import Box from '@mui/material/Box';

import AccountsList from 'components/accounts-list/accounts-list';
import Layout from 'components/layout/layout-page';

import RecentTransactionsTable from './recent-transactions-table';
import Summary from './summary';

function Dashboard(): React.ReactElement {
  return (
    <Layout heading="Главная страница">
      <Box>
        <h2>Баланс счетов</h2>
        <AccountsList />
      </Box>
      <Box>
        <h2>Недавние транзакции</h2>
        <RecentTransactionsTable />
      </Box>
      <Box>
        <h2>Статистика</h2>
        <Summary />
      </Box>
    </Layout>
  );
}

export default Dashboard;
