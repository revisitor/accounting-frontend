import React from 'react';
import AccountContext from '../contexts/accounts.context';

const useAccountsContext = () => React.useContext(AccountContext);

export default useAccountsContext;
