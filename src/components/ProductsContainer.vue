<template>
  <div v-if="this.$props.showUnverified && this.$props.loggedIn">
    <br />
    <CustomMessage
      title="Please verify Your Email to continue"
      message="A confirmation code has been sent to your email. Please enter the confirmation code."
    />
    <br />
    <br />
    <form @submit="submitVerificationCode">
      <input
        id="verbtn"
        type="text"
        placeholder="Verification Code"
        v-model="verificationCodeEntered"
      />
      <input id="submit" value="Submit" type="submit" />
    </form>
    <div class="error-msg" v-if="showErrorMessage">{{ this.errorMessage }}</div>
  </div>
  <div v-else>
    <br />
    <h1>Products</h1>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="items"
            label="Solo field"
            solo>
          </v-select>
      </v-col> -->
        <v-progress-circular
          v-if="!products.length || products.length < 1"
          indeterminate
          color="primary"
        ></v-progress-circular>
        <div
          class="col-lg-2 col-md-4 col-sm-4"
          v-for="(product, key) in products"
          :key="key"
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
      products: {},
      images: [],
      verificationCodeEntered: "",
      showErrorMessage: false,
      errorMessage: "",
      items: [
        "Name: High to Low",
        "Name: Low to High",
        "Price: High to Low",
        "Price: Low to High"
      ]
    };
  },
  methods: {
    submitVerificationCode() {
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
              let payload = {
                text: "Thanks for verifying your email.",
                timeout: 5000
              };
              this.$store.commit("showSnackbar", payload);
            } else {
              this.showErrorMessage = true;
              this.errorMessage = "*verification failed, try again";
            }
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
    },
    fetchProducts() {
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
    CustomMessage
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
#submit {
  background-color: rgb(57, 116, 77);
  height: 30px;
  width: 100px;
  border-radius: 0.5rem;
  color: white;
}
#verbtn {
  width: 400px;
  text-align: center;
  margin: 5px;
  border-style: solid;
  border-color: rgb(202, 202, 202);
  border-width: 1px;
}
</style>
