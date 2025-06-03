<script>
export default {
  name: "P1",
  data() {
    return {
      counter: 0,
      timerInterval: null,
    }
  },
  beforeMount() {
    this.timerInterval = setInterval(() => {
      this.counter++;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);
  }
}
</script>

<template>
  <div>
    <span>{{ this.counter }}</span>
  </div>
</template>

<style scoped>
span {
  font-size: 20px;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  min-height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
