import Vue from "vue";
import Router from "vue-router";
import Cart from "./views/Cart.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/cart",
      name: "cart",
      component: Cart
    }
  ]
});
