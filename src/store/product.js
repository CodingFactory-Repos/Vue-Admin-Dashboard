import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
    state: () => {
        return{
            products: [],
            url : 'http://10.57.29.194:3000/products'
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
            axios.post(this.url,data).then()
        }
    },
})
