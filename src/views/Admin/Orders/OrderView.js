import {mapStores} from "pinia";
import {useOrderStore} from "@/store/order.js";
import {useProductStore} from "@/store/product";
import {useUserStore} from "@/store/user";


export default ({
    name: 'OrdersView',
    components:{

    },

    data() {
        return {
            userStore: useUserStore(),
            orderStore : useOrderStore(),
            orders : [],
            selectOrders:[],
            user : [],
            listOrder: []
        }
    },

    /* Mapping the productStore to the component. */
    computed: {
        ...mapStores(useOrderStore),
        ...mapStores(useUserStore),
        ...mapStores(useProductStore)
    },

    methods: {
        /* A function that is called when the checkbox is clicked. It is used to add or remove the product id from the
        selectProduct array. */
        chooseDeleteProduct(id, event) {
            if(event.target.checked) {
                this.selectOrders.push(id);
            } else {
                this.selectOrders.splice(this.selectOrders.indexOf(id), 1);
            }
        },

        /**
         * The function deletes the selected products from the products array and then calls the deleteProduct function in
         * the productStore
         */
        deleteP() {
            this.orders = this.orders.filter(product => !this.selectOrders.includes(product.id))

            this.orderStore.deleteOrder(this.selectOrders);
            this.selectOrders = [];
        },

        ifNameOrder(){
            this.orders.sort((a, b) => (a.name > b.name) ? 1 : -1)
        },
        ifPriceOrder(){
            this.orders.sort((a, b) => (a.price > b.price) ? 1 : -1)
        },
        ifQuantityOrder(){
            this.orders.sort((a, b) => (a.stock > b.stock) ? 1 : -1)
        },
        ifActionOrder(){
            this.orders.sort((a, b) => (a.id > b.id) ? 1 : -1)
        },

        selectAllCheckBox(){
            let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

            if (this.selectOrders.length === this.orders.length){
                this.selectOrders = [];

                checkBoxes.forEach(checkBox => checkBox.checked = false);
            } else {
                this.selectOrders = [];
                this.orders.forEach(order => this.selectOrders.push(order.id));

                checkBoxes.forEach(checkBox => checkBox.checked = true);
            }
        },

    },

    /* Calling the getAllProduct function in the productStore and then setting the products array to the products array in
    the productStore. */
    async mounted() {
        await this.orderStore.getAllOrder();
        this.orders = this.orderStore.orders

        await this.userStore.getAllUser();
        this.user = this.userStore.users

        await this.productStore.getAllProduct();
        this.listOrder = this.productStore.products

        this.orders.forEach(order => {
            order.client = this.user.find(user => user.id === order.client_id)
            order.products.forEach(product => {
                product.product = this.listOrder.find(listOrder => listOrder.id === product.product_id)
            });
        });
    },
});
