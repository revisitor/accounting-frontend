import React from 'react';

import Grid from '@mui/material/Grid';

import Layout from 'components/layout/layout-page';
import TransactionForm from 'components/transaction-form/transaction-form';

import TransactionsTable from './transactions-table';

function Transactions(): React.ReactElement {
  return (
    <Layout heading="Транзакции">
      <Grid container>
        <Grid item md={6}>
          <h2>Добавить транзакцию</h2>
          <TransactionForm />
        </Grid>
        <Grid item md={12}>
          <h2>Список транзакций</h2>
          <TransactionsTable />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Transactions;
