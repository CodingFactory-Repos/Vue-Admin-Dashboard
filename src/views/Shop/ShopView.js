import ProductComponents from './../../components/Product/ProductComponents.vue';
import {useProductStore} from "@/store/product";
import {mapStores, mapState} from "pinia";

export default ({
    components: {
        ProductComponents,
    },
  name: 'ShopView',

    data() {
        return {
            msg: 'and welcome to Thomas the Train'
        }
    },
    computed : {
        ...mapStores(useProductStore),
        ...mapState(useProductStore, ['products'])
    },
    beforeMount() {
        // exemple, ici on fetch la data avant que le composant soit monté
        this.useProductStore.getAllProduct();
    }

});
