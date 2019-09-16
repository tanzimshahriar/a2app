import Vue from "vue";
import Router from "vue-router";
import Cart from "./components/Cart.vue";
import ProductsContainer from "./components/ProductsContainer.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/",
      name: "home",
      component: ProductsContainer
    }
  ]
});
