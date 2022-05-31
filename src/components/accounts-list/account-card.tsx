import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { Account, Transaction, TransactionType } from '../../stores/accounts-store';

export type AccountEntryProps = {
  account: Account,
};

export function AccountCard({ account }: AccountEntryProps): React.ReactElement {
  const getAccountBalance = () => {
    const { transactions } = account;

    const income: number = transactions.filter(({ type }: Transaction) => type === TransactionType.Income)
      .map(({ total }) => total)
      .reduce((a, b) => a + b, 0);

    const expense: number = transactions.filter(({ type }: Transaction) => type === TransactionType.Expense)
      .map(({ total }) => total)
      .reduce((a, b) => a + b, 0);

    return income - expense;
  };

  return (
    <Card>
      <Link to={`/accounts/${account.id}`}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">{account.name}</Typography>
            <Typography variant="body1">{`Баланс: ${getAccountBalance()}`}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
