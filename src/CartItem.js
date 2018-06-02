class CartItem {
    constructor(name, count, basePrice) {
        this.name = name;
        this.count = count;
        this.basePrice = basePrice;
    }

    GetTotalPrice() {
        return this.basePrice * this.count;
    }

    static CanBeConstructed(name, count, basePrice) {
        return name && count && basePrice;
    }
}