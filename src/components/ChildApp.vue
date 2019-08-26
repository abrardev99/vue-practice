<template>
  <div id="app">
    <h3>Child Component</h3>
    <button @click="change">Change</button>
    <button @click="change1">Change to Child 1</button>
    <p>{{ name }}</p>
  </div>
</template>


<script>
import { eventBus } from "../main";
export default {
  //   what if we want some calculation on data change.then use watch
  props: {
    name: {
      default: "dummyName"
    }
  },

  methods: {
    //   comm with parent
    change() {
      this.$emit("changeName", "Name from Child");
    },

    // comm with siblings using event bus.
    change1() {
      eventBus.$emit("changeSibling", "ChildApp Changed the name");
    }
  },

  watch: {
    name: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler(val, oldVal) {
        console.log(val);
        console.log(oldVal);
      }
    }
  }
};
</script>

<style scoped>
h3 {
  color: brown;
}
</style>