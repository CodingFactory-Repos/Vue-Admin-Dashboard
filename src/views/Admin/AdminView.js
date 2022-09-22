import AdminSideBar from "@/components/AdminSideBar/AdminSideBarComponents";

export default ({
  name: 'AdminView',

    components: {
        AdminSideBar,

    },

    data() {
        // Redirect to /admin/products route
        this.$router.push('/admin/products');
    },
});
