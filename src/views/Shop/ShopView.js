import axios from "axios";
import {mapStores} from "pinia";
import {useProductStore} from "@/store/product";
import ProductCard from "@/components/ProductCardComponents/ProductCardComponents";
import ShopSideBar from "@/components/ShopSideBar/ShopSideBar.vue";
import {useOrderStore} from "@/store/order";


export default ({
    name: 'ShopView',
    components: {
        ShopSideBar,
        ProductCard
    },

    data() {
        this.productStore = useProductStore();
        this.orderStore = useOrderStore();

        return {
            products: [],
            shopBar: [],
            pages: 0,
            currentPage: 1,
            total_price: 0,
            productlist: []

        }
    },
    computed: {
        ...mapStores(useProductStore),
        ...mapStores(useOrderStore)
    },

    methods: {
        changePage(page) {
            this.currentPage = page;
            this.products = this.productStore.products.slice((this.currentPage - 1) * 6, this.currentPage * 6);
        },

        addToCart(product) {
            this.shopBar.push(product);
            console.log(this.shopBar)
        },
        orderProduct() {
            var i = 0;
            for (i; i < this.shopBar.length; i++) {
                this.shopBar[i].price = this.total_price + this.shopBar[i].price;
            }
            console.log(this.total_price)

            this.shopBar.forEach(product => {
                let produ = {
                    product_id: product.id,
                    quantity: 1
                }


            this.productlist.push(produ)
            console.log(this.products)
        })
            const data = {
                id: 0,
                products: this.productlist,
                total_price: this.total_price,
                client_id: JSON.parse(localStorage.getItem('token')).id
            }

            this.orderStore.AddOrder(data)
            this.productStore.RemoveStock(this.productlist)
            this.shopBar.length = [];
        }
    },

    async mounted() {
        await this.productStore.getAllProduct();
        this.products = this.productStore.products.slice((this.currentPage - 1) * 6, this.currentPage * 6);

        this.pages = Math.ceil(this.productStore.products.length / 6);
    },
});
