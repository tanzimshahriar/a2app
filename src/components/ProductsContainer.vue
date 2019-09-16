<template>
  <div>
    <h1>Products</h1>
    <div class="container">
      <div
        class="product-box"
        v-bind:key="product.id"
        v-for="product in products"
      >
        <Product v-bind:product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "ProductsContainer",
  components: {
    Product
  },
  props: ["products"]
};
</script>

<style scoped>
.container {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.product-box {
  display: block;
  padding: 10px;
}
</style>
