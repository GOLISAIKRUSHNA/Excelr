

class Bankaccount{

    constructor(accnum,bal){
        this.accnum=accnum;
        this.bal=bal;
    }

    deposit(amount){
        this.bal=this.bal+amount;
        console.log(`deposited amount:${amount} and balance is :${this.bal}`);
    }

    withdraw(amount){
        if(amount<=this.bal){
            this.bal=this.bal-amount;
            console.log(`withdraw amount is debited: ${amount} and remaining balance: ${this.bal}`);
        }
        else{
            console.log("Insufficient balance");
        }

    }

    checkbalance()
    {
            console.log(`Available Balance:${this.bal} rupees`);
    }
}

let acc1=new Bankaccount(567895644,10000);
acc1.checkbalance();
acc1.deposit(2000)
acc1.withdraw(1000)