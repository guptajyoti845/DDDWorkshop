import {Product} from "../product/product";
import {Order} from "../order/Order";

export class CheckoutService {

    static createOrder(cart) {
        const products = [];
        cart.checkOut();
        cart.cartItems.forEach((cartItem) => {
            for (let i = 0; i < cartItem.quantity; i++) {
                products.push(new Product(cartItem.product.name, cartItem.product.price))
            }
        })

        return new Order(products);
    }
}
