import React from 'react';

import { observer } from 'mobx-react-lite';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import { AccountsStore, TransactionType } from 'stores/accounts-store';
import useAccountsContext from 'hooks/use-accounts-context';

interface TableTransaction {
  id?: number,
  name: string,
  total: number,
  type: TransactionType,
  category: string,
  date: Date
}

const dateFormat = new Intl.DateTimeFormat('ru-RU');

function TransactionsTable(): React.ReactElement {
  const store = useAccountsContext() as AccountsStore;

  const getTransactionsForTable = (): TableTransaction[] => {
    // eslint-disable-next-line arrow-body-style
    const modifiedTransactions: TableTransaction[] = store.accounts.flatMap(({ name, transactions }) => {
      return transactions.map((transaction) => ({ ...transaction, name }));
    });

    return modifiedTransactions.sort((a, b) => a.date.getMilliseconds() - b.date.getMilliseconds());
  };

  // eslint-disable-next-line object-curly-newline
  const createTableRow = ({ id, category, date, type, total, name }: TableTransaction) => (
    <TableRow key={id}>
      <TableCell>{category}</TableCell>
      <TableCell>{dateFormat.format(date)}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{type === TransactionType.Expense ? 'Расход' : 'Доход'}</TableCell>
      <TableCell>{total}</TableCell>
      <TableCell>
        <ButtonGroup>
          <Button>Изменить</Button>
          <Button color="warning">Удалить</Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Категория</TableCell>
            <TableCell>Дата</TableCell>
            <TableCell>Счёт</TableCell>
            <TableCell>Тип</TableCell>
            <TableCell>Сумма</TableCell>
            <TableCell>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getTransactionsForTable().map((transaction: TableTransaction) => createTableRow(transaction))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default observer(TransactionsTable);
