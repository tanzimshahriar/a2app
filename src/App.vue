<template>
  <div id="app">
    <!-- <div id="nav">
      <div class="cart-btn">
        <router-link to="/cart">Cart</router-link>
      </div>
      <div class="fixed-header">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div> -->
        <div id="nav">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active"><router-link to="/about">About</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active"><router-link to="/laptop">Laptops</router-link></a>
              </li>
            </ul>
      </div>

    <router-view />
  </div>
</template>

<style>

.nav a{
  color: rgb(202, 202, 202);
}
.nav a:hover{
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.nav-link{
  color: white;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgb(39, 39, 39);
}

#nav a {
  font-weight: bold;
  color: #c5c5c5;
  padding: 10px;
  text-decoration: none;
}
#nav a:hover {
  color: rgb(255, 255, 255);
}

#nav a.router-link-exact-active {
  color: #b19f00;
}
.fixed-header {
  align-self: center;
}
.cart-btn {
  align-self: flex-end;
  color: #42b983;
}
</style>
