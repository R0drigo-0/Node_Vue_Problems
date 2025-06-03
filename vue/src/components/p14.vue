<script>
export default {
  name: "P14",
  data() {
    return {
      state: 0,
    };
  },
  methods: {
    handleClick() {
      this.state = (this.state + 1) % 3;
    },
    getLightColor(light) {
      if (light === "red") return this.state === 2 ? "red" : "indianred";
      if (light === "yellow") return this.state === 1 ? "yellow" : "khaki";
      if (light === "green") return this.state === 0 ? "lime" : "seagreen";
    },
  },
};
</script>

<template>
  <div style="display: inline-block; width: 30px">
    <div
      v-bind:style="{ height: '30px', backgroundColor: getLightColor('red') }"
    ></div>
    <div
      v-bind:style="{ height: '30px', backgroundColor: getLightColor('yellow') }"
    ></div>
    <div
      v-bind:style="{ height: '30px', backgroundColor: getLightColor('green') }"
    ></div>
    <button v-on:click="handleClick">Switch</button>
  </div>
</template>

<style scoped>
div.trafficlight {
  display: inline-block;
  width: 30px;
}
div.light {
  height: 30px;
}
</style>
