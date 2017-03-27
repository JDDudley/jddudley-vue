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
        <v-btn icon v-tooltip:bottom="{ html: 'RECENT WORK' }" class="main-icons">
          <router-link to="/work">
            <icon name="briefcase" scale="1.5"></icon>
          </router-link>
        </v-btn>
        <v-btn icon v-tooltip:bottom="{ html: 'SKILLS' }" class="main-icons">
          <router-link to="/skills">
            <icon name="cogs" scale="1.5"></icon>
          </router-link>
        </v-btn>
        <v-btn icon v-tooltip:bottom="{ html: 'ABOUT' }" class="main-icons">
          <router-link to="/about">
            <icon name="coffee" scale="1.5"></icon>
          </router-link>
        </v-btn>
        <v-btn icon v-tooltip:bottom="{ html: 'CONTACT' }" class="main-icons">
          <router-link to="/contact">
            <icon name="envelope" scale="1.5"></icon>
          </router-link>
        </v-btn>
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
  $theme.primary=#29aae2
  $theme.accent=#0881A3
  $theme.secondary=#1F4E5F
  $theme.info=null
  $theme.warning=null
  $theme.error=null
  $theme.success=null
  @import './css/main.css'
</style>