export default {
    name: 'ProductFormComponent',

    props: ['product'],

    data() {
        return {
            name:'',
            describe : '',
            price : 0,
            quantity : 0,
            urlPicture : ''
        };
    },

    updated() {
        this.name = this.product.name;
        this.describe = this.product.description;
        this.price = this.product.price;
        this.quantity = this.product.stock;
        this.urlPicture = this.product.image;
    },

    methods:{
        addProduct(){
            let data = {
                id : 0,
                image : this.urlPicture,
                name : this.name,
                description : this.describe,
                price : this.price,
                stock : this.quantity
            }

            this.$emit('add', data)
        }
    }
}
