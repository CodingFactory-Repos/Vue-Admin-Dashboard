export default {
    name: 'ProductFormComponent',

    data() {
        return {
            name:'',
            describe : '',
            price : 0,
            quantity : 0,
            pathPicture : ''
        };
    },
    methods:{
        addProduct(){
            let data = {
                id : 0,
                image : this.pathPicture,
                name : this.name,
                description : this.describe,
                price : this.price,
                stock : this.quantity
            }

            this.$emit('add', data)

            console.log(this.name + '  '+ this.describe + ' '+ this.pathPicture)
        }
    }
}