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
    snackbar: {
      visible: false,
      text: null,
      timeout: 5000,
      multiline: false
    },
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
    saveEmail(state, email) {
      state.user.email = email;
    },
    destroyToken(state) {
      state.user.token = null;
    },
    deleteEmail(state) {
      state.user.email = ""
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
        number: 1,
        imagesrc: item.imagesrc
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
    },
    showSnackbar(state, payload) {
      state.snackbar.text = payload.text
      state.snackbar.multiline = (payload.text.length > 50) ? true : false
      if (payload.multiline) {
        state.snackbar.multiline = payload.multiline
      }
      if (payload.timeout) {
        state.snackbar.timeout = payload.timeout
      }

      state.snackbar.visible = true
    },
    closeSnackbar(state) {
      state.snackbar.visible = false
      state.snackbar.multiline = false
      state.snackbar.timeout = 5000
      state.snackbar.text = null
    },
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
            const email = res.data.email
            localStorage.setItem("access_token", token);
            context.commit("retrieveToken", token);
            context.commit("saveEmail", email);

            let payload = {
              text : res.data.msg, 
              timeout: 3000
            }

          context.commit("showSnackbar", payload);

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
        context.commit("deleteEmail");
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
