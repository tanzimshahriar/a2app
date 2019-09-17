import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn()) {
      next({
        name: "/login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.loggedOut)) {
    // this route requires loggedOut, check if logged out
    // if not, redirect to home page.
    if (!store.getters.loggedIn()) {
      next({
        name: "/home"
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
