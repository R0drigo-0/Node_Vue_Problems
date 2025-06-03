<!--App.vue-->
<script>
import p1 from "./components/p1.vue";
import p2 from "./components/p2.vue";
import p3 from "./components/p3.vue";
import p4 from "./components/p4.vue";
import p5 from "./components/p5.vue";
import p6 from "./components/p6.vue";
import p7 from "./components/p7.vue";
import p8 from "./components/p8.vue";
import p9 from "./components/p9.vue";
import p10 from "./components/p10.vue";
import p11 from "./components/p11.vue";
import p12own from "./components/p12own.vue";
import p12 from "./components/p12own.vue";
import p13 from "./components/p13.vue";
import p14 from "./components/p14.vue";
import p15 from "./components/p15.vue";
import p16 from "./components/p16.vue";
import p17 from "./components/p17.vue";
import p18 from "./components/p18.vue";
import p19 from "./components/p19.vue";
import p20 from "./components/p20.vue";
import p21 from "./components/p21.vue";
import p22 from "./components/p22.vue";
export default {
  name: "App",
  components: {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12own,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22,
  },
};
</script>

<template>
  <div id="app">
    <p1 />
    <p2 />
    <p3 />
    <p4 />
    <p5 />
    <p6 />
    <p7 />
    <p8 />
    <p9 />
    <p10 />
    <p11 />
    <p12own />
    <p12 />
    <p13 />
    <p14 />
    <p15 />
    <p16 />
    <p17 />
    <p18 />
    <p19 />
    <p20 />
    <p21 />
    <p22 />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  gap: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

#app > * {
  margin: 10px;
}
</style>

