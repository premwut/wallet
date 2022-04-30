import Transaction from "./transaction.type";

interface WalletData {
  balance: number;
  name: string;
  transaction: Transaction[];
}

export default class Wallet {
  balance: number = 0;
  constructor(data: WalletData) {
    this.balance = data.balance;
  }

  // get balance(): number {
  //     return this.balance+1;
  // }

  withdraw(amount: number): number {
    this.balance = this.balance - amount;
    return this.balance;
  }

  deposit(amount: number): number {
    this.balance = this.balance + amount;
    return this.balance;
  }
}
