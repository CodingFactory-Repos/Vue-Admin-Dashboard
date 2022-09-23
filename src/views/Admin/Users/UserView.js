import axios from "axios";
import {mapStores} from "pinia";
import {useProductStore} from "@/store/product";
import {useUserStore} from "@/store/user";

export default ({
  name: 'UsersProductView',

    data() {
        return {
            users: []
        }
    },
    computed :{
        ...mapStores(useUserStore),
    },

   async mounted() {
       await this.userStore.getAllUser();
       this.users = this.userStore.user
       console.log(this.users)
    }
});
