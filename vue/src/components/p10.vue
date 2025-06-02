<script>
export default {
  name: "P10",
  data() {
    return {
      root: false
    };
  },
  computed: {
    a: {
      get() {
        return this.root;
      },
      set(val) {
        this.root = val;
      }
    },
    b() {
      return this.a;
    },
    c() {
      return this.a;
    },
    d() {
      return this.a;
    }
  }
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="a" id="inputCheckbox2"/>
    <label for="inputCheckbox2">{{ a }}</label>
    <label for="inputCheckbox2">{{ b }}</label>
    <label for="inputCheckbox2">{{ c }}</label>
    <label for="inputCheckbox2">{{ d }}</label>
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