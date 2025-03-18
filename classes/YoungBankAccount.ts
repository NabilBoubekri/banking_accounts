import { BankAccount } from "./BankAccount";

export class YoungBankAccount extends BankAccount{
    public override transfer():void{
        console.log("_____\nTransfer indisponible pour un jeune compte bancaire");
    }

    public override withdraw():void{
        console.log("_____\nRetrait  indisponible pour un jeune compte bancaire");
    }
}