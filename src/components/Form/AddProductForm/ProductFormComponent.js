export default {
    name: 'ProductFormComponent',

    props: ['product'],

    data() {
        return {
            editing: false,
            id: 0,
            name: '',
            describe: '',
            price: 0,
            quantity: 0,
            urlPicture: ''
        };
    },

    updated() {
        if (!this.editing && this.product.id !== 0) {
            this.initProduct(this.product);

            this.editing = true;
        } else if (!this.editing && this.product.id === 0) {
           this.initProduct(this.product);

            this.editing = true;
        } else if (this.product.id !== this.id) {
            this.initProduct(this.product);
        }
    },

    methods: {
        addProduct() {
            let data = {
                // id: this.id,
                image: this.urlPicture,
                name: this.name,
                description: this.describe,
                price: this.price,
                stock: this.quantity
            }

            this.editing = false;
            this.$emit('add', data)
        },

        initProduct(product) {
            this.id = product.id;
            this.name = product.name;
            this.describe = product.description;
            this.price = product.price;
            this.quantity = product.stock;
            this.urlPicture = product.image;
        }
    }
}
