<template>
  <div>
    <div class="signup-container">
      <CustomModal
        v-if="!signupSuccessModal"
        btnLabel="SIGNUP"
        title="Sign up"
        firstInputLabel="Enter Your Email"
        secondInputLabel="Enter Your Password"
        inputOneType="email"
        inputTwoType="password"
        v-bind:errorMessage="errorMessage"
        @submit="submitSignupForm"
      />
    </div>
    <div class="modalsignupmessage" v-if="signupSuccessModal">
      <CustomMessage
        title="Signup completed!!"
        message="Congratulations Your account has been created successfully. 
        Login now to verify your account"
        @close="handleSuccessSignupModalClose"
      />
    </div>
  </div>
</template>

<script>
import CustomModal from "../views/CustomModal";
import CustomMessage from "../views/customMessage";
import axios from "axios";

export default {
  name: "",
  data() {
    return {
      signupModalOpen: false,
      signupSuccessModal: false,
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
    openSignupModal() {
      this.signupModalOpen = true;
    },
    openSignupSuccessModal() {
      this.handleSignupClose();
      this.signupSuccessModal = true;
    },
    submitSignupForm(enteredData) {
      if (
        this.validateEmailAndPassword(
          enteredData.inputOne,
          enteredData.inputTwo
        )
      ) {
        var postData = {
          email: enteredData.inputOne,
          password: enteredData.inputTwo
        };

        const url =
          process.env.NODE_ENV == "production"
            ? "https://assignment-two-server.appspot.com/register"
            : "http://localhost:8080/register";
        axios
          .post(url, postData)
          .then(res => {
            if (res.status == 200 && res.data.result == "Success") {
              this.openSignupSuccessModal();
            } else {
              this.errorMessage = res.data.msg;
            }
          })
          .catch(err => {
            if (
              err.response.data.errorCode &&
              err.response.data.errorCode == "ER_DUP_ENTRY"
            ) {
              this.errorMessage = "Error! Email already exists.";
            } else if (
              err.response.data.errorCode &&
              err.response.data.errorCode == "VALIDATION_ERROR"
            ) {
              this.errorMessage = err.response.data.msg;
            } else {
              this.errorMessage = err.response.data.msg + " Please try again.";
            }
          });
      }
    },
    handleSignupClose() {
      this.signupModalOpen = false;
      this.errorMessage = "";
    },
    handleSuccessSignupModalClose() {
      this.signupSuccessModal = false;
    }
  },
  components: {
    CustomModal,
    CustomMessage
  }
};
</script>
<style scoped>
.modalsignupmessage {
  margin-top: 10%;
  background: white;
  display: flex;
}
</style>
