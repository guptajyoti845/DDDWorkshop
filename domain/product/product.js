import {getDiscountPrice} from "../domain_service/DiscountedPrice";

export class Product {
    name = "";
    price = {};
    weight = 0.0;

    constructor(name, price = {currency: 'USD', value: 5}, weight = 0.0) {
        this.name = name;
        this.price = {...price, value: getDiscountPrice(name)};
        this.weight = weight;
    }
}
