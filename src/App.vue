<template>
  <div class="flex min-h-screen flex-col justify-between">
    <NavBar />
    <div class="flex-grow">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBarComponents.vue';
import Footer from './components/Footer/FooterComponents.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
