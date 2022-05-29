import React from 'react';
import { observer } from 'mobx-react-lite';

import Sidebar from '../components/sidebar/Sidebar';
import AccountForm from '../components/forms/AccountForm';
import AccountsList from '../components/account/AccountsList';

function Accounts(): React.ReactElement {
  return (
    <div id="accounts-page">
      <Sidebar />
      <main>
        <h2>Все счета</h2>
        <h3>Создать счёт</h3>
        <AccountForm />
        <AccountsList />
      </main>
    </div>
  );
}

export default observer(Accounts);
