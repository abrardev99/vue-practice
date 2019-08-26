<template>
  <div id="app">
    <h3>Child Component</h3>
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