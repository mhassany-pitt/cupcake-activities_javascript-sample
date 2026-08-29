class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log(`Deposited ${amount}`);
        }
        return this.balance;
    }

    withdraw(amount) {
        if (0 < amount && amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log(`Withdrew ${amount}`);
        } else {
            console.log("Insufficient funds");
        }
        return this.balance;
    }
}

function main() {
    const account = new BankAccount("Bob", 200);
    account.deposit(100);
    account.withdraw(50);
    console.log(`Balance: ${account.balance}`);
}

main();
