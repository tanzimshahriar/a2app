<template>
  <div>
    <div id="nav">
      <div class="home-cart-container">
        <div class="btn">
          <router-link to="/">Home</router-link>
        </div>
        <div class="btn">
          <router-link id="cart-btn" to="/cart">Cart</router-link>
        </div>
      </div>
      <div class="login-signup-container">
        <div class="btn" v-if="!loggedIn">
          <router-link to="/login">Login</router-link>
        </div>
        <div class="btn" v-if="!loggedIn">
          <router-link to="/signup">Signup</router-link>
        </div>
        <div class="btn" v-if="loggedIn">
          <router-link to="/logout">Logout</router-link>
        </div>
      </div>
    </div>
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
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
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
.btn {
  align-self: flex-end;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
}
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
</style>
