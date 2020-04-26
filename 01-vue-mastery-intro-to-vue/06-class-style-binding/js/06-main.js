//Vue.config.devtools = true;
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-blue.jpg',
        inStock: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue.jpg'
            }
        ],
        cart: 0,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },
        decrementCart() {
            if (this.cart > 0) {
                this.cart -= 1;   
            }
        }
    }
})