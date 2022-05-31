import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Sidebar(): React.ReactElement {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ flexShrink: 0 }}>
      <List disablePadding>
        <Link to="/dashboard">
          <ListItemButton>
            <ListItemText>Главная страница</ListItemText>
          </ListItemButton>
        </Link>
        <Link to="/accounts">
          <ListItemButton>
            <ListItemText>Счета</ListItemText>
          </ListItemButton>
        </Link>
        <Link to="/transactions">
          <ListItemButton>
            <ListItemText>Транзакции</ListItemText>
          </ListItemButton>
        </Link>
        <Link to="/sign-out">
          <ListItemButton>
            <ListItemText>Выход</ListItemText>
          </ListItemButton>
        </Link>
      </List>
    </Drawer>
  );
}

export default Sidebar;
