<template>
  <div class="modalContainer">
    <div class="close-btn" v-on:click="closeModal">Close Window</div>
    <div class="custom-modal">
      <div class="title">
        {{ this.title }}
      </div>
      <div class="inputs">
        <input
          v-bind:type="inputOneTypeComputed"
          v-bind:placeholder="placeholderOne"
          v-model="firstInput"
        />
        <input
          v-bind:type="inputTwoTypeComputed"
          v-bind:placeholder="placeholderTwo"
          v-model="secondInput"
        />
        <div class="submit-btn-container">
          <div class="submit-btn" v-on:click="submitClicked">
            {{ this.placeholderThree }}
          </div>
        </div>
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
      firstInput: "",
      secondInput: "",
      returnDataToParent: {
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
    closeModal() {
      this.$emit("close");
    },
    submitClicked() {
      this.returnDataToParent.inputOne = this.firstInput;
      this.returnDataToParent.inputTwo = this.secondInput;
      this.$emit("submit", this.returnDataToParent);
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
  height: 50%;
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
  width: 250px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
}
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.submit-btn:hover {
  background: #42b983;
  color: white;
  font-weight: bolder;
}
.close-btn {
  cursor: pointer;
  padding: 10px;
}
.close-btn:hover {
  color: #42b983;
}
.error-message {
  color: red;
  font-size: 10px;
}
</style>
