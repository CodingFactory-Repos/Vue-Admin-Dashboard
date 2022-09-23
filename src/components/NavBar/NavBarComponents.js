export default {
    name: 'NavBar',

    data() {
        return {
            navItems: [
                { name: 'Home', link: '/' },
                { name: 'Admin', link: '/admin' },
                { name: 'Shop', link: '/shop' },
                { name: 'Login', link: '/login' },
            ],
        };
    },

    mounted() {
        // Check if user is logged in
        if (localStorage.getItem('token')) {
            // Find the item in the array
            let index = this.navItems.findIndex(item => item.name === 'Login');

            // Replace the Logout item
            this.navItems.splice(index, 1, { name: 'Logout', link: '/logout' });
        }
    }
}
