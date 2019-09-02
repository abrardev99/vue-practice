<template>
  <div class="app">
    <h3>Http Practice</h3>
    <div>
      <button class="btn btn-success" @click="saveData">Save Data</button>
      <hr />
      <button class="btn btn-primary" @click="updateData">Update</button>
      <hr />
      <button class="btn btn-danger" @click="deleteData">Delete</button>
      <hr />
      <button class="btn btn-primary" @click="fetchData">Fetch Data</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">URL</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(id, index) in ids">
            <td>{{ id }}</td>
            <td>{{ userIds[index] }}</td>
            <td>{{ titles[index] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ids: [],
      userIds: [],
      titles: []
    };
  },
  methods: {
    fetchData() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          response.body.forEach(element => {
            this.ids.push(element.id);
            this.userIds.push(element.userId);
            this.titles.push(element.title);
          });
        });
    },

    saveData() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: "new title",
          body: "new body",
          userId: 1
        })

        .then(response => {
          //   debugger;
          this.ids.unshift(response.body.id);
          this.userIds.unshift(response.body.userId);
          this.titles.unshift(response.body.title);
          console.log(response.body);
        });
    },

    updateData() {
      this.$http
        .put("https://jsonplaceholder.typicode.com/posts/1", {
          id: 1,
          title: "Update Title title",
          body: "Update new body",
          userId: 1
        })
        .then(response => {
          this.ids.unshift(response.body.id);
          this.userIds.unshift(response.body.userId);
          this.titles.unshift(response.body.title);
          console.log(response.body);
        });
    },

    deleteData() {
      this.$http
        .delete("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
          console.log(response.status);
        });
    },

    fetchAnother() {
      this.$http
        .get(
          "https://gorest.co.in/public-api/photos?_format=json&access-token=caiQscesyLgnJLjfGLizSfZDCSGtF_BTObfN"
        )
        .then(response => {
          if (response.body._meta.code == "200") {
            var $res = response.body.result;
            $res.forEach(element => {
              this.ids.push(element.id);
              this.userIds.push(element.url);
              this.titles.push(element.title);
            });
          } else {
            console.log("Resurce not found");
          }
        });
    }
  }
};
</script>