<template>
  <div id="home">
    <ProductsContainer
      v-bind:showUnverified="showUnverifiedToChild"
      v-bind:loggedIn="userLoggedIn"
      @userJustVerified="userVerificationDone"
    />
  </div>
</template>

<script>
import axios from "axios";
import ProductsContainer from "./ProductsContainer";
import config from "../../vue.config";

export default {
  name: "app",
  components: {
    ProductsContainer
  },
  data() {
    return {
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
      const url = config.mode == "production" ? "https://assignment-two-server.appspot.com/user/getverificationstatus"
      : "http://localhost:8080/user/getverificationstatus";
      if (this.$store.getters.loggedIn) {
        axios
          .get(url, {
            headers: {
              "Content-Type": "application/json",
              "auth-token": this.$store.state.user.token
            }
          })
          .then(res => {
            if (res.status == 200 && res.data.result == "Verified") {
              this.showUnverified = false;
              this.$store.state.showUnverified = false; 
            } else if (res.status == 200 && res.data.result == "unverified") {
              this.showUnverified = true;
              this.$store.state.showUnverified = true;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }

      //if user is not logged in dont display verification to be completed message
      else {
        this.showUnverified = false;
        this.$store.state.showUnverified = false;
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
<style></style>
