<template>
  <div>
    <div class="pd-container">
      <img alt="Product Image not available" :src="image" />
      <h5 class="card-title">{{ name }}</h5>
      <span class="price-new">${{ price }}</span>
      <p>{{ description }}</p>
      <div id="countItem" v-if="product.quantity < 10 && product.quantity != 0">
        <h5>Item remaining {{ product.quantity }}</h5>
      </div>
    </div>
    <div id="soldOut" v-if="outOfQty">
      <h5>Sorry, Product Sold out</h5>
    </div>
    <button
      v-if="!outOfQty"
      id="pd-Btn"
      type="button"
      class="btn btn-secondary btn-sm btn-block"
      v-on:click="addCartButtonClicked"
    >
      Add to Cart
      <img src="../assets/images/cart1.png" width="35px" height="35px" />
    </button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      imagesrc: {
        type: String,
        required: true
      }
    }
  },
  data: function() {
    return {
      name: "",
      description: "",
      quantity: 0,
      price: 0,
      imagesrc: ""
    };
  },
  mounted() {
    this.name = this.$props.product.name;
    this.description = this.$props.product.description;
    this.quantity = this.$props.product.quantity;
    this.price = this.$props.product.price;
    this.imagesrc = this.$props.product.imagesrc;
  },
  watch: {
    product: function(newProp) {
      this.name = newProp.product.name;
      this.description = newProp.product.description;
      this.quantity = newProp.product.quantity;
      this.price = newProp.product.price;
      this.imagesrc = newProp.product.imagesrc;
    }
  },
  methods: {
    addCartButtonClicked() {
      let item = {
        name: this.name,
        price: this.price,
        imagesrc: this.imagesrc
      };
      if (this.quantity > 0) {
        this.$store.commit("addItemToCart", item);
      }
    }
  },
  computed: {
    outOfQty() {
      return this.product.quantity > 0 ? false : true;
    },
    image() {
      let string = this.product.imagesrc.split("assets")[1];
      return require("../assets" + string);
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
.pd-container {
  min-height: 380px;
}
#pd-Btn {
  background-color: rgb(57, 116, 77);
}
#soldOut {
  color: red;
}
#countItem {
  color: rgb(252, 175, 10);
}
</style>
