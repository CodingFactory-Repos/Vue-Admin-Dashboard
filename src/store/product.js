import { defineStore } from 'pinia'
import axios from 'axios'
import {enable} from "core-js/internals/internal-metadata";
import {Observable, Subject} from "rxjs";
const loading = new Subject()
export const useProductStore = defineStore('product', {
    state: () => {
        return{
            products: [],
            url : 'http://localhost:3000/products',
            getLoading : new Subject().asObservable()
        }

    },
    actions: {
     async getAllProduct()
     {loading.next(true)
         console.log("fef")
         const fetchData = async () => {
             const { data: attributes } = await axios.get(this.url);
             this.products = attributes;
             loading.next(false)
         };

          fetchData();

        },

    },

})