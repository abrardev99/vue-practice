<template>
  <div id="app">
    <h3>Child Component</h3>
    <button @click="change">Change</button>
    <p>{{ name }}</p>
  </div>
</template>


<script>
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