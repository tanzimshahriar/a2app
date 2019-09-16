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
  data: function() {
    return {
      products: [
        {
          id: 1,
          title: "Product One",
          price: "25$"
        },
        {
          id: 2,
          title: "Product Two",
          price: "15$"
        },
        {
          id: 3,
          title: "Three",
          price: "20$"
        }
      ]
    };
  },
  components: {
    Product
  }
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
