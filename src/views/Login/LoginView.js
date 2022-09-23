import {mapStores} from "pinia";
import {useUserStore} from "@/store/user";

export default {
    name: 'LoginView',

    data() {
        return {
            email: '',
            password: '',
        };
    },

     /* Mapping the productStore to the component. */
    computed: {
        ...mapStores(useUserStore),
    },

    methods: {
        async login() {
            this.email = document.getElementById('email').value;
            this.password = document.getElementById('password').value;

            await this.userStore.checkLogin(this.email, this.password);
        }
    }
}
