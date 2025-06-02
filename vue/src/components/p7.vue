<script>
export default {
  name: "P6",
  data() {
    return {
      buffer: '',
      isRedBg: false,
    };
  },
  methods: {
    setRedBg() {
      this.isRedBg = true;
    },
    unsetRedBg() {
      this.isRedBg = false;
    },
  },
}
</script>

<template>
  <form>
    <input
      type="text"
      v-model="buffer"
      :class="{ pressed: isRedBg, released: !isRedBg }"
      v-on:keydown="setRedBg"
      v-on:keyup="unsetRedBg"
    />
  </form>
</template>

<style scoped>
input.pressed{
background-color: red;
}
input.released{
background-color: aqua;
}

</style>