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

        return {
            orderStore : useOrderStore(),
            products: [],
            shopBar: [],
            pages: 0,
            currentPage: 1,

            totalprice:0,
            productlist : []

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
        orderProduct(){

            this.orderStore.AddOrder(this.shopBar)
            var i =0;
            for (i;i<this.shopbar.length;i++){
                this.shopBar[i].price = this.totalprice + this.shopBar[i].price;
            }




            let productlist;
        this.shopBar.forEach(product => {
            let produ = {
                product_id : product.id,
                quantity : 1
            }
            this.productlist.push(produ)
        })



            const data = {
                id : 0,
                products: [productlist],
                total_price : this.total_price,
                client_id: 1
            }
            this.orderStore.AddOrder(data)

        }
    },

    async mounted() {
        await this.productStore.getAllProduct();
        this.products = this.productStore.products.slice((this.currentPage - 1) * 6, this.currentPage * 6);

        this.pages = Math.ceil(this.productStore.products.length / 6);
    },
});
