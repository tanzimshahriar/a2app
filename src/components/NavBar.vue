<template>
  <div>
    <div class="modal" v-if="signupModalOpen">
      <CustomModal
        title="Signup"
        btnLabel="SIGNUP"
        firstInputLabel="Enter Your Email"
        secondInputLabel="Enter Your Password"
        inputOneType="email"
        inputTwoType="password"
        v-bind:errorMessage="errorMessage"
        @close="handleSignupClose"
        @submit="submitSignupForm"
      />
    </div>
    <div class="modal" v-if="loginModalOpen">
      <CustomModal
        title="Login"
        btnLabel="LOGIN"
        firstInputLabel="Enter Your Email"
        secondInputLabel="Enter Your Password"
        inputOneType="email"
        inputTwoType="password"
        v-bind:errorMessage="errorMessage"
        @close="handleLoginClose"
        @submit="submitLoginForm"
      />
    </div>
    <div class="modal" v-if="signupSuccessModal">
      <CustomMessage
        title="Signup completed"
        message="Your account has been created successfully."
        @close="handleSuccessSignupModalClose"
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
import CustomMessage from "../views/customMessage";
import axios from "axios";
export default {
  name: "NavBar",
  data() {
    return {
      loginModalOpen: false,
      signupModalOpen: false,
      signupSuccessModal: false,
      enteredEmail: "",
      enteredPassword: "",
      errorMessage: "",
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
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

        axios
          .post(
            //for dev env:
            "http://localhost:8080/register",
            //"https://assignment-two-server.appspot.com/register",
            postData
          )
          .then(res => {
            console.log(res.data.msg);
            if(res.status==200 && res.data.result=="Success"){
              this.openSignupSuccessModal();
            }
            else{
              this.errorMessage = res.data.msg;
            }
          })
          .catch(err => {
            if(err.response.data.ErrorCode && err.response.data.ErrorCode=="ER_DUP_ENTRY"){
              this.errorMessage = "Error! Email already exists."
            }
            else{
              this.errorMessage = (err.response.data.msg + " Please try again.");
            }
          });
      }
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
    },
    handleSignupClose() {
      this.signupModalOpen = false;
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
