import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      token: localStorage.getItem("access_token") || null,
      accountVerified: null
    }
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
    retrieveUserAccountVerificationStatus(state, result) {
      if (result == "Unverified") {
        console.log("epicly unverified");
        state.user.accountVerified = false;
      } else {
        state.user.accountVerified = true;
      }
    },
    destroyTokenAndAccountVerified(state) {
      state.user.token = null;
      state.user.accountVerified = null;
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            //for dev env:
            "http://localhost:8080/login",
            //"https://assignment-two-server.appspot.com/login",
            credentials
          )
          .then(res => {
            const token = res.data.token;
            const result = res.data.result;
            localStorage.setItem("access_token", token);
            context.commit("retrieveToken", token);
            context.commit("retrieveUserAccountVerificationStatus", result);
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
        context.commit("destroyTokenAndAccountVerified");
      }
    }
  }
});
