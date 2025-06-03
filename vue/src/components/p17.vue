<script>
import WordsToList3 from './WordsToList3.vue';

export default {
  name: "P16",
  components: {
    WordsToList3
  },
  data() {
    return {
      inputBuffer: "",
      sendBuffer: ""
    }
  },
  methods: {
    convert(event) {
      event.preventDefault();
      this.sendBuffer = this.inputBuffer;
    }
  }
}
</script>

<template>
  <form action="">
    <input v-model="inputBuffer" type="text">
    <button v-on:click="convert">Convert</button>
  </form>
<div>
  <WordsToList3 v-bind:words="sendBuffer" class="WordsToList"/>
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
