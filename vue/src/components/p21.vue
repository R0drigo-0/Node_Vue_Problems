<script>
import DoubleCheckbox from "./DoubleCheckbox.vue";
export default {
  name: "P21",
  data() {
    return {
      isChecked: false,
    }
  },
  components: {
    DoubleCheckbox,
  },
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="isChecked"/>
    <DoubleCheckbox v-model:isChecked="isChecked"/>
  </div>
</template>

<style scoped></style>