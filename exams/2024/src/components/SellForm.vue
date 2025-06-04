<!-- Adapt the following code to get the Units Not Sold color
notSold == unitsToSell ? 'red' : (notsold < (unitsToSell*0.5)) ? 'lime' : 'orange'
-->
<!-- Adapt the following code to make a request to the server.
fetch(`http://localhost:3001/wholesale/XX`)
.then(res => res.json()).then(json => {...}).catch(console.log)
-->
<!-- Response from the server after a sale:
  {remainingStock:1, details:[{id:"Shop1",ordered:8},{id:"Shop2",ordered:0}, {id:"Shop3",ordered:1}]}
-->

<script>
// {remainingStock:1,  details:[{id:"Shop1",ordered:9},{id:"Shop2",ordered:0},  {id:"Shop3",ordered:0}]}
export default {
  name: "SellForm",
  props: {
    orders: {
      type: Object,
      required: true,
    },
  },
  emits: ["update:orders"],
  data() {
    return {
      unitsToSell: 0,
      isSellInProgress: false,
    };
  },
  methods: {
    handleSellButton(event) {
      console.log("Sell button clicked with event", event);
      this.isSellInProgress = true;

      fetch(`http://localhost:3001/wholesale/${Number(this.unitsToSell)}`, {})
        .then((res) => res.json())
        .then((data) => {
          this.$emit("update:orders", data);
        })
        .catch((error) => {
          console.error("Error during sale:", error);
        })
        .finally(() => {
          this.isSellInProgress = false;
        });
    },
    getUnitsNotSoldColor() {
      if (!this.orders || this.orders.remainingStock === undefined)
        return "black";
      if (this.orders.remainingStock === this.unitsToSell) return "red";
      if (this.orders.remainingStock < this.unitsToSell * 0.5) return "lime";
      return "orange";
    },
  },
};
</script>

<template>
  <div class="sellContainer">
    <!--TODO: Modify the following code to get the units to be sold-->
    <label class="label">Units to sell</label
    ><input v-model="unitsToSell" type="number" />
    <button v-on:click="handleSellButton">Sell</button>
    <!--show this div just if no sale is going on and if there has been already a sale and there is remainin stock-->
    <div
      v-if="!isSellInProgress && orders && orders.remainingStock !== undefined"
    >
      <span class="label">Units Not Sold: </span>
      <span class="number" v-bind:style="{ color: getUnitsNotSoldColor() }">{{
        orders.remainingStock
      }}</span>
    </div>
    <!--show this div just if the sale has started-->
    <div><span v-if="isSellInProgress">Sale in progress...</span></div>
  </div>
</template>
<!-- Adapt the following code to get the Units Not Sold color
notSold == unitsToSell ? 'red' : (notsold < (unitsToSell*0.5)) ? 'lime' : 'orange'
-->

<style scoped>
div.sellContainer {
  display: inline-block;
  background-color: #d0f5f7; /* Background color */
  border-radius: 5px; /* Rounded corners */
  padding: 10px 10px;
}
div.sellContainer > * {
  margin-right: 3px;
}
</style>
