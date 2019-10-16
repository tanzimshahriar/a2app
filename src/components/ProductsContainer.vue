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
          <img img v-bind:src="obj.img" />
          <h5 class="card-title">{{ obj.title }}</h5>
          <span class="price-new">${{ obj.price }}</span>
          <p>{{ obj.des }}</p>
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
          title: "OPPO Mx R",
          price: "750",
          des: "Design for Gaming and long Battery life",
          img: require("../assets/images/oppo.jpg")
        },
        {
          id: 2,
          title: "Iphone 11",
          price: "1200",
          des: "the fastest, most robust mobile phone",
          img: require("../assets/images/iphone11pro.jpg")
        },
        {
          id: 3,
          title: "Samsung S10+",
          price: "900",
          des: "Slim, comfortable and simply beautiful",
          img: require("../assets/images/samsung.jpg")
        },
        {
          id: 4,
          title: "Xiaomi Max 10",
          price: "700",
          des: "Cheap yet powerful, water resitance",
          img: require("../assets/images/xiaomi.jpg")
        },
        {
          id: 5,
          title: "Asus XR delight",
          price: "1000",
          des: "Design to last long, enjoy the real power ",
          img: require("../assets/images/asus.jpg")
        },
        {
          id: 6,
          title: "One Plus 7",
          price: "950",
          des: "Never Let you Down, Stay comfort all day long",
          img: require("../assets/images/one.jpg")
        },
        {
          id: 7,
          title: "Google Pixel 3Xl",
          price: "1100",
          des: "Get everything at one place, Enjoy what you've got",
          img: require("../assets/images/pixel.jpg")
        },
        {
          id: 8,
          title: "Honor Flex",
          price: "1300",
          des: "Get Real, get flexible, the new technflex",
          img: require("../assets/images/honor.jpg")
        },
        {
          id: 9,
          title: "Honor Flex",
          price: "1300",
          des: "Get Real, get flexible, the new technflex",
          img: require("../assets/images/honor.jpg")
        },
        {
          id: 9,
          title: "Moto GX90",
          price: "700",
          des: "Great camera with 45 mpx , tripe camera",
          img: require("../assets/images/moto.jpg")
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
