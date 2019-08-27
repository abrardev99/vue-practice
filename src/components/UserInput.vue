<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" v-model="userData.email" id="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="userData.password" id="password" class="form-control" />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" v-model="userData.age" id="age" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea v-model="userData.msg" id="message" rows="5" class="form-control"></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <!-- thats how we can get values of checkboxes in an array -->
              <input type="checkbox" id="sendmail" v-model="userData.mailArray" value="SendMail" /> Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                v-model="userData.mailArray"
                value="SendInfoMail"
              /> Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <!-- binding radio button is much similar  -->
            <input type="radio" id="male" v-model="userData.gender" value="Male" /> Male
          </label>
          <label for="female">
            <input type="radio" id="female" v-model="userData.gender" value="Female" /> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <!-- for dropdown v-model should be bind to the select tag not in option. -->
          <select id="priority" class="form-control" v-model="userData.selected">
            <!-- dynamically adding options from array -->
            <option v-for="opt in userData.selectedArray">{{ opt }}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <switched v-model="userData.switchValue"></switched>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- form submission -->
          <button @click.prevent="save" class="btn btn-primary">Submit!</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="userData.isSaved">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <p style="white-space:pre">Message: {{ userData.msg }}</p>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <!-- showing checkbox values from array -->
              <li v-for="items in userData.mailArray">{{ items }}</li>
            </ul>
            <p>Gender: {{ userData.gender }}</p>

            <!-- showing data from drop down -->
            <p>Priority: {{ userData.selected }}</p>
            <p>Switched: {{ userData.switchValue }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switched from "./CustomSwitch";
export default {
  data() {
    // we can initilze each value here, but prefer to make object like
    return {
      userData: {
        email: "",
        password: "",
        age: NaN,
        msg: "",
        // array to get checkbox values
        mailArray: [],
        gender: "male",
        selected: "B",
        selectedArray: ["A", "B", "C"],
        switchValue: false,
        isSaved: false
      }
    };
  },

  methods: {
    save() {
      this.userData.isSaved = true;
      //   we can do whatever with the data, save to server using API etc,
    }
  },
  components: {
    switched: Switched
  }
};
</script>
