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
  text-align: left;
  height: 30%;
  margin-left: 40px;
  margin-right: 40px;
}
.title {
  font-size: 35px;
  font-weight: bolder;
}
.message {
  font-size: 25px;
  font-weight: lighter;
  padding-top: 15px;
}
</style>
