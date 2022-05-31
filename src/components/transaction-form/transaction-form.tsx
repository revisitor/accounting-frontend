import React from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import useAccountsContext from 'hooks/use-accounts-context';
import {
  Account,
  AccountsStore,
  Transaction,
  TransactionType,
} from 'stores/accounts-store';

function TransactionForm(): React.ReactElement {
  const store = useAccountsContext() as AccountsStore;

  const [category, setCategory] = React.useState('');
  const handleCategoryChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(target.value);
  };

  const [total, setTotal] = React.useState(0.0);
  const handleTotalChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTotal(Number(target.value));
  };

  const [type, setType] = React.useState(TransactionType.Expense);
  const handleTypeChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setType(Number(target.value) as TransactionType);
  };

  const [accountId, setAccountId] = React.useState(store.accounts[0].id);
  const handleAccountChange = ({ target }: SelectChangeEvent) => {
    const id: number = Number(target.value);
    setAccountId(id);
  };

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const transaction: Transaction = {
      category,
      total,
      type,
      date: new Date(),
    };

    store.addTransaction(transaction, accountId);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <TextField
            required
            fullWidth
            name="category"
            label="Категория"
            value={category}
            onChange={handleCategoryChange}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="account-select-label">Счет</InputLabel>
            <Select
              labelId="account-select-label"
              name="accountId"
              value={accountId.toString()}
              onChange={handleAccountChange}
            >
              {store.accounts.map(({ id, name }: Account) => <MenuItem key={id} value={id}>{name}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <TextField
            required
            fullWidth
            type="number"
            name="total"
            label="Сумма"
            value={total || ''}
            onChange={handleTotalChange}
          />
        </Grid>
        <Grid item md={12}>
          <FormControl fullWidth>
            <FormLabel>Тип</FormLabel>
            <RadioGroup value={type} onChange={handleTypeChange}>
              <FormControlLabel value={TransactionType.Expense} label="Расход" control={<Radio />} />
              <FormControlLabel value={TransactionType.Income} label="Доход" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <Button color="primary" type="submit">Добавить</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TransactionForm;
