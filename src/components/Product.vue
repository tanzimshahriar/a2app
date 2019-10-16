<template>
  <div>
    <img alt="Product Image not available"  src="../assets/images/asus.jpg"/>
    <h5 class="card-title">{{ name }}</h5>
    <span class="price-new">${{ price }}</span>
    <p>{{ description }}</p>
    <button type="button" class="btn btn-secondary btn-sm btn-block">
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
</style>
