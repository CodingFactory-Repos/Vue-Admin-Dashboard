export default ({
  name: 'AdminView',
    data() {
        return {
            email: '',
            password : ''
        }
    },
    methods:{
        form() {
            console.log(this.password)
        }
    }
});
