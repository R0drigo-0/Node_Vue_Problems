<script>
import MagicInput from "./MagicInput.vue";
export default {
  name: "P22",
  components: {
    MagicInput,
  },
  data() {
    return {
      text: "",
      buffer: "",
    };
  },
};
</script>

<template>
  <div>
    <MagicInput v-model="buffer"/>
    <input v-model="text" type="text" placeholder="Normal Input" />
    <span v-if="buffer">Buffer: {{ this.buffer }}</span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
</style>
