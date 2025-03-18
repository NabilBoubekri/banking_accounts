import { BankAccount } from "./classes/BankAccount";
import { YoungBankAccount } from "./classes/YoungBankAccount";

let jean:BankAccount = new BankAccount(0);
let pierre:BankAccount = new BankAccount(10);
let bart:YoungBankAccount = new YoungBankAccount(25);

jean.deposit(10);
jean.deposit(90);
jean.withdraw(15);

pierre.deposit(200);
pierre.deposit(50);
pierre.withdraw(26);

bart.deposit(200);
bart.deposit(50);



jean.displayHistory();
pierre.displayHistory();
bart.transfer();
bart.withdraw();
jean.transfer(pierre, 40)