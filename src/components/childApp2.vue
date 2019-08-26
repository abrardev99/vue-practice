<template>
  <div>
    <h3>Child App 3</h3>
    <p>{{ name }}</p>
    <h5>{{childName }}</h5>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    name: {
      default: "default name"
    }
  },

  data: function() {
    return {
      childName: "Name from Child"
    };
  },

  //   to capture event from child
  created() {
    eventBus.$on("changeSibling", data => {
      this.childName = data;
    });
  }
};
</script>

<style scoped>
</style>