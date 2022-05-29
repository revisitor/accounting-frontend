import React from 'react';
import AccountsList from '../components/account/AccountsList';
import Sidebar from '../components/sidebar/Sidebar';

function Dashboard(): React.ReactElement {
  return (
    <div id="dashboard-page">
      <Sidebar />

      <main>
        <h2>Главная страница</h2>

        <AccountsList />

        <div id="last-transactions">
          <h3>Недавние транзакции</h3>
          <table id="transactions-table">
            <thead>
              <tr>
                <th>Название</th>
                <th>Категория</th>
                <th>Дата</th>
                <th>Сумма</th>
                <th>Счёт</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO */}
            </tbody>
          </table>
        </div>

        <div id="summary">
          <h3>Статистика</h3>
          <p>Общий баланс: </p>
          <p>Потрачено за день: </p>
          <p>Потрачено за неделю: </p>
          <p>Потрачено за месяц: </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
