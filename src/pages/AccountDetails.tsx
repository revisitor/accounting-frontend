import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

export default function AccountDetails(): React.ReactElement {
  return (
    <div id="account-details" data-id>
      <Sidebar />
      <main />
    </div>
  );
}
