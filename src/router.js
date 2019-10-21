import Vue from "vue";
import Router from "vue-router";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Smartphones from "./components/Smartphones";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
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
      path: "/smartphones",
      name: "smartphones",
      component: Smartphones
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresLoggedOut: false
      }
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        requiresAccountVerifiedWhenLoggedIn: true
      }
    }
  ]
});

export default router;
