import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      token: localStorage.getItem("access_token") || null,
      email: ""
    },
    showUnverified: false,
    cart: []
  },
  getters: {
    loggedIn(state) {
      return state.user.token == null ? false : true;
    },
    getCart(state) {
      return state.cart;
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.user.token = token;
    },
    destroyToken(state) {
      state.user.token = null;
    },
    setUserEmail(state, email) {
      state.user.email = email;
    },
    addItemToCart(state, item) {
      var itemToBeAdded = {};
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].name == item.name) {
          state.cart[i].number = state.cart[i].number + 1;
          return;
        }
      }
      itemToBeAdded = {
        name: item.name,
        price: item.price,
        number: 1
      };
      state.cart.push(itemToBeAdded);
    },
    removeItem(state, item) {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].name == item.name) {
          state.cart.splice(i, 1);
          return;
        }
      }
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        const url =
          process.env.NODE_ENV == "production"
            ? "https://assignment-two-server.appspot.com/login"
            : "http://localhost:8080/login";
        axios
          .post(url, credentials)
          .then(res => {
            const token = res.data.token;
            localStorage.setItem("access_token", token);
            context.commit("retrieveToken", token);
            resolve(res);
          })
          .catch(err => {
            //console.log(err.response);
            reject(err);
          });
      });
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem("access_token");
        context.commit("destroyToken");
      }
    },
    decreaseNumber(context, item) {
      for (var i = 0; i < context.state.cart.length; i++) {
        if (context.state.cart[i].name == item.name) {
          if (context.state.cart[i].number > 1) {
            context.state.cart[i].number = context.state.cart[i].number - 1;
            return;
          } else if (context.state.cart[i].number == 1) {
            context.commit("removeItem", item);
            return;
          }
        }
      }
    },
    clearCart(context) {
      context.state.cart = [];
    }
  }
});
