import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
    state: () => {
        return{
            products: []
        }

    },
    actions: {
        async getAllProduct() {
            const fetchData = async () => {
                const datas = await axios.get('http://10.57.29.194:3000/products');
                this.products = await datas.data;

            };
            await fetchData();
        }
    },
})
