import {mapStores} from "pinia";
import {useProductStore} from "@/store/product";
import ProductFormComponent from "@/components/Form/AddProductForm/ProductFormComponent.vue";

export default ({
    name: 'ProductView',
    components:{
        ProductFormComponent
    },

    data() {
        return {
            products: [],
            selectProduct: [],
            showForm: false,
            isNameSelected: true,
            isPriceSelected: false,
            isQuantitySelected: false,
            isActionSelected:false,


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
        },
        ifNameOrder(){
            this.isPriceSelected = false;
            this.isNameSelected = true;
            this.isQuantitySelected = false;
            this.isActionSelected = false;
        },
        ifPriceOrder(){
            this.isPriceSelected = true;
            this.isNameSelected = false;
            this.isQuantitySelected = false;
            this.isActionSelected = false;



        },
        ifQuantityOrder(){
            this.isPriceSelected = false;
            this.isNameSelected = false;
            this.isQuantitySelected = true;
            this.isActionSelected = false;
        },
        ifActionOrder(){
            this.isPriceSelected = false;
            this.isNameSelected = false;
            this.isQuantitySelected = false;
            this.isActionSelected = true;
        },
        addProduct(data){
            this.productStore.AddProduct(data)
        }

    },

    /* Calling the getAllProduct function in the productStore and then setting the products array to the products array in
    the productStore. */
    async mounted() {
        await this.productStore.getAllProduct();
        this.products = this.productStore.products
    },
});
