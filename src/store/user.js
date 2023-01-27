import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => {
        return{
            users: [],
            url : 'http://localhost:8888/index.php/users'
        }

    },
    actions: {
        async getAllUser() {
            const fetchData = async () => {
                const datas = await axios.get(this.url, {headers: {accept: 'application/json'}});
                this.users = await datas.data;

            };
            await fetchData();
        },
        deleteUser(id) {
            id.forEach(res => axios.delete(this.url + '/' + res, {headers: {accept: 'application/json'}}))
            id.forEach(res => console.log(this.url + '/' + res))
            //await axios.delete(this.url + id);
        },
        AddUser(data) {
            axios.post(this.url, data).then(res => console.log(res))
        },
        UpdateUser(data) {
            axios.put(this.url + '/' + data.id, data, {headers: {accept: 'application/json'}}).then(res => console.log(res))
        },

        async getUserById(id){
                const datas = await axios.get(this.url + '/' + id, {headers: {accept: 'application/json'}});
                console.log(datas)
                return datas.data;
        },

        async checkLogin(email, password) {
            await this.getAllUser();
            let index = this.users.findIndex(user => user.email === email && user.password === password);

            if (index !== -1) {
                window.location.href = '/';
                localStorage.setItem('token', JSON.stringify(this.users[index]));
            } else {
                alert('Wrong email or password')
            }
        }
    },
})
