import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
    state: () => {
        return{
            products: [],
            url : 'https://opaque-five-trader.glitch.me/products'
        }

    },
    actions: {
        async getAllProduct() {
            const fetchData = async () => {
                const datas = await axios.get(this.url);
                this.products = await datas.data;

            };
            await fetchData();
            console.log(this.products)
        },
        deleteProduct(id){
            id.forEach(res => axios.delete(this.url + '/'+ res))
            id.forEach(res => console.log(this.url + '/' + res))
            //await axios.delete(this.url + id);
        },
        AddProduct(data){
                console.log(data)
                axios.post(this.url, data).then(res => console.log(res))

            console.log(data)
        }
    },
})
