<template>
  <div>
    <h2 class="pg-title">Contact</h2>
    <div class="pg-div">
      <form id="contact" v-on:submit.prevent="submitForm" action="">
        <v-text-field v-model="name" name="input-name" label="Name" single-line dark></v-text-field>
        <v-text-field v-model="email" name="input-email" type="email" label="Email Address" single-line dark></v-text-field>
        <v-text-field v-model="message" name="input-msg" label="Message" single-line multi-line dark></v-text-field>
        <v-btn round primary @click.native="submitForm">Send Message</v-btn>
      </form>
    </div>
    <v-alert success dismissible v-model="formSuccess">
      <p>Thank you! Your message has been sent. A response will be on its way as soon as possible.</p>
      </v-alert>
    <v-alert error dismissible v-model="formError">
      <p>Error: Uh oh, something's gone wrong sending the message. Please try again.</p>
    </v-alert>
    <!--<v-snackbar v-model="formSuccess" :timeout="timeout" class="form-success">
      <h6>Thank You!!</h6>
      <p>Your message has been sent successfully. A response will be on its way as soon as possible.</p>
    </v-snackbar>-->
    <!--<v-snackbar :timeout="timeout" v-model="formError" :bottom="formError" class="form-error">
      <h6>There's Been Some Trouble</h6>
      <p>Uh oh, something went wrong with the message. Please try again.</p>
    </v-snackbar>-->
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        name: '',
        email: '',
        message: '',
        formSuccess: false,
        formError: false
      }
    },
    methods: {
      isValidName () {
        return this.name.length > 0 
      },
      isValidEmail () {
        return this.email.indexOf('@') > 0
      },
      isValidMessage () {
        return this.message.length > 0
      },
      submitForm () {
        let self = this
        axios.post('//formspree.io/jason@jddudley.com',{
          name: self.name,
          email: self.email,
          message: self.message
        }).then(function (res) {
          // success
          self.name = ''
          self.email = ''
          self.message = ''
          self.formSuccess = true
          self.closeAlerts()
        }).catch(function (err) {
          // fail
          self.formError = true
          self.closeAlerts()
        })
      },
      closeAlerts () {
        let self = this
        setTimeout(function () {
          self.formSuccess = false
          self.formError = false
        }, 5000)
      }
    }
  }
</script>

<style scoped>
  .pg-div {
    padding: 12px;
    text-align: center;
  }
  .input-group {
    margin: 12px;
  }
  .form-success {
    background-color: darkgreen;
    color: white;
  }
  .form-error {
    background-color: darkred;
    color: white;
  }
</style>