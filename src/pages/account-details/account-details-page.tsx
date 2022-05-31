import React from 'react';

import Layout from 'components/layout/layout-page';
import useAccountsContext from 'hooks/use-accounts-context';
import { AccountsStore, Account } from 'stores/accounts-store';

import { useParams } from 'react-router-dom';

import AccountTransactionsTable from './account-transactions-table';

function AccountDetails(): React.ReactElement {
  const { accounts } = useAccountsContext() as AccountsStore;
  const { id } = useParams();
  const account = accounts.find((acc) => acc.id === Number(id)) as Account;
  return (
    <Layout heading={account.name}>
      <AccountTransactionsTable account={account} />
    </Layout>
  );
}

export default AccountDetails;
