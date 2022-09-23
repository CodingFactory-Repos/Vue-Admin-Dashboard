
import {mapStores} from "pinia";
import {useProductStore} from "@/store/product";
import ProductCard from "@/components/ProductCardComponents/ProductCardComponents";
import SwitchComponents from "@/components/Switcher/SwitchComponents.vue";


export default ({
    name: 'ShopView',

    components: {
        ProductCard,
        SwitchComponents
    },

    data() {
        this.productStore = useProductStore();

        return {
            products: [],
            pages: 0,
            currentPage: 1,
        }
    },
    computed: {
        ...mapStores(useProductStore)
    },

    methods: {
        changePage(page) {
            this.currentPage = page;
            this.products = this.productStore.products.slice((this.currentPage - 1) * 6, this.currentPage * 6);
        }
    },

    async mounted() {
        await this.productStore.getAllProduct();
        this.products = this.productStore.products.slice((this.currentPage - 1) * 6, this.currentPage * 6);

        this.pages = Math.ceil(this.productStore.products.length / 6);
    },
});
