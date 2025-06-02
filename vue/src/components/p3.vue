<script>
export default {
  name: "P3",
  data() {
    return {
      active: true
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    }
  },
};
</script>

<template>
  <button v-if="active" v-on:click="toggle">Click me!</button>
</template>

<style scoped>
button {
  border: 1px solid #cecece;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
