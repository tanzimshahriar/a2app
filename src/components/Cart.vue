<template>
  <div class="cart">
    <h1><br />Cart</h1>
    <div class="container">
      <br />
      <hr />

      <div class="card">
        <table class="table table-hover shopping-cart-wrap">
          <thead class="text-muted">
            <tr v-if="!cartIsEmpty">
              <th scope="col">Product</th>
              <th scope="col" width="120">Quantity</th>
              <th scope="col" width="120">Price</th>
              <th scope="col" width="200" class="text-right"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="each-cart-product"
              v-for="product in cartProducts"
              :key="product.id"
            >
              <td>
                <figure class="media">
                  <div class="img-wrap">
                    <img
                      :src="image(product.imagesrc)"
                      class="img-thumbnail img-sm"
                    />
                  </div>
                  <figcaption class="media-body">
                    <h6 class="title text-truncate">{{ product.name }}</h6>
                    <dl class="param param-inline small"></dl>
                  </figcaption>
                </figure>
              </td>
              <td class="quantity">
                <div id="number">{{ product.number }}</div>
                <div id="quantity-buttons">
                  <button v-on:click="addQuantity(product)">+</button>
                  <button v-on:click="decreaseQuantity(product)">-</button>
                </div>
              </td>
              <td>
                <div class="price-wrap">
                  <var class="price">${{ product.price }}</var>
                </div>
                <!-- price-wrap .// -->
              </td>
              <td class="text-right">
                <p
                  class="btn btn-outline-danger btn-round"
                  v-on:click="removeItem(product)"
                >
                  Remove
                </p>
              </td>
            </tr>
            <tr v-if="!cartIsEmpty">
              <th class="padFix" scope="col"></th>
              <th class="padFix" scope="col">Total:</th>
              <th class="padFix" scope="col" width="120">
                ${{ getTotalPrice }}
              </th>
              <th class="text-right" scope="col" width="120">
                <p
                  v-on:click="clearCart()"
                  class="btn btn-outline-danger btn-round"
                >
                  Clear Cart
                </p>
              </th>
            </tr>
            <br />
            <p v-if="cartIsEmpty">
              Cart is empty
            </p>
          </tbody>
        </table>
      </div>
      <br />
      <p
        v-if="!cartIsEmpty"
        id="checkout"
        class="btn btn-outline-success btn-round "
      >
        Checkout
      </p>
    </div>

    <br />
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    addQuantity(item) {
      this.$store.commit("addItemToCart", item);
    },
    decreaseQuantity(item) {
      this.$store.dispatch("decreaseNumber", item);
    },
    removeItem(item) {
      this.$store.commit("removeItem", item);
    },
    clearCart() {
      this.$store.dispatch("clearCart");
    },
    image(src) {
      let string = src.split("assets")[1];
      return require("../assets" + string);
    }
  },
  computed: {
    cartIsEmpty() {
      return this.$store.getters.getCart.length > 0 ? false : true;
    },
    getTotalPrice() {
      let totalPrice = 0;
      for (var i = 0; i < this.$store.getters.getCart.length; i++) {
        totalPrice =
          totalPrice +
          this.$store.getters.getCart[i].price *
            this.$store.getters.getCart[i].number;
      }
      return totalPrice;
    },
    cartProducts() {
      return this.$store.getters.getCart;
    }
  }
};
</script>

<style scoped>
#carItem-container {
  background-color: green;
}
.param {
  margin-bottom: 7px;
  line-height: 1.4;
}
.param-inline dt {
  display: inline-block;
}
.param dt {
  margin: 0;
  margin-right: 7px;
  font-weight: 600;
}
.param-inline dd {
  vertical-align: baseline;
  display: inline-block;
}

.param dd {
  margin: 0;
  vertical-align: baseline;
}

.shopping-cart-wrap .price {
  color: #007bff;
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
  display: block;
  padding-top: 8px;
}
var {
  font-style: normal;
}

.media img {
  margin-right: 1rem;
}
.img-sm {
  width: 90px;
  max-height: 75px;
  object-fit: cover;
}
.quantity {
  display: flex;
  justify-content: center;
  justify-items: space-around;
}
#quantity-buttons {
  display: flex;
  flex-direction: column;
  place-items: stretch;
}
#number {
  text-align: center;
  margin: 5px;
  /* border-radius: 0.5rem;
  border: 1px solid rgb(228, 228, 228); */
}
.btn {
  width: 130px;
  height: 40px;
}
.input[type="number"] {
  height: 200px;
}

.input[type="number"]:hover::-webkit-inner-spin-button {
  width: 14px;
  height: 30px;
}
.text-truncate {
  padding-top: 10px;
}
.padFix {
  padding-top: 20px;
}
#alignRight {
  padding-left: 10px;
}
#checkout {
  width: 300px;
  background-color: rgb(57, 116, 77);
  color: white;
}
#checkout:hover {
  background-color: white;
  color: rgb(57, 116, 77);
  cursor: pointer;
}
</style>
