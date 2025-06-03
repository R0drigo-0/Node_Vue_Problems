<script>
import WordsToList2 from './WordsToList2.vue';

export default {
  name: "P16",
  components: {
    WordsToList2
  },
  data() {
    return {
      buffer: ""
    }
  }
}
</script>

<template>
  <form action="">
    <input v-model="buffer" type="text">
  </form>
<div>
  <WordsToList2 v-bind:words="buffer" class="WordsToList"/>
</div>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0!important;
}
input {
  width: 172px;
}
div {
  margin-top: 0!important;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  padding-right: 25px;
}
</style>
