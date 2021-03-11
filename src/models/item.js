export default class Item {
    id;
    title;
    price;
    picture;
    condition;
    free_shipping;

    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.price = this.getPrice(data.price, data.prices?.prices || []);
        this.picture = data.thumbnail;
        this.condition = data.condition;
        this.free_shipping = this.isFreeShipping(data.shipping);
    }

    getPrice(currentPrice, prices) {
        let price = prices.find(x => x.amount === currentPrice);
        return {
            currency: price ? price.currency_id : 'ARS',
            amount: currentPrice,
            decimals: currentPrice.toString().split('.').length > 1 ? currentPrice.toString().split('.')[1] : '0',
        };
    }
    isFreeShipping(shipping){
        return shipping.free_shipping;
    }
}
