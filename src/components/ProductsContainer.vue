<template>
  <div>
    <Jumbotron></Jumbotron>
    <div class="row-sm" v-for="(obj,key) in products" :key="key">
      <div class="col-md-2">
        <figure class="card card-product">
          <div class="img-wrap" v-bind:src="obj.img"></div>
          <figcaption class="info-wrap">
            <h6 class="title "><a href="#">{{obj.title}}</a></h6>
            
            <div class="price-wrap">
              <span class="price-new">${{obj.price}}</span>
      
            </div> <!-- price-wrap.// -->
            
          </figcaption>
        </figure> <!-- card // -->
      </div> <!-- col // -->
    </div> <!-- row.// -->

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
          price: "25$",
          img: '../assets/images/apple11pro.jpg'
        },
        {
          id: 2,
          title: "Product Two",
          price: "15$",
          img:''
        },
        {
          id: 3,
          title: "Three",
          price: "20$",
          img:''
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
