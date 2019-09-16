<template>
  <div class="modalContainer">
    <div class="close-btn" v-on:click="closeModal">Close</div>
    <div class="custom-modal">
      <div class="title">
        {{ this.title }}
      </div>
      <div class="inputs">
        <input type="email" v-bind:placeholder="placeholderOne" />
        <input type="password" v-bind:placeholder="placeholderTwo" />
        <div class="submit-btn-container">
          <div class="submit-btn">{{ this.placeholderThree }}</div>
        </div>
      </div>
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
.modalContainer {
  height: 100%;
  width: 100%;
}
.custom-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:50%;
}
.title {
  font-size: 35px;
  font-weight: bolder;
}
.inputs {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 15px;
  align-items: center;
}
input {
  margin-bottom: 5px;
  margin-top: 5px;
  height: 30px;
  width: 250px;
}
input[placeholder] {
  text-align: center;
}
.submit-btn-container {
  margin-bottom: 5px;
  margin-top: 5px;
  height: 30px;
  width:250px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
}
.submit-btn {
  display : flex;
  align-items : center;
  justify-content: center;
  height:100%;
  width:100%;
}
.submit-btn:hover {
  background: #42b983;
  color: white;
  font-weight: bolder;
}
.close-btn {
  cursor: pointer;
}
</style>
