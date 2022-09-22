export default {
    name: 'ProductFormComponent',

    data() {
        return {
            name:'',
            describe : '',
            price : 0,
            quantity : 0,
            urlPicture : ''
        };
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