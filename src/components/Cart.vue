<template>
  <div class="cart">
    <!-- <h1>Your Cart</h1>
    <div class = "cart-items-container">
      <div class = "cart-item">
        Item
        <div id="-carItem-container">Quantity
          <Button class= "quantity-btn">+</Button>
          <Button class= "quantity-btn">-</Button>
        </div>
        <button>Remove</button>
      </div>
    </div>
    <div>
      <p>Your Cart is empty</p>
    </div> -->
    <div class="container">
<br>  
<hr>



<div class="card">
<table class="table table-hover shopping-cart-wrap">
<thead class="text-muted">
<tr>
  <th scope="col">Product</th>
  <th scope="col" width="120">Quantity</th>
  <th scope="col" width="120">Price</th>
  <th scope="col" width="200" class="text-right">Action</th>
</tr>
</thead>
<tbody>


<tr>
	<td>
<figure class="media">
	<div class="img-wrap"><img src="../assets/images/asus.jpg" class="img-thumbnail img-sm"></div>
	<figcaption class="media-body">
		<h6 class="title text-truncate">Product name goes here </h6>
		<dl class="param param-inline small">
		</dl>
	</figcaption>
</figure> 
	</td>
	<td> 
		
    <input id="number" type="number" value="1" min="0">
	</td>
	<td> 
		<div class="price-wrap"> 
			<var class="price">$250</var>  
		</div> <!-- price-wrap .// -->
	</td>
	<td class="text-right"> 
		<a href="" class="btn btn-outline-danger btn-round"> × Remove</a>
	</td>
</tr>
</tbody>
</table>
</div> <!-- card.// -->

</div> 
<!--container end.//-->

<br><br>

  </div>
</template>

<style scoped>
  .cart-items-container {

  }
  #carItem-container{
    background-color: green;
  }
  .param {
    margin-bottom: 7px;
    line-height: 1.4;
}
.param-inline dt {
    display: inline-block;
}
.param dt {
    margin: 0;
    margin-right: 7px;
    font-weight: 600;
}
.param-inline dd {
    vertical-align: baseline;
    display: inline-block;
}

.param dd {
    margin: 0;
    vertical-align: baseline;
} 

.shopping-cart-wrap .price {
    color: #007bff;
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
    display: block;
    padding-top: 8px;
}
var {
    font-style: normal;
}

.media img {
    margin-right: 1rem;
}
.img-sm {
    width: 90px;
    max-height: 75px;
    object-fit: cover;
}
#number{
  text-align: center;
  height: 40px;
  border-radius: 0.5rem;
  border: 1px solid rgb(228, 228, 228);
  
}
.btn{
  
  width: 130px;
  height: 40px;
  
}
.input[type=number] {
    height: 200px;
}

.input[type=number]:hover::-webkit-inner-spin-button {  
    width: 14px;
    height: 30px;
}
.text-truncate{
  padding-top: 10px;
}
</style>

