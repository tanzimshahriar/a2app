<template>
  <div id="app">
    <div id="nav">
      <div class="cart-btn">
        <router-link to="/cart">Cart</router-link>
      </div>
      <div class="fixed-header">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
}
#nav a:hover {
  color: dimgray;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fixed-header {
  align-self: center;
}
.cart-btn {
  align-self: flex-end;
  color: #42b983;
}
</style>
