<template>
  <div class="app">
    <h3 class="text-centre">Home</h3>
    <p v-if="welcome">
      <b>Welcome:</b>
      {{ email }}
    </p>
  </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      email: "dummy email",
      welcome: false,
      eventbus: eventBus
    };
  },

  // created hook
  created() {
    this.email = this.eventbus.email;
    this.welcome = this.eventbus.welcome;
  },

  mounted() {
    this.eventbus.$on("loginEvent", user => {
      this.eventbus.email = user.email;
      this.eventbus.welcome = true;
      this.eventbus.$emit("value-updated");
    });
  }
};
</script>
<style scoped>
</style>