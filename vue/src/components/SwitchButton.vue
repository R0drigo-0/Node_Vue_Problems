<script>
export default {
  name: "SwitchButton",
  emits: ["on", "off"],
  data() {
    return {
      isOnEnabled: true,
      isOffEnabled: false,
    };
  },
  methods: {
    handleOn() {
      this.isOnEnabled = !this.isOnEnabled;
      this.isOffEnabled = !this.isOffEnabled;
      this.$emit("on");
    },
    handleOff() {
      this.isOnEnabled = !this.isOnEnabled;
      this.isOffEnabled = !this.isOffEnabled;
      this.$emit("off");
    },
  },
};
</script>

<template>
  <div>
    <button v-on:click="handleOn" v-bind:disabled="isOnEnabled">ON</button>
    <button v-on:click="handleOff" v-bind:disabled="isOffEnabled">OFF</button>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 3px solid black;
    border-radius: 4px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>
