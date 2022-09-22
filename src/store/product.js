import { defineStore } from 'pinia'
import axios from 'axios'
import {enable} from "core-js/internals/internal-metadata";
import {Observable, Subject} from "rxjs";

export const useProductStore = defineStore('product', {
    state: () => {
        return{
            products: [],
            url : 'http://localhost:3000/products',
            loading :false
        }

    },
    actions: {
     async getAllProduct()
     {
         this.loading = true
         const fetchData = async () => {
             const datas = await axios.get(this.url);
             this.products = await datas.data;
             this.loading = false

         };
         await fetchData();
         console.log(this.products)

        },

    },

})