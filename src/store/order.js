import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('order', {
    state: () => {
        return{
            orders: [],
            url : 'https://opaque-five-trader.glitch.me/orders'
        }

    },
    actions: {
        async getAllOrder() {
            const fetchData = async () => {
                const datas = await axios.get(this.url);
                this.orders = await datas.data;

            };
            await fetchData();
        },
        deleteOrder(id) {
            id.forEach(res => axios.delete(this.url + '/' + res))
            id.forEach(res => console.log(this.url + '/' + res))

        },
        AddOrder(data) {
            console.log(data)
        }
    },
})
