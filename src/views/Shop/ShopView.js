import axios from "axios";
import {mapStores} from "pinia";
import {useProductStore} from "@/store/product";
import ProductCard from "@/components/ProductCardComponents/ProductCardComponents";

export default ({
    name: 'ShopView',

    components: {
        ProductCard
    },

    data() {
        this.productStore = useProductStore();

        return {
            products: []
        }
    },
    computed: {
        ...mapStores(useProductStore)
    },

    async mounted() {

        await this.productStore.getAllProduct();
        this.products = this.productStore.products

    },
});
