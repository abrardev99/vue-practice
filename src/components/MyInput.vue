<template>
  <div class="app">
    <div class="row">
      <form>
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
        <button type="button">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    labels: [],
    types: []
  },

  data() {
    return {
      name: "Dummy Name"
    };
  },

  methods: {
    submit() {
      console.log(this.values);
    }
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