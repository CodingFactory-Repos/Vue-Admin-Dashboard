import axios from "axios";

export default ({
  name: 'AdminView',
    data() {
        return {
            products: []
        }
    },

    mounted() {
      axios.get('http://10.57.29.194:3000/products')
        .then(response => {
            this.products = response.data
        })
    }
});
