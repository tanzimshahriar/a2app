<template>
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
    <h1>Products</h1>
      <div class="container-fluid">
        <div class="row justify-content-center">
            <div class=" col-lg-2 col-md-4 col-sm-4 " v-for="(obj,key) in products" :key="key">
                  <img img v-bind:src="obj.img"> 
                    <h5 class="card-title">{{obj.title}}</h5>
                    <span class="price-new">${{obj.price}}</span>
                    <p>{{obj.des}}</p>
                    <button type = "button" class="btn btn-secondary btn-sm btn-block">Add to Cart</button>
                    <br>
                    <button type = "button" class="btn btn-success btn-sm btn-block">Buy Now</button>
                    <br>
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
          price: "25",
          des: "Product Description",
          img: require('../assets/images/iphone11pro.jpg')
        },
        {
          id: 2,
          title: "Product Two",
          price: "15",
          des: "Product Description",
          img:require('../assets/images/iphone11pro.jpg')
        },
        {
          id: 3,
          title: "Product three",
          price: "20",
          des: "Product Description",
          img:require('../assets/images/iphone11pro.jpg')
        },
          {
          id: 4,
          title: "Four",
          price: "20",
          des: "Product Description",
          img:require('../assets/images/iphone11pro.jpg')
        },
         {
          id: 5,
          title: "Five",
          price: "20",
          des: "Product Description",
          img: require('../assets/images/iphone11pro.jpg')
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
        const url = process.env.NODE_ENV == "production" ? "https://assignment-two-server.appspot.com/user/verifyuser"
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
  .col-lg-2, .col-md-4, .col-sm-4{
    border-style: solid;
    border-color: rgb(202, 202, 202);
    border-width: 1px;
    margin-top: 20px;
    margin-right: 20px;
    width: auto;
    height:auto;
  }
  .img{
    width: 10px;
    height: 10px;
    background-color: red;
  }

</style>
