export class Cart {
    cartItems = [];
    removedCartItems = [];

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

}
