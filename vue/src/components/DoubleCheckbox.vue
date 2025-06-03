<script>
export default {
  name: "DoubleCheckbox",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:isChecked"],
  data() {
    return {
      box1: false,
      box2: false,
    };
  },
  watch: {
    isChecked(newVal) {
      this.box1 = newVal;
      this.box2 = newVal;
    },
    box1() {
      this.emitState();
    },
    box2() {
      this.emitState();
    },
  },
  mounted() {
    this.box1 = this.isChecked;
    this.box2 = this.isChecked;
  },
  methods: {
    emitState() {
      this.$emit("update:isChecked", this.box1 && this.box2);
    },
  },
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="box1" />
    <input type="checkbox" v-model="box2" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  border: 2px solid black;
}
</style>