import React from 'react';

import { observer } from 'mobx-react-lite';

import { AccountEntry } from './AccountEntry';
import AccountContext from '../../store/AccountStoreContext';
import { AccountStore } from '../../store/AccountStore';

function AccountsList(): React.ReactElement {
  const { accounts } = React.useContext(AccountContext) as AccountStore;
  return (
    <div id="accounts">
      <h3>Баланс счетов</h3>
      {accounts.map(({ id, name }) => <AccountEntry key={id} id={id || 0} name={name} />)}
    </div>
  );
}

export default observer(AccountsList);
