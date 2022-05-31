import React from 'react';

import { observer } from 'mobx-react-lite';

import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import useAccountsContext from 'hooks/use-accounts-context';
import { AccountsStore } from 'stores/accounts-store';

function Summary(): React.ReactElement {
  const store = useAccountsContext() as AccountsStore;
  return (
    <Container>
      <List>
        <ListItem>
          <ListItemText primary={`Общий баланс: ${store.totalBalance}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Потрачено за день: ${store.todayExpense}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Потрачено за неделю: ${store.weekExpense}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Потрачено за месяц: ${store.monthExpense}`} />
        </ListItem>
      </List>
    </Container>
  );
}

export default observer(Summary);
