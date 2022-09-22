import axios from "axios";

export default ({
  name: 'UsersProductView',

    data() {
        return {
            users: []
        }
    },

    mounted() {
      axios.get('http://10.57.29.194:3000/users')
        .then(response => {
            this.users = response.data
        })
    }
});
