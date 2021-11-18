import {Cart} from '../cart/Cart';
import {CartItem} from '../cart/cartItem';
import {Product} from "../Product/product";

describe("Cart Test", () => {
    it("create Cart and add Ipad cartItem with quantity 1", () => {
        const iPad = new Product("Ipad")
        const cartItem = new CartItem(iPad, 1);
        const cart = new Cart();
        cart.addCartItem(cartItem)
        expect(cart.cartItems).toEqual([cartItem]);
    })

    it("create Cart and add Ipad & Hero Ink Pen with quantity 1", () => {
        const ipad = new Product("Ipad")
        const heroInkPen = new Product("Hero Ink Pen")
        const heroInkPenCartItem = new CartItem(heroInkPen, 1);
        const ipadCartItem = new CartItem(ipad, 1);
        const cart = new Cart();
        cart.addCartItem(heroInkPenCartItem)
        cart.addCartItem(ipadCartItem)
        expect(cart.cartItems).toEqual([heroInkPenCartItem, ipadCartItem]);
    })

    it("create Cart , add & remove CartItem then print removed CartItems", () => {
        const ipadProduct = new Product("Ipad")
        const heroInkPenProduct = new Product("Hero Ink Pen")

        const heroInkPen = new CartItem(heroInkPenProduct, 1);
        const iPad = new CartItem(ipadProduct, 1);

        const cart = new Cart();

        cart.addCartItem(heroInkPen)
        cart.addCartItem(iPad)
        cart.removeCartItem(heroInkPen)

        expect(cart.cartItems).toEqual([iPad]);
    })

})
