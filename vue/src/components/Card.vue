<script>
export default {
  name: "Card",
  props: {
    picture: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },	
  }
};
</script>

<template>
  <div class="card">
    <div>
      <img
        v-bind:src="picture"
      />
    </div>
    <div><h1>{{ name }}</h1></div>
    <div>{{ email }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<style scoped>
.card {
  font-family: Roboto;
  text-align: center;
  background: #ffbcbc;
  box-shadow: 6px 6px 8px #888;
  margin: 15px;
}
.card div {
  padding: 10px;
}
.card img {
  width: 100px;
}
</style>
