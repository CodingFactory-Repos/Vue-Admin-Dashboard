import axios from "axios";
import SwitchComponents from "@/components/Switcher/SwitchComponents.vue"


export default ({
  name: 'ShopView',
    data() {
        return {
            products: []
        }
    },
    components: {
        SwitchComponents
    },

    mounted() {
        axios.get('http://10.57.29.194:3000/products')
            .then(response => {
                this.products = response.data
            });
    }

});
