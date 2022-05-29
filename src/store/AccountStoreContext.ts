import React from 'react';
import { AccountStore } from './AccountStore';

const AccountContext = React.createContext<AccountStore | null>(null);

export default AccountContext;
