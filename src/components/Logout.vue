<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("destroyToken").then(res => {
      this.$router.push("./");
    });
  }
};
</script>
