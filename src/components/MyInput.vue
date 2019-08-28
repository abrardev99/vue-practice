<template>
  <div class="app">
    <div class="row">
      <div class="column">
        Labels
        <h4 v-for="label in labels">{{ label }}</h4>
      </div>
      <div class="column">
        Inputs
        <h3 v-for="type in types">
          <input :type="type" />
        </h3>
      </div>
    </div>

    <!-- <div v-for="label in labels">
      <label>{{ label }}</label>
      <input :type="type" />
    </div>-->
  </div>
</template>
<script>
export default {
  props: {
    labels: [],
    types: []
  }
};
</script>

<style scoped>
.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>