<template>
  <div>
    <div v-if="this.$props.showUnverified && this.$props.loggedIn">
      <CustomMessage
        title="Verify Your Email to continue"
        message="A confirmation code has been sent to your email. Please enter the confirmation code."
      />
      <form>
        <input type="text" placeholder="Verification Code" />
        <input value="Submit" type="submit" />
      </form>
    </div>
    <div v-else>
      <h1>Products</h1>
      <div class="container">
        <div class="product-box" v-bind:key="product.id" v-for="product in products">
          <Product v-bind:product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import CustomMessage from "../views/customMessage";
import axios from "axios";
export default {
  props: {
    showUnverified: {
      type: Boolean,
      required: true
    },
    loggedIn: {
      type: Boolean, 
      required: true
    }
  },
  watch: {
    showUnverified: function(newProp) {
      this.showUnverified = newProp;
    },
    loggedIn: function(newProp) {
      this.loggedIn = newProp;
    }
  },
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
    Product,
    CustomMessage
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
