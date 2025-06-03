<script>
export default {
  name: "ColorSelector",
  emits: ["red", "green", "blue"],
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
  <div id="component">
    <div
      id="box"
      v-bind:style="{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }"
    ></div>
    <div id="inputs">
      <div>
        R:
        <input
          v-model="red"
          type="range"
          min="0"
          max="255"
          v-on:input="$emit('red', Number(red))"
        />
        red value
      </div>
      <div>
        G:
        <input
          v-model="green"
          type="range"
          min="0"
          max="255"
          v-on:input="$emit('green', Number(green))"
        />
        green value
      </div>
      <div>
        B:
        <input
          v-model="blue"
          type="range"
          min="0"
          max="255"
          v-on:input="$emit('blue', Number(blue))"
        />
        blue value
      </div>
    </div>
  </div>
</template>

<style scoped>
#component {
  border: solid;
  display: flex;
}
#box {
  background-color: #000;
  width: 110px;
  height: 110px;
}
#inputs {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>
