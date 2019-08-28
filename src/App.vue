<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <h1>{{ msg }}</h1>
    <!-- <h1>{{ msg }}</h1>
    <h3>{{ name }}</h3>
    <button @click="change">Change</button>
    <hr />
    <childapp :name="name" @changeName="revert"></childapp>
    <hr />
    <childapp2></childapp2>-->

    <!-- // switching components on button click -->

    <!-- <button @click="switchComp">Switch Components</button>
    <component :is="activeComp"></component>

    <hr />
    <userinput></userinput>-->

    <!-- custom directive  -->
    <!-- <customdirective></customdirective>
    <hr />
    <br />-->
    <!-- 
    <filterpractice></filterpractice>
    <mixin></mixin>-->

    <input type="text" name id placeholder="Enter Lable" v-model="label" />
    <select name id v-model="type">
      <option>text</option>
      <option>file</option>
      <option>radio</option>
    </select>
    <button @click.prevent="submit">Generate</button>
    <hr />
    <br />
    <br />
    <inputcom :labels="labels" :types="types"></inputcom>
  </div>
</template>

<script>
import ChildApp from "./components/ChildApp";
import ChildApp2 from "./components/childApp2";
import { eventBus } from "./main";

// importing user input component
import userInput from "./components/UserInput";
import CustomDirective from "./components/CustomDirective";
import FilterPractice from "./components/FilterPractice";
import FilterPracticeVue from "./components/FilterPractice.vue";
import MixinPractice from "./components/MixinPractice";
import InputCom from "./components/MyInput";

export default {
  data() {
    return {
      msg: "Parent Componet",
      name: "",
      activeComp: "childapp",
      msg: "Welcome to Your Vue.js App",
      labels: ["Name", "Image", "Gender"],
      types: ["text", "file", "radio"],
      label: "Name",
      type: "text"
    };
  },
  methods: {
    submit() {
      this.labels.unshift(this.label);
      this.types.unshift(this.type);
    },

    change() {
      this.name = "Parent change the name";
    },

    // execute function based on custom event capture from child component
    revert($event) {
      this.name = $event;
    },

    // switching components on button click
    switchComp() {
      if (this.activeComp == "childapp") {
        this.activeComp = "childapp2";
      } else if (this.activeComp == "childapp2") {
        this.activeComp = "childapp";
      }
    }
  },
  components: {
    childapp: ChildApp,
    childapp2: ChildApp2,
    userinput: userInput,
    customdirective: CustomDirective,
    filterpractice: FilterPracticeVue,
    mixin: MixinPractice,
    inputcom: InputCom
  },

  created() {
    eventBus.$on("changeSibling", data => {
      alert(data);
    });
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
