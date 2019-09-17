import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null
  },
  getters: {
    loggedIn(state) {
      return state.token == null ? false : true;
    }
  },
  mutations: {
    setGlobalError(state, error) {
      state.globalError = error;
    },
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            //for dev env:
            "http://localhost:8080/login",
            //"https://assignment-two-server.appspot.com/register",
            credentials
          )
          .then(res => {
            const token = res.data.token;
            localStorage.setItem("access_token", token);
            context.commit("retrieveToken", token);
            resolve(res);
          })
          .catch(err => {
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
