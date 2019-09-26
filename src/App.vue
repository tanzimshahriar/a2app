<template>
  <div id="app">
    <NavBar
      v-bind:btnOne="btnOne"
      v-bind:btnTwo="btnTwo"
      v-bind:showUnverifiedButtons="showUnverifiedToChild"
      v-bind:loggedIn="userLoggedIn"
    />
    <ProductsContainer
      v-bind:showUnverified="showUnverifiedToChild"
      v-bind:loggedIn="userLoggedIn"
      @userJustVerified="userVerificationDone"
    />
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "./components/NavBar";

import ProductsContainer from "./components/ProductsContainer";
export default {
  name: "app",
  components: {
    NavBar,
    ProductsContainer
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
    userLoggedIn(newValue, oldValue) {
      this.loggedIn = newValue;
    }
  },
  mounted() {
    this.checkIfUserVerificationhouldBeShowed();
  },
  updated() {
    this.checkIfUserVerificationhouldBeShowed();
  },
  methods: {
    checkIfUserVerificationhouldBeShowed() {
      if (this.$store.getters.loggedIn) {
        axios
          .get("https://assignment-two-server.appspot.com/user/getverificationstatus", {
          //.get("http://localhost:8080/user/getverificationstatus", {
            headers: {
              "Content-Type": "application/json",
              "auth-token": this.$store.state.user.token
            }
          })
          .then(res => {
            if (res.status == 200 && res.data.result == "Verified") {
              this.showUnverified = false;
            } else if (res.status == 200 && res.data.result == "unverified") {
              this.showUnverified = true;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }

      //if user is not logged in dont display verification to be completed message
      else {
        this.showUnverified = false;
      }
    },
    userVerificationDone() {
      //todo: vanlal show a popup alert using bootstrap saying "Thanks for verifying your email"
      this.checkIfUserVerificationhouldBeShowed();
    }
  },
  computed: {
    showUnverifiedToChild() {
      return this.showUnverified;
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
