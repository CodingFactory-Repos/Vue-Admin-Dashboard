import { defineStore } from 'pinia'
import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => {
        return{
            user: [],
            url : 'https://opaque-five-trader.glitch.me/users'
        }

    },
    actions:{
        async getAllUser() {
            const fetchData = async () => {
                const datas = await axios.get(this.url);
                this.user = await datas.data;

            };
            await fetchData();
        },
        deleteUser(id) {
            id.forEach(res => axios.delete(this.url + '/' + res))
            id.forEach(res => console.log(this.url + '/' + res))
            //await axios.delete(this.url + id);
        },
        registerA(data) {
            console.log(data)
            axios.post(this.url, data).then(res => console.log(res))
        },
        UpdateProfil(data) {
            axios.put(this.url + '/' + data.id, data).then(res => console.log(res))
        }
    }
})