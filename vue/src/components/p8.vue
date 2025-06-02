<script>
export default {
  name: "P8",
  data() {
    return {
      x: 0
    };
  },
};
</script>

<template>
<div>
  <div v-bind:style="{ color: `hsl(0,${x}%,50%)` }">AM I RED?</div>
    <input v-model="x" type="range" min="0" max="100">
  <div>YES!</div>
</div>
</template>

<style scoped></style>
