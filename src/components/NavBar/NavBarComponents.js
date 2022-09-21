export default {
    name: 'NavBar',

    data() {
        return {
            navItems: [
                { name: 'Home', link: '/' },
                { name: 'Admin', link: '/admin' },
                { name: 'Shop', link: '/shop' },
            ],
        };
    }
}
