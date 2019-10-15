<template>
  <div class="modalContainer">
    <div class="custom-modal">
      <div class="loginHeader">
        <p id="signIn">{{ title }}</p>
      </div>
      <!-- <div class="title">
        {{ this.title }}
      </div> -->
      <div class="inputs">
        <input
          v-bind:type="inputOneTypeComputed"
          v-bind:placeholder="placeholderOne"
          v-model="inputData.inputOne"
          ref="inputOne"
        />
        <input
          v-bind:type="inputTwoTypeComputed"
          v-bind:placeholder="placeholderTwo"
          v-model="inputData.inputTwo"
          ref="inputTwo"
        />
        <br />
        <br />
        <br />
        <br />
        <div class="submit-btn-container">
          <div class="submit-btn" v-on:click="submitClicked">
            {{ this.placeholderThree }}
          </div>
        </div>
        <br />
        <br />
        <div class="error-message">{{ this.errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomModal",
  data: function() {
    return {
      closeClicked: false,
      inputData: {
        inputOne: "",
        inputTwo: ""
      }
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
    },
    inputOneType: {
      type: String,
      required: true
    },
    inputTwoType: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String
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
    },
    inputOneTypeComputed() {
      return this.inputOneType;
    },
    inputTwoTypeComputed() {
      return this.inputTwoType;
    }
  },
  methods: {
    submitClicked() {
      this.$emit("submit", this.inputData);
    }
  }
};
</script>

<style scoped>
.modalContainer {
  display: flex;
  justify-content: flex-start;
  height: auto;
  width: 100% auto;
  flex-direction: column;
  align-items: center;
}
#signIn {
  margin-top: 32px;
}
.custom-modal {
  display: flex;
  background: rgb(255, 255, 255);
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-bottom: 5px;
  margin-top: 50px;
  border-radius: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.1);
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
  margin-bottom: 100px;
}
input {
  margin-bottom: 5px;
  margin-top: 5px;
  height: 50px;
  width: 350px;
  border-radius: 30px;
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(253, 253, 253);
}
input:focus {
  outline: none !important;
}
input:hover {
  background-color: rgb(255, 254, 221);
}
input[placeholder] {
  text-align: center;
}
.submit-btn-container {
  height: 30px;
  width: 350px;
  cursor: pointer;
  border-radius: 20px;
}
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgb(197, 162, 67);
  border-radius: 20px;
  height: 50px;
  width: 350px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
}
.submit-btn:hover {
  color: white;
  font-weight: bolder;
}
.loginHeader {
  height: 100px;
  background-color: rgb(197, 162, 67);
  width: 100%;
  margin-bottom: auto;
  color: white;
  font-weight: bold;
  font-size: 1.7rem;
  border-radius: 20px 20px 0px 0px;
}
.error-message {
  color: red;
  font-size: 10px;
}
</style>
