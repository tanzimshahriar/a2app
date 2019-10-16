<template>
  <div>
    <div class="pd-container">
    <img alt="Product Image not available"  src="../assets/images/asus.jpg"/>
    <h5 class="card-title">{{ name }}</h5>
    <span class="price-new">${{ price }}</span>
    <p>{{ description }}</p>
     </div>

    <button id="pd-Btn" type="button" class="btn btn-secondary btn-sm btn-block">
     
      Add to Cart
      <img src="../assets/images/cart1.png" width="35px" height="35px" />
    </button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
       imagesrc: {
        type: String,
        required: true
      },
    }

  },
  data: function() {
    return {
      name: "",
      description: "",
      quantity: 0,
      price: 0,
      imagesrc: ""
    };
  },
  mounted() {
    this.name = this.$props.product.name;
    this.description = this.$props.product.description;
    this.quantity = this.$props.product.quantity;
    this.price = this.$props.product.price;
    this.imagesrc = this.$props.product.imagesrc;
  },
  watch: {
    product: function(newProp) {
      this.name = this.newProp.product.name;
      this.description = this.newProp.product.description;
      this.quantity = this.newProp.product.quantity;
      this.price = this.newProp.product.price;
      this.imagesrc = this.newProp.product.imagesrc;
    }
  }
};
</script>

<style scoped>
.product-title {
  font-weight: bolder;
}
.product-price {
  font-weight: lighter;
}
.pd-container{
  min-height: 380px;
}
#pd-Btn{
background-color: rgb(57, 116, 77);
}
</style>
