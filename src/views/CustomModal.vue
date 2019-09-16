<template>
  <div class="custom-modal">
    <div class="close-btn" v-on:click="closeModal">Close</div>
    <div class="title">
      {{ this.title }}
    </div>
    <div class="inputs">
      <input type="email" v-bind:placeholder="placeholderOne" />
      <input type="password" v-bind:placeholder="placeholderTwo" />
      <input type="submit" v-bind:value="placeholderThree" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomModal",
  data: function() {
    return {
      closeClicked: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    btnLabel: {
      type: String,
      required: true
    },
    firstInputLabel: {
      type: String,
      required: true
    },
    secondInputLabel: {
      type: String,
      required: true
    }
  },
  computed: {
    placeholderOne() {
      return this.firstInputLabel;
    },
    placeholderTwo() {
      return this.secondInputLabel;
    },
    placeholderThree() {
      return this.btnLabel;
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
.custom-modal {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.title {
  padding-top: 60px;
  font-size: 30px;
}
.inputs {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 15px;
  align-items: center;
  width: 100%;
}
input {
  margin-bottom: 5px;
  margin-top: 5px;
  height: 30px;
  max-width: 60%;
  min-width: 30%;
  width: 60ch;
}
input[placeholder] {
  text-align: center;
}
.close-btn {
  margin-top:10px;
  cursor: pointer;
}
</style>
