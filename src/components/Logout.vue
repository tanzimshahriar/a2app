<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("destroyToken").then(res => {
      this.$router.push("./");
      let payload = {
          text : "Logged out sucessfully.", 
          timeout: 3000
        }
      this.$store.commit("showSnackbar", payload);
    });
  }
};
</script>
