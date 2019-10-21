<template>
  <div>
    <nav class="navbar navbar-landing navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand mr-auto" href="#">
          <img class="logo" src="" /> E-Commerce</a
        >

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar1">
          <ul class="navbar-nav ml-auto">
            <li
              class="nav-item"
              v-if="
                !(this.$props.showUnverifiedButtons && this.$props.loggedIn)
              "
            >
              <router-link class="nav-link page-scroll" to="/"
                >Home</router-link
              >
            </li>

            <li
              class="nav-item"
              v-if="
                !(this.$props.showUnverifiedButtons && this.$props.loggedIn)
              "
            >
              <router-link class="nav-link page-scroll" to="/smartphones"
                >Smartphones</router-link
              >
            </li>
            <li class="nav-item" v-if="!loggedIn">
              <router-link class="nav-link" to="/Login"> Login </router-link>
            </li>
            <li class="nav-item" v-if="!loggedIn">
              <router-link class="nav-link" to="/signup"> Signup </router-link>
            </li>

            <li
              class="nav-item"
              v-if="
                !(this.$props.showUnverifiedButtons && this.$props.loggedIn) &&
                  this.$props.loggedIn
              "
            >
              <router-link class="nav-link" to="/profile">
                My Account
              </router-link>
            </li>
            <li
              id="cart"
              class="nav-item"
              v-if="
                !(this.$props.showUnverifiedButtons && this.$props.loggedIn)
              "
            >
              <router-link class="nav-link page-scroll" to="cart"
                >Cart
                <img
                  src="../assets/images/cart1.png"
                  width="30px"
                  height="30px"
                />
              </router-link>
            </li>

            <div class="user-email" v-if="this.$props.loggedIn">
              Logged in as {{ $store.state.user.email }}
            </div>
            <li id="logout" class="nav-item" v-if="this.$props.loggedIn">
              <router-link class="nav-link" to="/logout"> Logout </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- container //  -->
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    btnOne: {
      type: String,
      required: true
    },
    btnTwo: {
      type: String,
      required: true
    },
    showUnverifiedButtons: {
      type: Boolean,
      required: true
    },
    loggedIn: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    showUnverifiedButtons: function(newProp) {
      this.showUnverifiedButtons = newProp;
    },
    loggedIn: function(newProp) {
      this.loggedIn = newProp;
    }
  }
};
</script>

<style scoped>
#nav {
  padding: 15px;
  margin-left: 25px;
  margin-right: 25px;
  display: flex;
  justify-content: flex-end;
}
.home-cart-container {
  display: flex;
  align-self: flex-start;
}
.login-signup-container {
  display: flex;
  align-self: flex-end;
}
/* .btn {
  align-self: flex-end;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
} */
a {
  color: #2c3e50;
  font-weight: lighter;
  text-decoration: none;
}
a:hover {
  color: #42b983;
}
.router-link-exact-active {
  color: #42b983;
}
#cart-btn {
  font-weight: bolder;
}
.modal {
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: white;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgb(212, 212, 212);
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: rgb(255, 255, 255);
}
.ml-auto,
.mx-auto {
  /* margin-left: 20% !important;
  margin-right: 20%; */
}
.navbar-expand-lg .navbar-collapse {
  width: auto 100%;
}
.user-email {
  color: rgb(165, 141, 3);
  margin-top: 8px;
}

#cart {
  background-color: rgb(57, 116, 77);
  border-radius: 0.5rem;
  height: 40px;
}
</style>
