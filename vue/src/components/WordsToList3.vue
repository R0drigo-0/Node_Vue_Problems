<script>
export default {
  name: "WordsToList3",
  props: {
    words: {
      type: String,
      required: true,
    },
  },
  computed: {
    wordList() {
      if (!this.words) {
        return [];
      }
      return this.words.trim().split(' ')
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="(element, index) in wordList" v-bind:key="index">{{ element }}</li>
  </ul>
</template>

<style scoped></style>
