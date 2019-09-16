<template>
  <div class="messageContainer">
    <div class="custom-message">
      <div class="title">
        {{ this.title }}
      </div>
      <div class="message">{{ this.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomModal",
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.messageContainer {
  height: 100%;
  width: 100%;
}
.custom-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  margin: 20px;
}
.title {
  font-size: 35px;
  font-weight: bolder;
}
.message {
  font-size: 25px;
  font-weight: lighter;
  margin: 20px;
  padding-top: 10px;
}
</style>
