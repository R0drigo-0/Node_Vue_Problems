<script>
import Cell from './components/Cell.vue';

export default {
  name: 'App',
  components: {
    Cell
  },
  data() {
    return {
      playerId: 0,
      gameWinner: null,
      message: ''
    };
  },
  methods: {
    gameFinished(playerWhoWon) {
      this.gameWinner = playerWhoWon;
    },
    cellIndexToColumn(index) {
      return (index - 1) % 3;
    },
    cellIndexToRow(index) {
      const column = this.cellIndexToColumn(index);
      return (index - 1 - column) / 3;
    },    
  },
  mounted() {
    this.playerId = parseInt(Math.random() * 999999);
  }
};
</script>

<template>
  <p v-if="playerId">Player id: {{ playerId }}</p>
  <div id="grid">
  <!--TODO: 1) Pass the gameWinner as a prop to the Cell component so  
  the Cell component fulfills it and the gameWinner is updated in the parent. 
  You can use v-model directive.
  -->
  <!--TODO: 2) React to the event 'message' and store the event parameter 
  in the reactive variable 'message'-->
    <Cell
      v-for="index in 9"
      :key="`cell-${index}`"
      :row="cellIndexToRow(index)"
      :column="cellIndexToColumn(index)"
      :playerId="playerId"
    />
  </div>
  <!--TODO: Just show when there is a winner and if the gameWinner == playerId show 'YOU WON!' else 'YOU LOST!'-->
  <p>'YOU WON!'/'YOU LOST!'</p>
  <!--TODO: Just show when there is a message. When the button is clicked set the message to undefined. -->
  <div id="message"><span>Here goes a message or nothing</span><button>Ok</button></div>
</template>

<style>
#grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
}

#message{
  display: inline-block
}
</style>
