import {mapStores} from "pinia";
import {useProductStore} from "@/store/product";

export default ({
    name: 'ProductView',

    data() {
        return {
            products: [],
            selectProduct: [],

        }
    },

    /* Mapping the productStore to the component. */
    computed: {
        ...mapStores(useProductStore),
    },

    methods: {
        /* A function that is called when the checkbox is clicked. It is used to add or remove the product id from the
        selectProduct array. */
        chooseDeleteProduct(id, event) {
            if(event.target.checked) {
                this.selectProduct.push(id);
            } else {
                this.selectProduct.splice(this.selectProduct.indexOf(id), 1);
            }
        },

        /**
         * The function deletes the selected products from the products array and then calls the deleteProduct function in
         * the productStore
         */
        deleteP() {
            this.products = this.products.filter(product => !this.selectProduct.includes(product.id))

            this.productStore.deleteProduct(this.selectProduct);
            this.selectProduct = [];
        }
    },

    /* Calling the getAllProduct function in the productStore and then setting the products array to the products array in
    the productStore. */
    async mounted() {
        await this.productStore.getAllProduct();
        this.products = this.productStore.products
    },
});
