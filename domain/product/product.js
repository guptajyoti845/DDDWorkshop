import {getDiscountPrice} from "../domain_service/DiscountedPrice";

export class Product {
    name = "";
    price = {}

    constructor(name, price = {currency: 'USD', value: 5}) {
        this.name = name;
        this.price = {...price, value: getDiscountPrice(name)};
    }
}
