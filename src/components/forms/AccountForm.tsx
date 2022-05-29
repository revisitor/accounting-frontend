import React from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import AccountContext from '../../store/AccountStoreContext';
import { AccountStore } from '../../store/AccountStore';

function AccountForm(): React.ReactElement {
  const { addAccount } = React.useContext(AccountContext) as AccountStore;

  const [name, setName] = React.useState('');
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName: string = event.target.value;
    setName(newName);
  };

  const onFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    addAccount(name);
    setName('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <TextField
            required
            variant="standard"
            size="small"
            label="Название"
            onChange={onNameChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">Создать</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AccountForm;
