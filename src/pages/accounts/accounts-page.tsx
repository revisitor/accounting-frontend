import React from 'react';

import Grid from '@mui/material/Grid';

import AccountsList from 'components/accounts-list/accounts-list';
import Layout from 'components/layout/layout-page';

import AccountForm from './account-form';

function Accounts(): React.ReactElement {
  return (
    <Layout heading="Счета">
      <Grid container spacing={1}>
        <Grid item sm={12} md={4}>
          <h2>Добавить счёт</h2>
          <AccountForm />
        </Grid>
        <Grid item sm={12} md={12}>
          <h2>Список счетов</h2>
          <AccountsList />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Accounts;
