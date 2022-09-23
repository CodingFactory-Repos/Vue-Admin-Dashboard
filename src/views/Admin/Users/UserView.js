import {mapStores} from "pinia";
import {useUserStore} from "@/store/user";
import UserFormComponent from "@/components/Form/AddUserForm/UserFormComponent.vue";

export default ({
    name: 'UserView',
    components:{
        UserFormComponent
    },

    data() {
        this.userStore = useUserStore();

        return {
            users: [],
            selectUser: [],
            showForm: false,
            ifOrderOpen: false,
            modifiedUser: {'id': 0, 'firstName': '', 'lastName': '', 'email': '', 'password': '', 'role': 'user'}
        }
    },

    /* Mapping the userStore to the component. */
    computed: {
        ...mapStores(useUserStore),
    },

    methods: {
        /* A function that is called when the checkbox is clicked. It is used to add or remove the user id from the
        selectUser array. */
        chooseDeleteUser(id, event) {
            if(event.target.checked) {
                this.selectUser.push(id);
            } else {
                this.selectUser.splice(this.selectUser.indexOf(id), 1);
            }
        },

        /**
         * The function deletes the selected users from the users array and then calls the deleteUser function in
         * the userStore
         */
        deleteP() {
            this.users = this.users.filter(user => !this.selectUser.includes(user.id))

            this.userStore.deleteUser(this.selectUser);
            this.selectUser = [];
        },

        addP() {
            this.showForm = !(this.modifiedUser.length === 0 && this.showForm);
            this.modifiedUser = {'id': 0, 'name': '', 'description': '', 'price': 0, 'stock': 0, 'image': ''};
        },

        ifNameOrder(){
            this.users.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
        },
        ifRoleOrder(){
            this.users.sort((a, b) => (a.role > b.role) ? 1 : -1)
        },
        ifActionOrder(){
            this.users.sort((a, b) => (a.id > b.id) ? 1 : -1)
        },

        selectAllCheckBox(){
            let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

            if (this.selectUser.length === this.users.length){
                this.selectUser = [];

                checkBoxes.forEach(checkBox => checkBox.checked = false);
            } else {
                this.selectUser = [];
                this.users.forEach(user => this.selectUser.push(user.id));

                checkBoxes.forEach(checkBox => checkBox.checked = true);
            }
        },

        addUser(data) {
            // Verify if the user is already in the users array
            let index = this.users.findIndex(user => user.id === data.id);

            if (index === -1) {
                this.userStore.AddUser(data)
                this.users.push(data)
            } else {
                this.userStore.UpdateUser(data)
                this.users[index] = data;
            }

            this.showForm = false;
        },

        modifyUser(data){
            this.modifiedUser = data;
            this.showForm = true;
        }

    },

    /* Calling the getAllUser function in the userStore and then setting the users array to the users array in
    the userStore. */
    async mounted() {
        await this.userStore.getAllUser();
        this.users = this.userStore.users

        console.log(this.users)
    },
});
