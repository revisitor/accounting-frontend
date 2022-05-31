import { makeAutoObservable } from 'mobx';

export type Account = {
  id: number;
  name: string;
  transactions: Transaction[];
};

export enum TransactionType {
  Expense = 0,
  Income = 1,
}

export type Transaction = {
  id?: number;
  category: string;
  type: TransactionType;
  date: Date;
  total: number;
};

export class AccountsStore {
  private nextAccountId = 3;

  private nextTransactionId = 4;

  accounts: Account[] = [
    {
      id: 1,
      name: 'Счёт 1',
      transactions: [
        {
          id: 1,
          category: 'Продукты',
          type: TransactionType.Expense,
          date: new Date(),
          total: 50.0,
        },
        {
          id: 2,
          category: 'Начальный баланс',
          type: TransactionType.Income,
          date: new Date(),
          total: 70.0,
        },
      ],
    },
    {
      id: 2,
      name: 'Счёт 2',
      transactions: [
        {
          id: 3,
          category: 'Начальный баланс',
          type: TransactionType.Income,
          date: new Date(),
          total: 60.0,
        },
      ],
    },
  ];

  public constructor() {
    makeAutoObservable(this);
  }

  public addAccount(name: string, balance: number): void {
    this.accounts.push({
      name,
      id: this.nextAccountId,
      transactions: [{
        id: this.nextTransactionId,
        category: 'Начальный баланс',
        type: TransactionType.Income,
        date: new Date(),
        total: balance,
      }],
    });

    this.nextAccountId += 1;
    this.nextTransactionId += 1;
  }

  public addTransaction(transaction: Transaction, accountId: number): void {
    const account = this.accounts.find((acc) => acc.id === accountId) as Account;
    account.transactions.push({ ...transaction, id: this.nextTransactionId });
    this.accounts = this.accounts.filter((acc) => acc.id !== accountId);
    this.accounts.push(account);
    this.nextTransactionId += 1;
  }

  get totalBalance(): number {
    const transactions: Transaction[] = this.allTransactions;

    const income: number = transactions.filter(({ type }) => type === TransactionType.Income)
      .map(({ total }) => total)
      .reduce((a: number, b: number) => a + b, 0);

    const expense: number = transactions.filter(({ type }) => type === TransactionType.Expense)
      .map(({ total }) => total)
      .reduce((a: number, b: number) => a + b, 0);

    return income - expense;
  }

  get todayExpense(): number {
    const today: number = new Date().setHours(0, 0, 0, 0);
    return this.allTransactions
      .filter(({ type }) => type === TransactionType.Expense)
      .filter(({ date }) => new Date(date).setHours(0, 0, 0, 0) === today)
      .map(({ total }) => total)
      .reduce((a, b) => a + b, 0);
  }

  get weekExpense(): number {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const day = today.getDate();

    const start = new Date(today);
    start.setDate(day - dayOfWeek);
    const startMs = start.setHours(0, 0, 0, 0);

    const end = new Date(today);
    end.setDate(day + (7 - dayOfWeek));
    const endMs = end.setHours(0, 0, 0, 0);

    return this.allTransactions
      .filter(({ type }) => type === TransactionType.Expense)
      .filter(({ date }) => {
        const dateMs = date.valueOf();
        return startMs <= dateMs && dateMs <= endMs;
      })
      .map(({ total }) => total)
      .reduce((a, b) => a + b, 0);
  }

  get monthExpense(): number {
    const month: number = new Date().getMonth();
    return this.allTransactions
      .filter(({ type }) => type === TransactionType.Expense)
      .filter(({ date }) => date.getMonth() === month)
      .map(({ total }) => total)
      .reduce((a, b) => a + b, 0);
  }

  get allTransactions(): Transaction[] {
    return this.accounts.map(({ transactions }) => transactions).flat();
  }

  get transactionsSortedByDate(): Transaction[] {
    const transactions = this.allTransactions;
    return transactions.sort((a, b) => a.date.getMilliseconds() - b.date.getMilliseconds());
  }
}
