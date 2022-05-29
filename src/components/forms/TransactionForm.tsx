import React from 'react';

import {
  Button,
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  InputLabel,
  Select,
} from '@mui/material';

import AccountContext from '../../store/AccountStoreContext';
import { AccountStore, TransactionType } from '../../store/AccountStore';

export default function TransactionForm(): React.ReactElement {
  const { addTransaction } = React.useContext(AccountContext) as AccountStore;

  const [title, setTitle] = React.useState('');
  const onTitleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle: string = target.value;
    setTitle(newTitle);
  };

  const [category, setCategory] = React.useState('');
  const onCategoryChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory: string = target.value;
    setCategory(newCategory);
  };

  const [subcategory, setSubcategory] = React.useState('');
  const onSubcategoryChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newSubcategory: string = target.value;
    setSubcategory(newSubcategory);
  };

  const [total, setTotal] = React.useState(0.0);
  const onTotalChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newTotal: number = Number.parseFloat(target.value);
    setTotal(newTotal);
  };

  const [date, setDate] = React.useState(new Date());
  const onDateChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newDate: Date | null = new Date(target.value);
    if (newDate) {
      setDate(newDate);
    } else {
      console.error(`Не получилось распарсить дату из ${newDate}`);
    }
  };

  const [type, setType] = React.useState(TransactionType.Expense as string);
  const onTypeChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newType: string = target.value;
    setType(newType);
  };

  const onFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    addTransaction({
      title,
      category,
      subcategory,
      total,
      date,
      type: type as TransactionType,
    }, 1);
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
            value={title}
            onChange={onTitleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            variant="standard"
            size="small"
            label="Категория"
            value={category}
            onChange={onCategoryChange}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="standard"
            size="small"
            label="Подкатегория"
            value={subcategory}
            onChange={onSubcategoryChange}
          />
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel>Счет</InputLabel>
            <Select />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Тип</FormLabel>
            <RadioGroup onChange={onTypeChange}>
              <FormControlLabel value={TransactionType.Expense as string} label="Расход" control={<Radio />} />
              <FormControlLabel value={TransactionType.Income as string} label="Доход" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            required
            variant="standard"
            size="small"
            label="Сумма"
            type="number"
            value={total}
            onChange={onTotalChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">Добавить</Button>
        </Grid>
      </Grid>
    </form>
  );
}
