import axios from "axios";
import {mapStores} from "pinia";
import {useProductStore} from "@/store/product";

export default ({
  name: 'AdminView',
    data() {
        return {
            products: [],
            selectProduct: []
        }
    },
    computed: {
        ...mapStores(useProductStore),

    },
    methods:{
        chooseDeleteProduct (id, event){
            console.log(this.products)
            if(event.target.checked === true){
                this.selectProduct.push(id)
            }else{
                const index = this.selectProduct.indexOf(id);
                if (index > -1) { // only splice array when item is found
                    this.selectProduct.splice(index, 1); // 2nd parameter means remove one item only
                }
            }
            console.log(this.selectProduct)
        },
        deleteP(){
            this.selectProduct.forEach((res) => {
                const index = this.products.indexOf(res);

                if (index > -1) { // only splice array when item is found
                    this.products.splice(index, 1); // 2nd parameter means remove one item only
                }
            })

            /*this.productStore.deleteProduct(this.selectProduct);*/
        }
    },
    async mounted() {

      await this.productStore.getAllProduct();
        this.products = this.productStore.products


    },
});
