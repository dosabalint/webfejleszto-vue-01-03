let app = new Vue({
    el: 'main#app',

    data: {
        itemCollection: [],
        newItem: {
            name: null,
            count: null,
            basePrice: null
        }
    },

    created: function() {
        this.itemCollection.push(new CartItem('tej', 2, 200));
        this.itemCollection.push(new CartItem('kenyér', 5, 200));
        this.itemCollection.push(new CartItem('gumicukor', 10, 500));
    },

    methods: {
        AddNewItem: function() {
            // validálás
            if (
                !CartItem.CanBeConstructed(
                    this.newItem.name,
                    this.newItem.count,
                    this.newItem.basePrice
                )
            ) {
                return;
            }

            // új elem beszúrása
            this.itemCollection.push(
                new CartItem(
                    this.newItem.name,
                    this.newItem.count,
                    this.newItem.basePrice
                )
            );

            // ideiglenes objektum ürítése
            this.newItem.name = null;
            this.newItem.count = null;
            this.newItem.basePrice = null;
        }
    }
});