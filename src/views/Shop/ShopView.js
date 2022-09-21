import ProductComponents from './../../components/Product/ProductComponents.vue';
import Switcher from './../../components/Switcher/SwitchComponents.vue';

export default ({
    components: {
        ProductComponents,
        Switcher,
    },
  name: 'ShopView',
    data() {
        return {
            msg: 'and welcome to Thomas the Train'
        }
    },

});
