<template>
  <div v-if="this.$props.showUnverified && this.$props.loggedIn">
    <br>
    <CustomMessage 
      
      title="Please verify Your Email to continue"
      message="A confirmation code has been sent to your email. Please enter the confirmation code."
    />
    <br>
    <br>
    <form @submit="submitVerificationCode">
      <input id="verbtn"
        type="text"
        placeholder="Verification Code"
        v-model="verificationCodeEntered"
      />
      <input id="submit" value="Submit" type="submit" />
    </form>
    <div class="error-msg" v-if="showErrorMessage">
      {{ this.errorMessage }}
    </div>
  </div>
  <div v-else>
    <!-- <h1>Products</h1> -->
    <!-- <div class="container">
        <div
          class="product-box"
          v-bind:key="product.id"
          v-for="product in products"
        >
          <Product v-bind:product="product" />
        </div>
      </div> -->
    <Jumbotron></Jumbotron>
    <br />
    <h1>Products</h1>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class=" col-lg-2 col-md-4 col-sm-4 "
          v-for="(obj, key) in products"
          :key="key"
        >
          <img alt = "Product Image not available" v-bind:src="'obj.imagesrc'" />
          <h5 class="card-title">{{ obj.name }}</h5>
          <span class="price-new">${{ obj.price }}</span>
          <p>{{ obj.description }}</p>
          <button type="button" class="btn btn-secondary btn-sm btn-block">
            Add to Cart
            <img src="../assets/images/cart1.png" width="35px" height="35px" />
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import CustomMessage from "../views/customMessage";
import axios from "axios";
import Jumbotron from "./Jumbotron";
import Search from "./Search";

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
  mounted() {
    this.fetchProducts();
  },
  // updated() {
  //   this.fetchProducts();
  // },
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
      products: [],
      images: [],
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
        const url =
          process.env.NODE_ENV == "production"
            ? "https://assignment-two-server.appspot.com/user/verifyuser"
            : "http://localhost:8080/user/verifyuser";
        const data = {
          secretToken: this.verificationCodeEntered
        };

        //make the api call
        axios
          .post(url, data, {
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
    },
    fetchProducts () {
      console.log("fetchProducts()");
      const url =
          process.env.NODE_ENV == "production"
            ? "https://assignment-two-server.appspot.com/getproducts"
            : "http://localhost:8080/getproducts";
      axios
          .get(url)
          .then(res => {
            this.products = res.data.products;
          })
          .catch(err => {
            console.log(err);
          });
    }
  },
  components: {
    Product,
    CustomMessage,
    Jumbotron,
    Search
  }
};
</script>

<style scoped>
.col-lg-2,
.col-md-4,
.col-sm-4 {
  border-style: solid;
  border-color: rgb(202, 202, 202);
  border-width: 1px;
  margin-top: 20px;
  margin-right: 20px;
  width: auto;
  height: auto;
}
.img {
  width: 10px;
  height: 10px;
  background-color: red;
}
.btn-secondary {
  background-color: rgb(57, 116, 77);
}
#submit{
  background-color: rgb(57, 116, 77);
  height: 30px;
  width: 100px;
  border-radius: 0.5rem;
  color: white;
}
#verbtn{
  width: 400px;
  text-align: center;
  margin: 5px;
  border-style: solid;
  border-color: rgb(202, 202, 202);
  border-width: 1px;
}
</style>
