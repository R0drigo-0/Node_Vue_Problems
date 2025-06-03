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
export default {
  data() {
    return {

    }
  },

}
</script>

<template>
  <div class="sellContainer">
    <!--TODO: Modify the following code to get the units to be sold-->
    <label class="label">Units to sell</label><input type="number"/>
    <button>Sell</button>
    <!--show this div just if no sale is going on and if there has been already a sale and there is remainin stock-->
    <div>
      <span class="label">Units Not Sold: </span>
      <span class="number" style="color:black;">300000</span>
    </div>
    <!--show this div just if the sale has started-->
    <div><span>Sale in progress...</span></div>
  </div>

</template>

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