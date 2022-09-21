import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
    state: () => {
        return{
            products: []
        }

    },
    actions: {
        getAllProduct(){
            axios.get('http://10.57.29.194:3000/products').then(res => this.products = res.data)
        }
    },
})