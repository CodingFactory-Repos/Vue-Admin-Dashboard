import axios from "axios";
import {mapStores} from "pinia";
import {useProductStore} from "@/store/product";

export default ({
  name: 'ShopView',
    data() {
        return {
            products: []
        }
    },
    computed:{
      ...mapStores(useProductStore)
    },

    mounted() {
        axios.get('http://10.57.29.194:3000/products')
            .then(response => {
                this.products = response.data
            });
    },
    beforeMount() {
      this.productStore.getAllProduct();
    }

});
