import { defineStore } from 'pinia'
import axios from 'axios'

let url = 'http://10.57.29.194:3000/products'
export const useProductStore = defineStore('my', {
    state: () => {
        return{
            products: []
        }

    },
    actions: {
        getAllProduct(){
            axios.get(this.url).then(res => this.products = res.data)
        }
    },
})