<template>
  <div>
    <div class="product-title">{{ this.product.title }}</div>
    <div class="product-price">{{ this.product.price }}</div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      title: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      }
    }
  }
};
</script>

<style scoped>
.product-title {
  font-weight: bolder;
}
.product-price {
  font-weight: lighter;
}
</style>
