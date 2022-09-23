<template src="./ShopSideBar.html"></template>
<script>
export default {
  name: 'ShopSideBar',
  props: ['shopBar'],

  data() {
    return {
      product: this.shopBar
    }
  },
}
</script>


