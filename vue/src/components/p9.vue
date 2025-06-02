<script>
export default {
  name: "P9",
  data() {
    return {
      a: false,
      b: false,
      c: false,
      d: false,
    };
  },
  watch: {
    a(newValue) {
      this.b = newValue;
    },
    b(newValue) {
      this.c = newValue;
    },
    c(newValue) {
      this.d = newValue;
    },
  },
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="a" id="inputCheckbox"/>
    <label for="inputCheckbox"> {{ a }}</label>
    <label for="inputCheckbox"> {{ b }}</label>
    <label for="inputCheckbox"> {{ c }}</label>
    <label for="inputCheckbox"> {{ d }}</label>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
div > label {
  margin-right: 5px;
}
</style>