<template>
  <div class="row">
    <div class="col-12">
      <h3>Filters Practice</h3>
      <!-- using local filters -->
      <p>{{ text | addingDollarSign }}</p>
      <br />
      <!-- using global filters -->
      <!-- <p>{{ text | addingRupeeSign }}</p> -->

      <!-- using mixin -->
      <p>{{ addingSign }}</p>
    </div>
  </div>
</template>
<script>
import { myMixin } from "../MyMixin";
export default {
  mixins: [myMixin],
  data() {
    return {
      text: "2500"
    };
  },

  //   register filter locally
  filters: {
    addingDollarSign(value) {
      return value + "$";
    }
  }
};
</script>