export function getDiscountPrice(productName) {
    const competitor = new Map();
    competitor.set('ipad', 300)
    competitor.set('heroInkPen', 500)
    competitor.set('cricketBat', 1000)

    const discountedPrice = (competitor.get(productName) * 10) / 100
    return competitor.get(productName) - discountedPrice;
}
