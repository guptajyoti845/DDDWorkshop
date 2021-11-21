import {Cart} from '../domain/cart/Cart';
import {CartItem} from '../domain/cart/cartItem';
import {Product} from "../domain/product/product";
import {Price} from "../domain/price/price";
import {CheckoutService} from "../domain/domain_service/CheckoutService";

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

    it("should have two different Carts", () => {
        const cart1 = new Cart();
        const cart2 = new Cart();

        const ipadProduct = new Product("Ipad")
        const iPadCartItem = new CartItem(ipadProduct, 1);

        cart1.addCartItem(iPadCartItem);
        cart2.addCartItem(iPadCartItem);

        expect(cart1.equal(cart2)).toEqual(false)
    })

    it('should add price to product', () => {
        const price = new Price('INR', 100);
        const iPad = new Product('ipad', price);

        expect(iPad.price.currency).toEqual(price.currency);
        expect(iPad.price.value).toEqual(270);

    });

    it('should show price of my product 10% below competitor price', () => {
        const cart = new Cart();

        const iPad = new Product('ipad', new Price('INR', 100));
        const iPadCartItem = new CartItem(iPad, 1);

        cart.addCartItem(iPadCartItem)

        expect(cart.cartItems[0].product.price.value).toEqual(270)

    });

    it('should create Order( with Products) when Cart is checked out', () => {
        const cart = new Cart();
        const iPad = new Product('ipad', new Price('INR', 100));
        const heroInkPen = new Product('heroInkPen', new Price('INR', 100));
        const iPadCartItem = new CartItem(iPad, 2);
        const heroInkPenCartItem = new CartItem(heroInkPen, 3);
        cart.addCartItem(iPadCartItem)
        cart.addCartItem(heroInkPenCartItem)

        const order = CheckoutService.createOrder(cart);
        expect(order.products).toHaveLength(5)

    });

    it('should calculate Total cost for the Order', function () {
        const cart = new Cart();

        const iPad = new Product('ipad', new Price('INR', 100), 10.0);
        const iPadCartItem = new CartItem(iPad, 2);

        cart.addCartItem(iPadCartItem)

        const order = CheckoutService.createOrder(cart);
        const totalCost = order.calculateTotalCost();

        expect(totalCost).toEqual(540.2);

    });
})
