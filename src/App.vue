<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h3>{{ name }}</h3>
    <button @click="change">Change</button>
    <hr />
    <childapp :name="name" @changeName="revert"></childapp>
  </div>
</template>

<script>
import ChildApp from "./components/ChildApp";

export default {
  data() {
    return {
      msg: "Parent Componet",
      name: ""
    };
  },
  methods: {
    change() {
      this.name = "Parent change the name";
    },

    // execute function based on custom event capture from child component
    revert($event) {
      this.name = $event;
    }
  },
  components: {
    childapp: ChildApp
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
