import React from 'react';

import { observer } from 'mobx-react-lite';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import useAccountsContext from 'hooks/use-accounts-context';
import { AccountsStore, Transaction, TransactionType } from 'stores/accounts-store';

const dateFormat = new Intl.DateTimeFormat('ru-RU');

function RecentTransactionsTable(): React.ReactElement {
  const { transactionsSortedByDate: recentTransactions } = useAccountsContext() as AccountsStore;

  // eslint-disable-next-line object-curly-newline
  const createTableRow = ({ id, category, date, type, total }: Transaction) => (
    <TableRow key={id}>
      <TableCell>{category}</TableCell>
      <TableCell>{dateFormat.format(date)}</TableCell>
      <TableCell>{type === TransactionType.Expense ? 'Расход' : 'Доход'}</TableCell>
      <TableCell>{total}</TableCell>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {recentTransactions.slice(0, 5).map((transaction) => createTableRow(transaction))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default observer(RecentTransactionsTable);
