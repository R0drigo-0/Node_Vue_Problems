<script>
import WordsToList from './WordsToList.vue';

export default {
  name: "P15",
  components: {
    WordsToList
  },
  data() {
    return {
    }
  }
}
</script>

<template>
<div>
  <WordsToList words="Lorem ipsum dolor sit amet" class="WordsToList"/>
</div>
</template>

<style scoped>
div {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  padding-right: 25px;
}
</style>
