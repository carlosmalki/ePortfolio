const app = new Vue({
    el: '#app2',
    data: {
        products: [
            {
                id: 1,
                image: 'img/product1.jpg',
                description: 'Smart Home Guardian',
                price: 4999.99,
            },
            {
                id: 2,
                image: 'img/product2.jpg',
                description: 'Eco Tracker',
                price: 3744.99,
            },
            {
                id: 2,
                image: 'img/product2.jpg',
                description: 'Health Companion',
                price: 999.99,
            },
            {
                id: 2,
                image: 'img/product3.jpg',
                description: 'CodeCraft Academy',
                price: 2499.99,
            },
          
        ],
        cartItems: [],
    },
    methods: {
        addToCart(product) {
            this.cartItems.push(product);
        },
    },
});
