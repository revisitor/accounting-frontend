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

import { Account, Transaction, TransactionType } from '../../stores/accounts-store';

type AccountTransactionsProps = {
  account: Account;
};

const dateFormat = new Intl.DateTimeFormat('ru-RU');

function AccountTransactionsTable({ account }: AccountTransactionsProps): React.ReactElement {
  const { transactions } = account;

  // eslint-disable-next-line object-curly-newline
  const createTransactionRow = ({ id, category, date, type, total }: Transaction) => (
    <TableRow key={id}>
      <TableCell>{category}</TableCell>
      <TableCell>{dateFormat.format(date)}</TableCell>
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
            <TableCell>Тип</TableCell>
            <TableCell>Сумма</TableCell>
            <TableCell>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction: Transaction) => createTransactionRow(transaction))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default observer(AccountTransactionsTable);
