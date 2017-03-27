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
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        name: '',
        email: '',
        message: ''
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
        axios.post('//formspree.io/jason@jddudley.com',{
          name: this.name,
          email: this.email,
          message: this.message
        }).then(function (res) {
          // success
          console.log('Success')
        }).catch(function (err) {
          // fail
          console.log('Error: ', err)
        })
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
</style>