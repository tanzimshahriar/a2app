import Vue from "vue";
import Router from "vue-router";
import Cart from "./components/Cart.vue";
import ProductsContainer from "./components/ProductsContainer.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Logout from "./components/Logout.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      meta: {
        requiresAccountVerified: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresLoggedOut: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
      meta: {
        requiresLoggedOut: true
      }
    },
    {
      path: "/",
      name: "home",
      component: ProductsContainer,
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresLoggedOut: false
      }
    }
  ]
});

export default router;
