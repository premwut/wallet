export enum TRANSACTION_TYPE {
    INCOME = 'INCOME',
    EXPENSE = 'EXPENSE', 
}

export enum CATEGORIES {
    FOOD = 'FOOD',
    TRAVEL = 'TRAVEL',
    ENTERTAINMENT = 'ENTERTAINMENT',
    INVESTMENT = 'INVESTMENT',
    OTHERS = 'OTHERS',
}

export default interface Transaction {
    amount: Number,
    type: TRANSACTION_TYPE,
    categories: CATEGORIES,
    date: Date,
}