<!--P1-->
<script>
export default {
  name: "P1",
  data() {
    return {
      counter: 0,
      timerInterval: null,
    };
  },
  beforeMount() {
    this.timerInterval = setInterval(() => {
      this.counter++;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);
  },
};
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

<!--P2-->
<script>
export default {
  name: "P2",
  data() {
    return {
      a: 0,
      b: 0,
    };
  },
  computed: {
    addition() {
      return Number(this.a) + Number(this.b);
    },
  },
};
</script>

<template>
  <form>
    <input v-model="a" type="number" />
    <input v-model="b" type="number" />
    <span>{{ this.addition }}</span>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<!--P3-->
<script>
export default {
  name: "P3",
  data() {
    return {
      active: true,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<template>
  <button v-if="active" v-on:click="toggle">Click me!</button>
</template>

<style scoped>
button {
  border: 1px solid #cecece;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>

<!--P4-->
<script>
export default {
  name: "P3",
  data() {
    return {
      active: true,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<template>
  <button v-on:click="toggle" v-bind:disabled="!active">Click me!</button>
</template>

<style scoped>
button {
  border: 1px solid #cecece;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>

<!--P5-->
<script>
export default {
  name: "P5",
  data() {
    return {
      buffer: "",
    };
  },
  watch: {
    buffer(val) {
      if (val.length >= 5) {
        this.buffer = "";
      }
    },
  },
};
</script>

<template>
  <form>
    <input type="text" v-model="buffer" />
  </form>
</template>

<style scoped></style>

<!--P6-->
<script>
export default {
  name: "P6",
  data() {
    return {
      buffer: "",
      isRedBg: false,
    };
  },
  methods: {
    setRedBg() {
      this.isRedBg = true;
    },
    unsetRedBg() {
      this.isRedBg = false;
    },
  },
};
</script>

<template>
  <form>
    <input
      type="text"
      v-model="buffer"
      v-bind:style="{ backgroundColor: isRedBg ? 'red' : '' }"
      v-on:keydown="setRedBg"
      v-on:keyup="unsetRedBg"
    />
  </form>
</template>

<style scoped></style>

<!--P7-->
<script>
export default {
  name: "P6",
  data() {
    return {
      buffer: "",
      isRedBg: false,
    };
  },
  methods: {
    setRedBg() {
      this.isRedBg = true;
    },
    unsetRedBg() {
      this.isRedBg = false;
    },
  },
};
</script>

<template>
  <form>
    <input
      type="text"
      v-model="buffer"
      :class="{ pressed: isRedBg, released: !isRedBg }"
      v-on:keydown="setRedBg"
      v-on:keyup="unsetRedBg"
    />
  </form>
</template>

<style scoped>
input.pressed {
  background-color: red;
}
input.released {
  background-color: aqua;
}
</style>

<!--P8-->
<script>
export default {
  name: "P8",
  data() {
    return {
      x: 0,
    };
  },
};
</script>

<template>
  <div>
    <div v-bind:style="{ color: `hsl(0,${x}%,50%)` }">AM I RED?</div>
    <input v-model="x" type="range" min="0" max="100" />
    <div v-if="x < 33">NO!</div>
    <div v-else>YES!</div>
  </div>
</template>

<style scoped></style>

<!--P9-->
<script>
export default {
  name: "P9",
  data() {
    return {
      a: false,
      b: false,
      c: false,
      d: false,
    };
  },
  watch: {
    a(newValue) {
      this.b = newValue;
    },
    b(newValue) {
      this.c = newValue;
    },
    c(newValue) {
      this.d = newValue;
    },
  },
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="a" id="inputCheckbox" />
    <label for="inputCheckbox"> {{ a }}</label>
    <label for="inputCheckbox"> {{ b }}</label>
    <label for="inputCheckbox"> {{ c }}</label>
    <label for="inputCheckbox"> {{ d }}</label>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
div > label {
  margin-right: 5px;
}
</style>

<!--P10-->
<script>
export default {
  name: "P10",
  data() {
    return {
      root: false,
    };
  },
  computed: {
    a: {
      get() {
        return this.root;
      },
      set(val) {
        this.root = val;
      },
    },
    b() {
      return this.a;
    },
    c() {
      return this.a;
    },
    d() {
      return this.a;
    },
  },
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="a" id="inputCheckbox2" />
    <label for="inputCheckbox2">{{ a }}</label>
    <label for="inputCheckbox2">{{ b }}</label>
    <label for="inputCheckbox2">{{ c }}</label>
    <label for="inputCheckbox2">{{ d }}</label>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
div > label {
  margin-right: 5px;
}
</style>

<!--P11-->
<script>
export default {
  name: "P11",
  data() {
    return {
      phone_books: [
        { name: "Jaime Sommers", phone: "311-555-2368" },
        { name: "Ghostbusters", phone: "555-2368" },
        { name: "Mr. Plow", phone: "636-555-3226" },
        { name: "Gene Parmesan: Private Eye", phone: "555-0113" },
        { name: "The A-Team", phone: "555-6162" },
      ],
    };
  },
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in phone_books" v-bind:key="index">
        <td>{{ entry.name }}</td>
        <td>{{ entry.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
table th,
td {
  border: 1px solid black;
}
</style>

<!--P12-->
<script>
export default {
  name: "P12",
  data() {
    return {
      phone_books: [
        { name: "Jaime Sommers", phone: "311-555-2368" },
        { name: "Ghostbusters", phone: "555-2368" },
        { name: "Mr. Plow", phone: "636-555-3226" },
        {
          name: "Gene Parmesan: Private Eye",
          phone: "555-0113",
        },
        { name: "The A-Team", phone: "555-6162" },
      ],
    };
  },
  methods: {
    deleteEntry(index) {
      this.phone_books.splice(index, 1);
    },
  },
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in phone_books" v-bind:key="index">
        <td>{{ entry.name }}</td>
        <td>{{ entry.phone }}</td>
        <td>
          <button v-on:click="deleteEntry(index)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
table th,
td {
  border: 1px solid black;
}
</style>

<!--P12own-->
<script>
export default {
  name: "P12",
  data() {
    return {
      phone_books: [
        { isDeleted: false, name: "Jaime Sommers", phone: "311-555-2368" },
        { isDeleted: false, name: "Ghostbusters", phone: "555-2368" },
        { isDeleted: false, name: "Mr. Plow", phone: "636-555-3226" },
        {
          isDeleted: false,
          name: "Gene Parmesan: Private Eye",
          phone: "555-0113",
        },
        { isDeleted: false, name: "The A-Team", phone: "555-6162" },
      ],
    };
  },
  methods: {
    deleteEntry(entry) {
      entry.isDeleted = true;
    },
  },
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(entry, index) in phone_books.filter(
          (entry) => !entry.isDeleted
        )"
        v-bind:key="index"
      >
        <td>{{ entry.name }}</td>
        <td>{{ entry.phone }}</td>
        <td>
          <button v-on:click="deleteEntry(entry)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
table th,
td {
  border: 1px solid black;
}
</style>

<!--P13-->
<script>
export default {
  name: "P13",
  data() {
    return {
      state: 0,
    };
  },
  watch: {
    state(newState) {
      if (newState == 3) {
        this.state = 0;
      }
    },
  },
  methods: {
    handleClick() {
      this.state++;
    },
  },
};
</script>

<template>
  <div class="trafficlight">
    <div class="light" v-bind:class="state == 2 ? 'redOn' : 'redOff'"></div>
    <div
      class="light"
      v-bind:class="state == 1 ? 'yellowOn' : 'yellowOff'"
    ></div>
    <div class="light" v-bind:class="state == 0 ? 'greenOn' : 'greenOff'"></div>
    <button v-on:click="handleClick">Switch</button>
  </div>
</template>

<style scoped>
div.trafficlight {
  display: inline-block;
  width: 30px;
}
div.light {
  height: 30px;
}
div.redOn {
  background-color: red;
}
div.redOff {
  background-color: indianred;
}
div.yellowOn {
  background-color: yellow;
}
div.yellowOff {
  background-color: khaki;
}
div.greenOn {
  background-color: lime;
}
div.greenOff {
  background-color: seagreen;
}
</style>

<!--P14-->
<script>
export default {
  name: "P14",
  data() {
    return {
      state: 0,
    };
  },
  methods: {
    handleClick() {
      this.state = (this.state + 1) % 3;
    },
    getLightColor(light) {
      if (light === "red") return this.state === 2 ? "red" : "indianred";
      if (light === "yellow") return this.state === 1 ? "yellow" : "khaki";
      if (light === "green") return this.state === 0 ? "lime" : "seagreen";
    },
  },
};
</script>

<template>
  <div style="display: inline-block; width: 30px">
    <div
      v-bind:style="{ height: '30px', backgroundColor: getLightColor('red') }"
    ></div>
    <div
      v-bind:style="{
        height: '30px',
        backgroundColor: getLightColor('yellow'),
      }"
    ></div>
    <div
      v-bind:style="{ height: '30px', backgroundColor: getLightColor('green') }"
    ></div>
    <button v-on:click="handleClick">Switch</button>
  </div>
</template>

<style scoped>
div.trafficlight {
  display: inline-block;
  width: 30px;
}
div.light {
  height: 30px;
}
</style>

<!--P15-->
<script>
import WordsToList from "./WordsToList.vue";

export default {
  name: "P15",
  components: {
    WordsToList,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <WordsToList words="Lorem ipsum dolor sit amet" class="WordsToList" />
  </div>
</template>

<style scoped>
div {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  padding-right: 25px;
}
</style>

<!--WordsToList.vue-->
<script>
export default {
  name: "WordsToList",
  props: {
    words: {
      type: String,
      required: true,
    },
  },
  computed: {
    wordList() {
      return this.words.trim().split(" ");
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="(element, index) in wordList" v-bind:key="index">
      {{ element }}
    </li>
  </ul>
</template>

<style scoped></style>

<!--P16-->
<script>
import WordsToList2 from "./WordsToList2.vue";

export default {
  name: "P16",
  components: {
    WordsToList2,
  },
  data() {
    return {
      buffer: "",
    };
  },
};
</script>

<template>
  <form action="">
    <input v-model="buffer" type="text" />
  </form>
  <div>
    <WordsToList2 v-bind:words="buffer" class="WordsToList" />
  </div>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0 !important;
}
input {
  width: 172px;
}
div {
  margin-top: 0 !important;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  padding-right: 25px;
}
</style>

<!--WordsToList2.vue-->
<script>
export default {
  name: "WordsToList2",
  props: {
    words: {
      type: String,
      required: true,
    },
  },
  computed: {
    wordList() {
      if (!this.words) {
        return [];
      }
      return this.words.trim().split(" ");
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="(element, index) in wordList" v-bind:key="index">
      {{ element }}
    </li>
  </ul>
</template>

<style scoped></style>

<!--P17-->
<script>
import WordsToList3 from "./WordsToList3.vue";

export default {
  name: "P17",
  components: {
    WordsToList3,
  },
  data() {
    return {
      inputBuffer: "",
      sendBuffer: "",
    };
  },
  methods: {
    convert(event) {
      event.preventDefault();
      this.sendBuffer = this.inputBuffer;
    },
  },
};
</script>

<template>
  <form action="">
    <input v-model="inputBuffer" type="text" />
    <button v-on:click="convert">Convert</button>
  </form>
  <div>
    <WordsToList3 v-bind:words="sendBuffer" class="WordsToList" />
  </div>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0 !important;
}
input {
  width: 112px;
}
div {
  margin-top: 0 !important;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  padding-right: 25px;
}
</style>

<!--WordsToList3.vue-->
<script>
export default {
  name: "WordsToList3",
  props: {
    words: {
      type: String,
      required: true,
    },
  },
  computed: {
    wordList() {
      if (!this.words) {
        return [];
      }
      return this.words.trim().split(" ");
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="(element, index) in wordList" v-bind:key="index">
      {{ element }}
    </li>
  </ul>
</template>

<style scoped></style>

<!--P18-->
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

<!--Card-->
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
  },
};
</script>

<template>
  <div class="card">
    <div>
      <img v-bind:src="picture" />
    </div>
    <div>
      <h1>{{ name }}</h1>
    </div>
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

<!--P19-->
<script>
import SwitchButton from "./SwitchButton.vue";
export default {
  name: "P19",
  components: {
    SwitchButton,
  },
  data() {
    return {
      state: "on",
    };
  },
};
</script>

<template>
  <div>
    <SwitchButton
      v-on:on="
        () => {
          this.state = 'on';
        }
      "
      v-on:off="
        () => {
          this.state = 'off';
        }
      "
    />
    <p>Just turned {{ state }}</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
p {
  margin-left: 10px;
  font-size: 20px;
}
</style>

<!--SwitchButton.vue-->
<script>
export default {
  name: "SwitchButton",
  emits: ["on", "off"],
  data() {
    return {
      isOnEnabled: true,
      isOffEnabled: false,
    };
  },
  methods: {
    handleOn() {
      this.isOnEnabled = !this.isOnEnabled;
      this.isOffEnabled = !this.isOffEnabled;
      this.$emit("on");
    },
    handleOff() {
      this.isOnEnabled = !this.isOnEnabled;
      this.isOffEnabled = !this.isOffEnabled;
      this.$emit("off");
    },
  },
};
</script>

<template>
  <div>
    <button v-on:click="handleOn" v-bind:disabled="isOnEnabled">ON</button>
    <button v-on:click="handleOff" v-bind:disabled="isOffEnabled">OFF</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 3px solid black;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

<!--P20-->
<script>
import ColorSelector from "./ColorSelector.vue";
export default {
  name: "P20",
  components: {
    ColorSelector,
  },
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
    };
  },
};
</script>

<template>
  <div id="main">
    <!-- Here goes the child component -->
    <ColorSelector
      v-on:red="
        (val) => {
          red = val;
        }
      "
      v-on:green="
        (val) => {
          green = val;
        }
      "
      v-on:blue="
        (val) => {
          blue = val;
        }
      "
    />
    <div v-bind:style="{ color: `rgb(${red}, ${green}, ${blue})` }">TEXT</div>
  </div>
</template>

<style scoped>
#main {
  border: solid red;
  display: flex;
}
</style>

<!--ColorSelector.vue-->
<script>
export default {
  name: "ColorSelector",
  emits: ["red", "green", "blue"],
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
    };
  },
};
</script>

<template>
  <div id="component">
    <div
      id="box"
      v-bind:style="{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }"
    ></div>
    <div id="inputs">
      <div>
        R:
        <input
          v-model="red"
          type="range"
          min="0"
          max="255"
          v-on:input="$emit('red', Number(red))"
        />
        red value
      </div>
      <div>
        G:
        <input
          v-model="green"
          type="range"
          min="0"
          max="255"
          v-on:input="$emit('green', Number(green))"
        />
        green value
      </div>
      <div>
        B:
        <input
          v-model="blue"
          type="range"
          min="0"
          max="255"
          v-on:input="$emit('blue', Number(blue))"
        />
        blue value
      </div>
    </div>
  </div>
</template>

<style scoped>
#component {
  border: solid;
  display: flex;
}
#box {
  background-color: #000;
  width: 110px;
  height: 110px;
}
#inputs {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>

<!--P21-->
<script>
import DoubleCheckbox from "./DoubleCheckbox.vue";
export default {
  name: "P21",
  data() {
    return {
      isChecked: false,
    };
  },
  components: {
    DoubleCheckbox,
  },
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="isChecked" />
    <DoubleCheckbox v-model:isChecked="isChecked" />
  </div>
</template>

<style scoped></style>

<!--DoubleCheckbox.vue-->
<script>
export default {
  name: "DoubleCheckbox",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:isChecked"],
  data() {
    return {
      box1: false,
      box2: false,
    };
  },
  watch: {
    isChecked(newVal) {
      this.box1 = newVal;
      this.box2 = newVal;
    },
    box1() {
      this.emitState();
    },
    box2() {
      this.emitState();
    },
  },
  mounted() {
    this.box1 = this.isChecked;
    this.box2 = this.isChecked;
  },
  methods: {
    emitState() {
      this.$emit("update:isChecked", this.box1 && this.box2);
    },
  },
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="box1" />
    <input type="checkbox" v-model="box2" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  border: 2px solid black;
}
</style>

<!--P22-->
<script>
import MagicInput from "./MagicInput.vue";
export default {
  name: "P22",
  components: {
    MagicInput,
  },
  data() {
    return {
      text: "",
      buffer: "",
    };
  },
};
</script>

<template>
  <div>
    <MagicInput v-model="buffer" />
    <input v-model="text" type="text" placeholder="Normal Input" />
    <span v-if="buffer">Buffer: {{ this.buffer }}</span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
</style>

<!--MagicInput.vue-->
<script>
export default {
  name: "MagicInput",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  computed: {
    displayValue() {
      if (!this.modelValue) {
        return "";
      }
      return this.modelValue.replace(/./g, (x) =>
        x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()
      );
    },
  },
  methods: {
    onInput(e) {
      const switched = e.target.value.replace(/./g, (x) =>
        x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()
      );
      this.$emit("update:modelValue", switched);
    },
  },
};
</script>

<template>
  <input
    type="text"
    :value="displayValue"
    @input="onInput"
    placeholder="Magic Input"
  />
</template>

<style scoped></style>
