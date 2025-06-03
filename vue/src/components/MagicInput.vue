<script>
export default {
  name: "MagicInput",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  computed: {
    displayValue() {
      if (!this.modelValue) {
        return "";
      }
      return this.modelValue.replace(/./g, (x) =>
        x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()
      );
    },
  },
  methods: {
    onInput(e) {
      const switched = e.target.value.replace(/./g, (x) =>
        x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()
      );
      this.$emit("update:modelValue", switched);
    },
  },
};
</script>

<template>
  <input
    type="text"
    :value="displayValue"
    @input="onInput"
    placeholder="Magic Input"
  />
</template>

<style scoped></style>