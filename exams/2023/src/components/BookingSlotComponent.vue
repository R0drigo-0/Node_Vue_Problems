<script>
export default {
  name: "BookingSlotComponent",
  props: {
    bikeId: {
      type: Number,
      required: true,
    },
    slotId: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isClicked: false,
      bookedStatus: undefined,
      backgroundColor: "",
    };
  },
  methods: {
    handleClick() {
      if (!this.isClicked && !this.modelValue) {
        this.isClicked = true;
        this.backgroundColor = "yellow";
        this.bookBike();
      }
    },
    bookBike() {
      fetch(
        `http://localhost:3001/book?bikeId=${this.bikeId}&slotId=${this.slotId}`
      )
        .then((res) => {
          return res.text();
        })
        .then((res) => {
          if (res === "booked") {
            this.backgroundColor = "green";
            this.$emit("update:modelValue", true);
            this.bookedStatus = "booked";
          } else if (res === "rejected") {
            this.backgroundColor = "red";
            this.bookedStatus = "rejected";
          } else {
            console.error("Unexpected response:", res);
            this.bookedStatus = "error";
          }
        })
        .catch((err) => {
          this.backgroundColor = "red";
          console.error("Error booking bike:", err);
        });
    },
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        if (newVal && !this.isClicked) {
          this.backgroundColor = "gray";
        }
      },
    },
  },
};
</script>

<template>
  <div>
    <span
      v-on:click="handleClick"
      v-bind:style="{ backgroundColor: backgroundColor }"
      >Bike:{{ bikeId }} Slot:{{ slotId }}</span
    >
  </div>
</template>

<style></style>
