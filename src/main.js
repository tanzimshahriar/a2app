import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  //console.log(`navigating to ${to.name} from ${from.name}`);
  if (to.matched.some(route => route.meta.requiresLoggedOut)) {
    if (!store.getters.loggedIn) {
      next();
    } else {
      next({
        name: "home"
      });
    }
  } else if (store.getters.loggedIn && to.matched.some(route => route.meta.requiresAccountVerified)){
    if (store.state.user.accountVerified){
      next();
    }
    else {
      next({
        name: "home"
      });
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

if (process.env.MIX_APP_ENV === "production") {
  Vue.config.devtools = false;
  Vue.config.debug = false;
  Vue.config.silent = true;
}
