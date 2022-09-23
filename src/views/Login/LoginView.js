
import {mapStores} from "pinia";
import {useUserStore} from "@/store/user";

export default ({
    name: 'LoginView',

    components: {

    },

    data() {
        this.userStore = useUserStore();

        return {
            firstName : '',
            lastName: '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    },
    computed: {
        ...mapStores(useUserStore)
    },

    methods: {
            registerA(e){
                e.preventDefault()
                if(this.password === this.confirmPassword){
                    const data = {
                        "id": 0,
                        "firstName":    this.firstName,
                        "lastName": this.lastName,
                        "email": this.email,
                        "password": this.password,
                        "role": "user"
                    }
                    this.userStore.registerA(data)
                }
            }
    },
});