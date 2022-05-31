import React from 'react';

import { observer } from 'mobx-react-lite';

import Box from '@mui/material/Box';

import { AccountCard } from './account-card';
import { AccountsStore } from '../../stores/accounts-store';
import useAccountsContext from '../../hooks/use-accounts-context';

function AccountsList(): React.ReactElement {
  const { accounts } = useAccountsContext() as AccountsStore;
  return (
    <Box>
      {accounts.map((account) => <AccountCard key={account.id} account={account} />)}
    </Box>
  );
}

export default observer(AccountsList);
