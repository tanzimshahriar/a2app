<template>
  <div id="app">
    <NavBar v-bind:btnOne="btnOne" v-bind:btnTwo="btnTwo" />
    <ProductsContainer v-bind:products="products" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import ProductsContainer from "./components/ProductsContainer";
export default {
  name: "app",
  components: {
    ProductsContainer,
    NavBar
  },
  data() {
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
      ],
      btnOne: "Login",
      btnTwo: "Signup"
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
