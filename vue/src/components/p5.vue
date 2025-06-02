<script>
export default {
  name: "P5",
  data() {
    return {
      buffer: ''
    };
  },
  watch: {
    buffer(val) {
      if (val.length >= 5) {
        this.buffer = '';
      }
    }
  }
}
</script>

<template>
  <form>
    <input type="text" v-model="buffer" />
  </form>
</template>

<style scoped>
</style>