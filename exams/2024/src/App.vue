<script>
import Shop from './components/Shop.vue'
import SellForm from './components/SellForm.vue'
export default {
  components: {
    Shop,
    SellForm,
  },
  data() {
    return {
      orders: undefined,
    }
  },

}
</script>
<template>
  <div class="main">
    <div class="titleContainer"><img src="../jeans.png" class="logo"><span class="title">GJeans Whole Sale</span></div>
    <div class="item"><SellForm v-model="orders" /></div>
    <!--TODO: Show this div just if we have orders -->
    <div class="item"><h3>Retail Chain</h3></div>
    <!--TODO: Show this div just if we have orders-->
    <div class="container">
      <!--TODO: Use the Shop component for each shop in the orders: 
        v-for="item in items" or v-for="(item,index) in items"
      -->
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}

.item {
  margin: 5px 0;
  /* Optional: Adds some space between items */
}

.container {
  display: flex;
  flex-direction: row;
  background-color: #d0f7e1;
  /* Background color */
  border-radius: 5px;
  /* Rounded corners */
  width: fit-content;
  /* Make width fit the content */
  padding: 10px;
  /* Optional: Adds some padding around the content */
}

.titleContainer {
  display: inline-flex;
  align-items: center;
  background-color: #4669f2;
  /* Background color */
  border-radius: 5px;
  /* Rounded corners */
  padding: 10px;
  /* Optional: Adds some padding around the content */
}

.logo {
  width: 50px;
  /* Adjust the size as needed */
  height: 50px;
  /* Adjust the size as needed */
  margin-right: 10px;
  /* Space between the image and text */
}

.title {
  font-size: 20px;
  /* Adjust the font size as needed */
  color: #333;
  /* Text color */
}
</style>