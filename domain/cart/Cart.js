export class Cart {
    cartItems = [];
    removedCartItems = [];
    isCheckout = false;

    constructor() {
        this.cartItems = [];
        this.removedCartItems = [];
    }

    addCartItem(cartItem) {
        this.cartItems.push(cartItem)
    }

    removeCartItem(removeCartItem) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.product.name !== removeCartItem.product.name)
        this.removedCartItems.push(removeCartItem.product.name)
    }

    showRemovedItems() {
        this.removedCartItems.forEach(removeCartItem => {
            console.log(removeCartItem)
        })
    }


    equal(cart) {
        if (this.cartItems === cart.cartItems) {
            return true;
        }
        return false;
    }

    checkOut(){
        this.isCheckout = true;
    }

}
