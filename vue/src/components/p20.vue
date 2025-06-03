<script>
import ColorSelector from "./ColorSelector.vue";
export default {
  name: "P20",
  components: {
    ColorSelector,
  },
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
    };
  },
};
</script>

<template>
  <div id="main">
    <!-- Here goes the child component -->
    <ColorSelector
      v-on:red="
        (val) => {
          red = val;
        }
      "
      v-on:green="
        (val) => {
          green = val;
        }
      "
      v-on:blue="
        (val) => {
          blue = val;
        }
      "
    />
    <div
      v-bind:style="{color: `rgb(${red}, ${green}, ${blue})`}"
    >
      TEXT
    </div>
  </div>
</template>

<style scoped>
#main {
  border: solid red;
  display: flex;
}
</style>
