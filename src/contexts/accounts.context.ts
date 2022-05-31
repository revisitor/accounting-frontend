import React from 'react';
import { AccountsStore } from '../stores/accounts-store';

const AccountContext = React.createContext<AccountsStore | null>(null);

export default AccountContext;
