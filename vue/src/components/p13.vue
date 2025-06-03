<script>
export default {
  name: "P13",
  data() {
    return {
      state: 0,
    };
  },
  watch: {
    state(newState) {
      if (newState == 3) {
        this.state = 0;
      }
    },
  },
  methods: {
    handleClick() {
      this.state++;
    },
  },
};
</script>

<template>
  <div class="trafficlight">
    <div class="light" v-bind:class="state == 2 ? 'redOn' : 'redOff'"></div>
    <div
      class="light"
      v-bind:class="state == 1 ? 'yellowOn' : 'yellowOff'"
    ></div>
    <div class="light" v-bind:class="state == 0 ? 'greenOn' : 'greenOff'"></div>
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
div.redOn {
  background-color: red;
}
div.redOff {
  background-color: indianred;
}
div.yellowOn {
  background-color: yellow;
}
div.yellowOff {
  background-color: khaki;
}
div.greenOn {
  background-color: lime;
}
div.greenOff {
  background-color: seagreen;
}
</style>
