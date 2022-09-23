<template src="./ProductCardComponents.html"></template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],

  data() {
    return {
    }
  },

  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product)
      
    }
  }
}
</script>
