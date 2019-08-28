<template>
  <div class="row">
    <div class="col-6">
      <h3>Mixin Practice</h3>

      <p>{{ text }}</p>
      <br />

      <p>{{ addingSign }}</p>
    </div>
  </div>
</template>


<script>
import { myMixin } from "../MyMixin";

export default {
  data() {
    return {
      text: "Mixin Component"
    };
  },
  mixins: [myMixin]
};
</script>