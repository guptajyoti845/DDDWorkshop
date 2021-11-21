export class Order {
    products = []

    constructor(products) {
        this.products = products;
    }

    calculateTotalCost() {
        let totalCost = 0;
        this.products.forEach(product => {
            totalCost += ((product.weight * 0.01) + product.price.value)
        })
        return totalCost;
    }
}
