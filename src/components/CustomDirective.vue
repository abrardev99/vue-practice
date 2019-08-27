<template>
  <div>
    <h3 v-success>New Directive Successfully registered</h3>

    <h3 v-change-color="'blue'">Change color by passing value to custom directive</h3>

    <h3
      v-arg-color:bg="'red'"
    >Change color by passing argument to custom directive. passing bg argument to change bg color</h3>

    <h3
      v-arg-color="'yellow'"
    >Change color by passing argument to custom directive. default is changing color</h3>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>