import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('order', {
    state: () => {
        return{
            orders: [],
            url : 'http://localhost:8888/index.php/orders'
        }

    },
    actions: {
        async getAllOrder() {
            const fetchData = async () => {
                const datas = await axios.get(this.url, {headers: {accept: 'application/json'}});
                this.orders = await datas.data;

            };
            await fetchData();
        },
        deleteOrder(id) {
            id.forEach(res => axios.delete(this.url + '/' + res, {headers: {accept: 'application/json'}}))
            id.forEach(res => console.log(this.url + '/' + res))

        },
        AddOrder(product) {
            axios.post(this.url, product).then(res => console.log(res))
        }
    },
})
