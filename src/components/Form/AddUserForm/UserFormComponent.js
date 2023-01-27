export default {
    name: 'UserFormComponent',

    props: ['user'],

    data() {
        return {
            editing: false,
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            role: 0
        };
    },

    updated() {
        if (!this.editing && this.user.id !== 0) {
            this.initUser(this.user);

            this.editing = true;
        } else if (!this.editing && this.user.id === 0) {
           this.initUser(this.user);

            this.editing = true;
        } else if (this.user.id !== this.id) {
            this.initUser(this.user);
        }
    },

    methods: {
        addUser() {
            let data = {
                // id: this.id,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                role: this.role
            }

            this.editing = false;
            this.$emit('add', data)
        },

        initUser(user) {
            this.id = user.id;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.email = user.email;
            this.role = user.role;
        }
    }
}
