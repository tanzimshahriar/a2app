import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      token: localStorage.getItem("access_token") || null
    },
    showUnverified: false
  },
  getters: {
    loggedIn(state) {
      return state.user.token == null ? false : true;
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.user.token = token;
    },
    destroyToken(state) {
      state.user.token = null;
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            //for dev env:
            //"http://localhost:8080/login",
            "https://assignment-two-server.appspot.com/login",
            credentials
          )
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
    }
  }
});
