<template>
  <div class="loginContainer">
    <CustomModal
      title="Login"
      btnLabel="LOGIN"
      firstInputLabel="Enter Your Email"
      secondInputLabel="Enter Your Password"
      inputOneType="email"
      inputTwoType="password"
      v-bind:errorMessage="errorMessage"
      @submit="submitLoginForm"
    />
  </div>
</template>

<script>
import CustomModal from "../views/CustomModal";
export default {
  name: "Login",
  data() {
    return {
      loginModalOpen: false,
      enteredEmail: "",
      enteredPassword: "",
      errorMessage: "",
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  methods: {
    validateEmailAndPassword(email, password) {
      if (!this.isValidEmail(email)) {
        this.errorMessage = "*please enter a valid email";
        return false;
      } else if (password.length <= 5) {
        this.errorMessage =
          "*please enter a password with 6 minimum characters";
        return false;
      } else {
        this.errorMessage = "";
        return true;
      }
    },
    isValidEmail(email) {
      return email == "" ? false : this.emailRegex.test(email) ? true : false;
    },
    openLoginModal() {
      this.loginModalOpen = true;
    },
    submitLoginForm(enteredData) {
      if (
        this.validateEmailAndPassword(
          enteredData.inputOne,
          enteredData.inputTwo
        )
      ) {
        console.log("Login Doesnt work yet");
      }
    },
    handleLoginClose() {
      this.loginModalOpen = false;
      this.errorMessage = "";
    }
  },
  components: {
    CustomModal
  }
};
</script>
