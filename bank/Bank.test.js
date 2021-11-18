import {Customer} from "./Customer";
import {Address} from "./Address";
import {Account} from "./Account";

describe("Bank Test", () => {
    it('should update her all Bank Accounts address as well when she update customer’s Address ,  ', function () {
        const oldAddress = new Address("Pune");
        const newAddress = new Address("Chennai");

        const ICICIAccount = new Account(oldAddress)
        const IDFCAccount = new Account(oldAddress)
        const customer = new Customer(oldAddress);

        customer.addAccount(IDFCAccount);
        customer.addAccount(ICICIAccount);

        expect(customer.address.city).toEqual(oldAddress.city);
        expect(ICICIAccount.address.city).toEqual(oldAddress.city);


        customer.changeAddress(newAddress)

        expect(customer.address.city).toEqual(newAddress.city);
        expect(ICICIAccount.address.city).toEqual(newAddress.city);

    });
})
