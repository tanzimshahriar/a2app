<template>
  <div>
    <Jumbotron></Jumbotron>
    <!-- <div class="row-sm" v-for="(obj,key) in products" :key="key">
      <div class="col-md-2" v-for="(obj,key) in products" :key="key">
        <figure class="card card-product">
          <div class="img-wrap" >
            <img v-bind:src="obj.img">
          </div>
          <figcaption class="info-wrap">
            <h6 class="title "><a href="#">{{obj.title}}</a></h6>
            <div class="price-wrap">
              <span class="price-new">${{obj.price}}</span>
            </div>  
          </figcaption>
        </figure> 
      </div>  -->
      
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
      

    <!-- <h1>Products</h1>
    <div class="container">
      <div
        class="product-box"
        v-bind:key="product.id"
        v-for="product in products"
      >
        <Product v-bind:product="product" />
      </div>
    </div> -->

  </div>
</template>

<script>
import Product from "./Product";
import Jumbotron from "./Jumbotron";
import Search from "./Search";

export default {
  name: "ProductsContainer",
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
          title: "Three",
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
      ]
    };
  },
  components: {
    Product,
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

/* .container {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.product-box {
  display: block;
  padding: 10px; 
} */

</style>
