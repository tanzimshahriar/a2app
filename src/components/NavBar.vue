<template>
  <div>
    <div class="modal" v-if="signupModalOpen">
      <CustomModal
        v-bind:title="signupTitle"
        v-bind:btnLabel="signupBtnLabel"
        v-bind:firstInputLabel="signupFirstInputLabel"
        v-bind:secondInputLabel="signupSecondInputLabel"
        @close="handleSignupClose"
        @submit="submitSignupForm"
      />
    </div>
    <div class="modal" v-if="loginModalOpen">
      <CustomModal
        v-bind:title="loginTitle"
        v-bind:btnLabel="loginBtnLabel"
        v-bind:firstInputLabel="loginFirstInputLabel"
        v-bind:secondInputLabel="loginSecondInputLabel"
        @close="handleLoginClose"
        @submit="submitLoginForm"
      />
    </div>
    <div id="nav">
      <div class="btn" v-on:click="openLoginModal">{{ this.btnOne }}</div>
      <div class="btn" v-on:click="openSignupModal">{{ this.btnTwo }}</div>
      <div class="btn">
        <router-link to="/cart">Cart</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import CustomModal from "../views/CustomModal";
export default {
  name: "NavBar",
  data() {
    return {
      loginModalOpen: false,
      signupModalOpen: false,
      loginTitle: "Login",
      loginBtnLabel: "LOGIN",
      loginFirstInputLabel: "Enter Your Email",
      loginSecondInputLabel: "Enter Your Password",
      signupTitle: "Signup",
      signupBtnLabel: "SIGNUP",
      signupFirstInputLabel: "Enter Your Email",
      signupSecondInputLabel: "Enter Your Password"
    };
  },
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
  methods: {
    openLoginModal: function() {
      this.loginModalOpen = true;
    },
    openSignupModal: function() {
      this.signupModalOpen = true;
    },
    submitSignupForm() {},
    submitLoginForm() {
      // const formIsValid = emailIsValid && passwordIsValid
      // if(loginFormIsValid) {
      // }
    },
    handleLoginClose() {
      this.loginModalOpen = false;
    },
    handleSignupClose() {
      this.signupModalOpen = false;
    }
  },
  components: {
    CustomModal
  }
};
</script>

<style scoped>
#nav {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
}

.fixed-header {
  align-self: center;
}
.btn {
  align-self: flex-end;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
}
#nav a {
  font-weight: bold;
  text-decoration: none;
}
.btn:hover {
  color: #42b983;
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
