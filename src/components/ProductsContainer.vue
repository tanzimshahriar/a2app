<template>
  <div>
    <div v-if="this.$props.showUnverified && this.$props.loggedIn">
      <CustomMessage
        title="Verify Your Email to continue"
        message="A confirmation code has been sent to your email. Please enter the confirmation code."
      />
      <form @submit="submitVerificationCode">
        <input
          type="text"
          placeholder="Verification Code"
          v-model="verificationCodeEntered"
        />
        <input value="Submit" type="submit" />
      </form>
      <div class="error-msg" v-if="showErrorMessage">
        {{ this.errorMessage }}
      </div>
    </div>
    <div v-else>
      <h1>Products</h1>
      <div class="container">
        <div
          class="product-box"
          v-bind:key="product.id"
          v-for="product in products"
        >
          <Product v-bind:product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import CustomMessage from "../views/customMessage";
import axios from "axios";
export default {
  name: "ProductsContainer",
  props: {
    showUnverified: {
      type: Boolean,
      required: true
    },
    loggedIn: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    showUnverified: function(newProp) {
      this.showUnverified = newProp;
    },
    loggedIn: function(newProp) {
      this.loggedIn = newProp;
    }
  },

  data: function() {
    return {
      products: [
        {
          id: 1,
          title: "Product One",
          price: "25$"
        },
        {
          id: 2,
          title: "Product Two",
          price: "15$"
        },
        {
          id: 3,
          title: "zzzzzzzzz",
          price: "20$"
        }
      ],
      verificationCodeEntered: "",
      showErrorMessage: false,
      errorMessage: ""
    };
  },
  methods: {
    submitVerificationCode() {
      console.log(this.verificationCodeEntered);
      console.log("token" + this.$store.state.user.token);
      if (this.verificationCodeEntered != "") {
        this.showErrorMessage = false;
        this.errorMessage = "";

        const data = {
          secretToken: this.verificationCodeEntered
        };

        //make the api call
        axios
          .post("https://assignment-two-server.appspot.com/user/verifyuser",
          //.post("http://localhost:8080/user/verifyuser", 
            data, {
            headers: {
              "Content-Type": "application/json",
              "auth-token": this.$store.state.user.token
            }
          })
          .then(res => {
            if (res.data.result == "Success") {
              this.$emit("userJustVerified");
            } else {
              this.showErrorMessage = true;
              this.errorMessage = "*verification failed, try again";
            }
            console.log(res.result);
          })
          .catch(err => {
            if (err.response.data.errorCode == "Invalid") {
              this.showErrorMessage = true;
              this.errorMessage = "*invalid Code, try again";
            }
            console.log(err);
          });
      } else {
        this.showErrorMessage = true;
        this.errorMessage = "*please enter the verification code";
      }
      console.log("ErrorMessage:" + this.errorMessage);
    }
  },
  components: {
    Product,
    CustomMessage
  }
};
</script>

<style scoped>
.container {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.product-box {
  display: block;
  padding: 10px;
}
.error-msg {
  color: red;
  font-size: 10px;
  font-weight: lighter;
}
</style>
