<template>
  <v-app top-toolbar>
    <header>
      <v-toolbar fixed class="navbar">
        <v-toolbar-logo>
          <router-link to="/">
            <img src="/public/img/jd-nav.png" alt="JD Dudley" id="jd-logo" class="navbar-brand">
          </router-link>
          <span class="nav-title hidden-sm-and-down">J.D.DUDLEY</span>
        </v-toolbar-logo>
        <router-link to="/work">
          <v-btn icon v-tooltip:bottom="{ html: 'RECENT WORK' }" class="main-icons">
            <icon name="briefcase" scale="1.5"></icon>
          </v-btn>
        </router-link>
        <router-link to="/skills">
          <v-btn icon v-tooltip:bottom="{ html: 'SKILLS' }" class="main-icons">
            <icon name="cogs" scale="1.5"></icon>
          </v-btn>
        </router-link>
        <router-link to="/about">
          <v-btn icon v-tooltip:bottom="{ html: 'ABOUT' }" class="main-icons">
            <icon name="coffee" scale="1.5"></icon>
          </v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn icon v-tooltip:bottom="{ html: 'CONTACT' }" class="main-icons">
            <icon name="envelope" scale="1.5"></icon>
          </v-btn>
        </router-link>
      </v-toolbar>
    </header>
    <main>
      <!--<div class="body-bg"></div>-->
      <div class="component">
        <router-view></router-view>
      </div>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        name: 'JD Dudley'
      }
    }
  }
</script>

<style lang="stylus">
  /*$color-pack = false*/
  
  @import '../node_modules/vuetify/src/stylus/main'
  /** CSS Styles */
  /*
    F9F8ED
    F4E7D3
    0881A3
    1F4E5F
*/
  
  body {
    color: black;
    font-family: 'Roboto', 'Helvetica', sans-serif;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway', 'Helvetica', sans-serif;
  }
  
  .body-bg {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 0;
    z-index: -1;
    background-image: url('~/public/img/gears-focused.jpg');
    background-attachment: fixed;
    background-size: cover;
  }
  
  .navbar {
    background-color: rgba(21, 21, 21, 0.75) !important;
  }
  
  .main-icons a {
    color: #F4E7D3;
  }
  
  .main-icons a:hover {
    color: #29aae2;
  }
  
  #jd-logo {
    position: absolute;
    top: 0;
    text-align: center;
    margin: 0 auto;
  }
  
  .nav-title {
    font-family: 'Raleway', sans-serif;
    margin-left: 100px;
    font-weight: 600;
    /* CAUSES BUG IN SAFARI */
    /*font-size: 1.5em;*/
    color: #F4E7D3;
    text-decoration: none;
  }
  
  .component {
    width: 100%;
    padding-top: 82px;
    min-height: 100vh;
    background-image: url('~/public/img/gears-focused.jpg');
    background-attachment: fixed;
    background-size: cover;
  }
  
  .pg-title {
    font-weight: 600;
    font-size: 4em;
    color: #F9F8ED;
    text-shadow: 2px 2px 2px black;
    text-align: center;
    padding: 12px;
    margin: 0 auto;
  }
  
  .pg-div {
    background-color: rgba(0, 0, 0, 0.75);
  }
  
  .pg-div-white {
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  .text-center {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>