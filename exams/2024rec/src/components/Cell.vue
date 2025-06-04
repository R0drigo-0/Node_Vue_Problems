<!--
Adapt the following request to the server's end point 
fetch(`http://localhost:3001/cell_click?playerId=11111&row=0&column=0`)
          .then(res => {this.status=res.status; return res.json()})
          .then(json => { ... })
          .catch(() => { ... })
-->
<!-- server replies: {gameWinner: null, token: X} or {gameWinner: XXX, token: X} or {gameWinner: XXX} -->

<!--TODO: 1) When the div is clicked request to the server the end point /cell_click -->
<!--TODO: 2) While waiting for a response show '...' in the cell -->
<!--TODO: 3) Clicking on the cell will have no effect if we are already performing a request, or 
there is already a winner or there is a token in the cell. -->
<!--TODO: 4) When the server returns status 400 (cell not empty) show a red boder in the cell: style="border: 2px solid red"-->
<!--TODO: 5) When the server returns status 401 (not your turn) emit the event 'message' with the parameter: 'It is not your turn' -->
<template>
  <div
    class="cellExterior"
    v-bind:style="{ border: getBorderStyle() }"
    v-on:click="handleClick"
  >
    <!-- TODO: Show the token in the paragraph -->
    <p v-if="isFetchProgressing">...</p>
    <p v-else-if="token && !isFetchProgressing">{{ token }}</p>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    row: {
      type: Number,
      required: true,
    },
    column: {
      type: Number,
      required: true,
    },
    playerId: {
      type: Number,
      required: true,
    },
    gameWinner: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      token: undefined,
      status: 200, //200: OK, 400: not empty cell, 401: not your turn
      isFetchProgressing: false,
    };
  },
  methods: {
    getBorderStyle() {
      if (this.status === 400) {
        return "2px solid red";
      } else {
        return "1px solid black";
      }
    },
    handleClick() {
      if (
        this.isFetchProgressing ||
        this.status !== 200 ||
        this.gameWinner ||
        this.token
      ) {
        return;
      }

      this.isFetchProgressing = true;
      fetch(
        `http://localhost:3001/cell_click?playerId=${this.playerId}&row=${this.row}&column=${this.column}`
      )
        .then((res) => {
          this.status = res.status;
          return res.json();
        })
        .then((json) => {
          if (json.gameWinner) {
            this.$emit("update:gameWinner", json.gameWinner);
          }

          if (json.token) {
            this.token = json.token;
            this.$emit("update:token", this.token);
          }
        })
        .catch(() => {
          console.error("Error fetching cell click");
        })
        .finally(() => {
          this.isFetchProgressing = false;
        });
    },
  },
  watch: {
    status() {
      if (this.status === 401) {
        this.$emit("message", "It is not your turn");
      }
    },
  },
};
</script>

<style>
.cellExterior {
  margin: 5px;
  width: 28%;
  word-wrap: break-word;
  height: 80px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

p {
  align-self: center;
  font-size: 30px;
}
</style>
