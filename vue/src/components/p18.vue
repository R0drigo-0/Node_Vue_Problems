<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      person: {
        name: "My Name",
        picture: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM82Mz1HwAFqgJP3gasfwAAAABJRU5ErkJggg==`,
        email: "me@somerandomdomain.com",
        phone: "+00 00 000 0000",
      },
    };
  },
};
</script>

<template>
  <div style="display: flex">
    <Card
      v-bind:name="person.name"
      v-bind:picture="person.picture"
      v-bind:email="person.email"
      v-bind:phone="person.phone"
    />
  </div>
</template>

<style scoped></style>
