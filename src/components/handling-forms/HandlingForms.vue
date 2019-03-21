<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <input
                id="email"
                v-model="userData.email"
                type="text"
                class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
                id="password"
                v-model="userData.password"
                type="password"
                class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
                id="age"
                v-model="userData.age"
                type="number"
                class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="message">Message</label><br />
          <textarea
              id="message"
              v-model="message"
              rows="5"
              class="form-control"
              placeholder="Message text..."
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="form-group">
            <label for="sendmail">
              <input
                  id="sendmail"
                  v-model="sendMail"
                  type="checkbox"
                  value="SendMail"
              />
              Send Mail
            </label>
            <label for="sendInfomail">
              <input
                  id="sendInfomail"
                  v-model="sendMail"
                  type="checkbox"
                  value="SendInfomail"
              />
              Send Infomail
            </label>
            <!-- Also show for single checkbox with true/false -->
          </div>
        </div>
      </div>
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="male">
            <input id="male" v-model="gender" type="radio" value="male" />
            Male
          </label>
          <label for="female">
            <input id="female" v-model="gender" type="radio" value="female" />
            Female
          </label>
        </div>
      </div>

      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="priority">Priority</label><br />
          <select id="priority" v-model="selectedPriority" class="form-control">
            <option v-for="priority in priorities" :key="priority">{{
              priority
              }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <app-switch
              v-model="dataSwitch"
              :value="dataSwitch"
              @input="dataSwitch = $event"
          ></app-switch>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
        </div>
      </div>
    </form>
    <hr />
    <div v-if="isSubmitted" class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <h4>Your Data</h4>
        </div>
        <div class="panel-body">
          <p>Mail: {{ userData.email }}</p>
          <p>Password: {{ userData.password }}</p>
          <p>Age: {{ userData.age }}</p>
          <p style="white-space: pre;">Message: {{ message }}</p>
          <p><strong>Send Mail?</strong></p>
          <ul>
            <li v-for="item in sendMail" :key="item">{{ item }}</li>
          </ul>
          <p>Gender: {{ gender }}</p>
          <p>Priority: {{ selectedPriority }}</p>
          <p>Switched: {{ dataSwitch }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSwitch from './form-components/AppSwitch';

export default {
  name: 'HandlingForms',
  components: {
    AppSwitch,
  },
  data() {
    return {
      userData: {
        email: '',
        password: '',
        age: 27,
      },
      message: '',
      sendMail: [],
      gender: 'male',
      selectedPriority: 'Low',
      priorities: ['High', 'Medium', 'Low'],
      dataSwitch: true,
      isSubmitted: false,
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    },
  },
};
</script>

<style scoped></style>
