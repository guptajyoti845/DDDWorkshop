export class Account {
    accountId;
    address;

    constructor(address) {
        this.accountId = this.generateId();
        this.address = address;
    }

    generateId() {
        return Date.now();
    }

    updateBankAccountAddress(address) {
        this.address = address;
    }
}
