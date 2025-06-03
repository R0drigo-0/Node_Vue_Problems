<script>
import SwitchButton from "./SwitchButton.vue";
export default {
  name: "P19",
  components: {
    SwitchButton,
  },
  data() {
    return {
      state: "on",
    };
  },
};
</script>

<template>
  <div>
    <SwitchButton
    v-on:on="
      () => {
        this.state = 'on';
      }
      "
    v-on:off="
      () => {
        this.state = 'off';
      }
      "
  />
  <p>Just turned {{ state }}</p>
</div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  p {
    margin-left: 10px;
    font-size: 20px;
  }
</style>
