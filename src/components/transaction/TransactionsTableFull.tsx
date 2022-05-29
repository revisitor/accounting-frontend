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

import { AccountStore, Transaction } from '../../store/AccountStore';
import AccountContext from '../../store/AccountStoreContext';

function TransactionsTableFull(): React.ReactElement {
  const { allTransactions } = React.useContext(AccountContext) as AccountStore;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Категория</TableCell>
            <TableCell>Подкатегория</TableCell>
            <TableCell>Дата</TableCell>
            {/* <TableCell>Счёт</TableCell> */}
            <TableCell>Тип</TableCell>
            <TableCell>Сумма</TableCell>
            <TableCell>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allTransactions.map((transaction: Transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.title}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>{transaction.subcategory}</TableCell>
              <TableCell>{transaction.date.toLocaleString('ru')}</TableCell>
              {/* <TableCell>{transaction.accountId}</TableCell> */}
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.total}</TableCell>
              <TableCell>
                <ButtonGroup>
                  <Button>Изменить</Button>
                  <Button color="warning">Удалить</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default observer(TransactionsTableFull);
