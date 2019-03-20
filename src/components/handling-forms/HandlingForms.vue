<template>
  <div class="container">
    <form action="">
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <input id="email" v-model="userData.email" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" v-model="userData.password" type="password" class="form-control" />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input id="age" v-model="userData.age" type="number" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="message">Message</label><br />
          <textarea id="message" v-model="message" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <label for="sendmail">
            <input id="sendmail" type="checkbox" value="SendMail" /> Send Mail
          </label>
          <label for="sendInfomail">
            <input id="sendInfomail" type="checkbox" value="SendInfomail" />
            Send Infomail
          </label>
          <!-- Also show for single checkbox with true/false -->
        </div>
      </div>
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="male">
            <input id="male" type="radio" value="male" /> Male
          </label>
          <label for="female">
            <input id="female" type="radio" value="female" /> Female
          </label>
        </div>
      </div>

      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="priority">Priority</label><br />
          <select id="priority" class="form-control">
            <option value=""></option>
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
            class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button class="btn btn-primary">Submit!</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <h4>Your Data</h4>
        </div>
        <div class="panel-body">
          <p>Mail: {{ userData.email }}</p>
          <p>Password: {{ userData.password }}</p>
          <p>Age: {{ userData.age }}</p>
          <p>Message: {{ message }}</p>
          <p><strong>Send Mail?</strong></p>
          <ul>
            <li></li>
          </ul>
          <p>Gender:</p>
          <p>Priority:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HandlingForms',
  data() {
    return {
      userData: {
        email: '',
        password: '',
        age: 27,
      },
      message: '',
    };
  },
};
</script>

<style scoped></style>
