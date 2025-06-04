<script>
export default {
  name: "Shop",
  props: {
    id: {
      type: String,
      required: true,
    },
    ordered: {
      type: Number,
      required: true,
    },
  }
}
</script>

<template>
  <div class="shopContainer">
    <div class="item"><span class="shop_header">{{ this.id }}<!--TODO: Here goes the shopID--></span></div>
    <div class="agrupation">
      <div class="item"><img src="../../images/store.png" /></div>
      <div class="order">
        <span class="label">Ordered:</span>
        <span class="number">{{ this.ordered }}<!--TODO: Here goes the shop orders--></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopContainer {
  display: flex;
  flex-direction: column;
  margin: 0 5px 5px 5px;
  
}


.item {
  margin: 2px;
  /* Optional: Adds some space between items */
}

.agrupation{
  background-color: #f9f9f9; /* Background color */
  padding: 10px; /* Add some padding for readability */
  border: 1px solid #ccc; /* Add a border for visual separation */
  border-radius: 5px; /* Rounded corners */
}

.shop_header {
  color: gray;
  font-family: 'Cursive', sans-serif;
  font-size: 15px
}

img {
  width: 30px;
}

.order {
  display: inline-block;
}
</style>