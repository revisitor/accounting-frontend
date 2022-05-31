import React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import useAccountsContext from 'hooks/use-accounts-context';
import { AccountsStore } from 'stores/accounts-store';

function AccountForm(): React.ReactElement {
  const [name, setName] = React.useState('');
  const handleNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  };

  const [balance, setBalance] = React.useState(0.0);
  const handleBalanceChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(Number.parseFloat(target.value));
  };

  const store = useAccountsContext() as AccountsStore;
  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    store.addAccount(name, balance);
    setName('');
    setBalance(0.0);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12}>
          <TextField
            required
            fullWidth
            name="name"
            label="Название"
            value={name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item sm={12} md={12}>
          <TextField
            required
            fullWidth
            name="balance"
            label="Начальный баланс"
            type="number"
            value={balance || ''}
            onChange={handleBalanceChange}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Button fullWidth color="primary" type="submit">Создать счёт</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AccountForm;
