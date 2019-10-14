<template>
  <div id="app">
    <NavBar
      v-bind:btnOne="btnOne"
      v-bind:btnTwo="btnTwo"
      v-bind:showUnverifiedButtons="showUnverifiedToChild"
      v-bind:loggedIn="userLoggedIn"
    />
    <NavBar v-bind:btnOne="btnOne" v-bind:btnTwo="btnTwo" />

  </div>
</template>

<script>
import axios from "axios";
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  },
  data() {
    return {
      btnOne: "Login",
      btnTwo: "Signup",
      showUnverified: false,
      loggedIn: false
    };
  },
  watch: {
    userLoggedIn(newValue) {
      this.loggedIn = newValue;
    },
    showUnverified(newValue) {
      this.showUnverified = newValue;
    }
  },
  computed: {
    showUnverifiedToChild() {
      return this.$store.state.showUnverified;
    },
    userLoggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
