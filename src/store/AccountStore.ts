import {
  action,
  computed,
  makeObservable,
  observable,
} from 'mobx';

export type Account = {
  id?: number;
  name: string;
  transactions: Transaction[];
};

export enum TransactionType {
  Expense = 'Расход',
  Income = 'Доход',
}

export type Transaction = {
  id?: number;
  title: string;
  category: string;
  subcategory: string;
  type: TransactionType;
  date: Date;
  total: number;
};

export class AccountStore {
  private nextAccountId = 3;

  private nextTransactionId = 4;

  accounts: Account[] = [
    {
      id: 1,
      name: 'Счёт 1',
      transactions: [
        {
          id: 1,
          title: 'T1',
          category: 'Продукты',
          subcategory: '',
          type: TransactionType.Expense,
          date: new Date(),
          total: 50.0,
        },
        {
          id: 2,
          title: 'T2',
          category: 'ЖКХ',
          subcategory: '',
          type: TransactionType.Expense,
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
          title: 'T1',
          category: 'Кафе',
          subcategory: '',
          type: TransactionType.Expense,
          date: new Date(),
          total: 60.0,
        },
      ],
    },
  ];

  public constructor() {
    makeObservable(this, {
      accounts: observable,
      addAccount: action,
      addTransaction: action,
      totalBalance: computed,
      allTransactions: computed,
    });
  }

  public addAccount(name: string): void {
    this.accounts.push({
      name,
      id: this.nextAccountId,
      transactions: [],
    });

    this.nextAccountId += 1;
  }

  public addTransaction(transaction: Transaction, accountId: number): void {
    const account = this.accounts.find((acc) => acc.id === accountId);
    if (account) {
      account.transactions.push({
        ...transaction,
        id: this.nextTransactionId,
      });

      this.accounts = this.accounts.filter((acc) => acc.id !== accountId);
      this.accounts.push(account);
    } else {
      throw new Error(`Счета с id = ${accountId} не существует`);
    }
  }

  get totalBalance(): number {
    const transactions: Transaction[] = this.allTransactions;

    const income: number = transactions.filter(({ type }) => type === TransactionType.Income)
      .map(({ total }) => total)
      .reduce((a, b) => a + b);

    const expense: number = transactions.filter(({ type }) => type === TransactionType.Expense)
      .map(({ total }) => total)
      .reduce((a, b) => a + b);

    return income - expense;
  }

  get allTransactions(): Transaction[] {
    return this.accounts.map((account) => account.transactions).flat();
  }
}
