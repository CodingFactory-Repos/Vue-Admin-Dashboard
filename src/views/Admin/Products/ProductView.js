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
            ifOrderOpen: false,
            modifiedProduct: {'id': 0, 'name': '', 'description': '', 'price': 0, 'stock': 0, 'image': ''}
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

        addP() {
            this.showForm = !(this.modifiedProduct.length === 0 && this.showForm);
            this.modifiedProduct = {'id': 0, 'name': '', 'description': '', 'price': 0, 'stock': 0, 'image': ''};
        },

        ifNameOrder(){
            this.products.sort((a, b) => (a.name > b.name) ? 1 : -1)
        },
        ifPriceOrder(){
            this.products.sort((a, b) => (a.price > b.price) ? 1 : -1)
        },
        ifQuantityOrder(){
            this.products.sort((a, b) => (a.stock > b.stock) ? 1 : -1)
        },
        ifActionOrder(){
            this.products.sort((a, b) => (a.id > b.id) ? 1 : -1)
        },

        selectAllCheckBox(){
            let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

            if (this.selectProduct.length === this.products.length){
                this.selectProduct = [];

                checkBoxes.forEach(checkBox => checkBox.checked = false);
            } else {
                this.selectProduct = [];
                this.products.forEach(product => this.selectProduct.push(product.id));

                checkBoxes.forEach(checkBox => checkBox.checked = true);
            }
        },

        addProduct(data) {
            // Verify if the product is already in the products array
            let index = this.products.findIndex(product => product.id === data.id);

            if (index === -1) {
                this.productStore.AddProduct(data)
                this.products.push(data)
            } else {
                this.productStore.UpdateProduct(data)
                this.products[index] = data;
            }

            this.showForm = false;
        },

        modifyProduct(data){
            this.modifiedProduct = data;
            this.showForm = true;
        }

    },

    /* Calling the getAllProduct function in the productStore and then setting the products array to the products array in
    the productStore. */
    async mounted() {
        await this.productStore.getAllProduct();
        this.products = this.productStore.products
    },
});
