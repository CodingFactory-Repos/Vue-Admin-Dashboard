import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
    state: () => {
        return{
            products: [],
            url : 'http://192.168.64.15/index.php/products'
        }

    },
    actions: {
        async getAllProduct() {
            const fetchData = async () => {
                const datas = await axios.get(this.url, {headers: {accept: 'application/json'}});
                this.products = await datas.data;

            };
            await fetchData();
        },
        deleteProduct(id) {
            id.forEach(res => axios.delete(this.url + '/' + res, {headers: {accept: 'application/json'}}))
            id.forEach(res => console.log(this.url + '/' + res))
            //await axios.delete(this.url + id);
        },
        AddProduct(data) {
            axios.post(this.url, data).then(res => console.log(res))
        },
        UpdateProduct(data) {
            axios.put(this.url + '/' + data.id, data, {headers: {accept: 'application/json'}}).then(res => console.log(res))
        },

        RemoveStock(productList) {
            productList.forEach(product => {
                this.products.find(res => res.id === product.product_id).stock -= product.quantity;

                axios.put(this.url + '/' + product.product_id, this.products.find(res => res.id === product.product_id), {headers: {accept: 'application/json'}}).then(res => console.log(res))
            })
        }
    },
})
