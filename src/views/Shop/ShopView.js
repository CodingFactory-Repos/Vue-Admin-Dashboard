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
      this.productStore.getAllProduct();
      this.products = this.productStore.products

}


});
