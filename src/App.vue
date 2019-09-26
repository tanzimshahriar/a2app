<template>
  <div id="app">
    <NavBar v-bind:btnOne="btnOne" v-bind:btnTwo="btnTwo" />

  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  },
  data() {
    return {
      btnOne: "Login",
      btnTwo: "Signup"
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
