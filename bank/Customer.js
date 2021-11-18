export class Customer {
    customerId;
    address;
    bankAccounts = []

    constructor(address) {
        this.customerId = this.generateId();
        this.address = address;
        this.bankAccounts = [];
    }

    generateId() {
        return Date.now();
    }

    addAccount(account) {
        this.bankAccounts.push(account);
    }

    changeAddress(address){
        this.address = address;
        this.bankAccounts.forEach(bankAccount => {
            bankAccount.updateBankAccountAddress(address);
        })

    }
}
