import React, { ReactElement } from 'react';
import { SidebarLink } from './SidebarLink';

function Sidebar(): ReactElement {
  return (
    <div id="sidebar">
      <SidebarLink href="/dashboard" label="Главная страница" />
      <SidebarLink href="/accounts" label="Счета" />
      <SidebarLink href="/transactions" label="Транзакции" />
      <SidebarLink href="/sign-out" label="Выход" />
    </div>
  );
}

export default Sidebar;
