export class Transaction{
    date:Date = new Date();
    mantant:number;
    type:string;
    constructor(montant:number, type:string){
        this.mantant = montant;
        this.type = type;
    }
}