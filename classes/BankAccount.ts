import { Transaction } from "./Transaction";

export class BankAccount{
    balance:number;
    transactions:Array<Transaction> = new Array<Transaction>();

    constructor(balance: number){
        this.balance = balance;
    }

    public deposit(value:number): void{
        if(value > 0){
            this.balance += value;
            this.transactions.push(new Transaction(value, "dépôt"));
        }
    }

    public withdraw(value:number):void{
        if(value>0){
            this.balance -= value;
            this.transactions.push(new Transaction(value, "retrait"));
        }        
    }

    public displayHistory():void{
        this.transactions.forEach(elem=>console.log(`_____\n${elem.date} - ${elem.type} : ${elem.mantant} 
            \n${elem.date.toLocaleString()} - ${elem.type} : ${elem.mantant}
            \n${elem.date.toISOString()} - ${elem.type} : ${elem.mantant}`));
    }

    public transfer(account:BankAccount, value:number): void{
        account.deposit(value);
        this.withdraw(value);
    }
}