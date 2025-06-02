<script>
export default {
  name: "P2",
  data() {
    return {
      a: 0,
      b:0,
    }
  },
  computed: {
    addition() {
      return Number(this.a) + Number(this.b);
    }
  },
}
</script>

<template>
  <form>
    <input v-model="a" type="number" />
    <input v-model="b" type="number" />
    <span>{{ this.addition }}</span>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
