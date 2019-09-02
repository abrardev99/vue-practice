<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="fetchData">Fetch All Data</button>
    <button @click="fetchSpecificData">Fetch Specific</button>
    <button @click="saveData">Save Data</button>
  </div>
</template>

<script>
// axios installed globally
import axs from "axios";
export default {
  name: "app",
  data() {
    return {
      msg: ""
    };
  },

  methods: {
    fetchSpecificData() {
      axs.get("/2").then(res => {
        console.log(res.data.data.email);
      });
    },

    fetchData() {
      axs.get("").then(res => {
        var res = res.data.data;
        res.forEach(element => {
          console.log(element.email + " " + element.first_name);
        });
      });
    },

    saveData() {
      axs
        .post("", {
          email: "abrar@gmail.com",
          first_name: "Abrar",
          last_name: "Ahmad"
        })
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>
