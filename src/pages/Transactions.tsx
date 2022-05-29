import React from 'react';

import { observer } from 'mobx-react-lite';

import Sidebar from '../components/sidebar/Sidebar';

import TransactionsTableFull from '../components/transaction/TransactionsTableFull';
import TransactionForm from '../components/forms/TransactionForm';

function Transactions(): React.ReactElement {
  return (
    <div id="transactions">
      <Sidebar />
      <main>
        <h2>Список транзакций</h2>
        <TransactionForm />
        <TransactionsTableFull />
      </main>
    </div>
  );
}

export default observer(Transactions);
