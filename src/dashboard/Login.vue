<template>
  <div class="app">
    <h3 class="text-centre">Login</h3>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="user.email"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="user.pass"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" @click.prevent="login" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      user: {
        email: "",
        pass: ""
      }
    };
  },

  methods: {
    login() {
      console.log("login button");
      eventBus.$emit("loginEvent", this.user);
    }
  }
};
</script>
<style scoped>
</style>