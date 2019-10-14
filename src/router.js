import Vue from "vue";
import Router from "vue-router";
import Cart from "./components/Cart.vue";
import Home from "./components/Home.vue";
// import ProductsContainer from "./components/ProductsContainer.vue";
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
        requiresAccountVerifiedWhenLoggedIn: true
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
      component: Home
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
