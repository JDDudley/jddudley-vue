<template>
  <v-container fluid class="home-div">
    <!--<v-row>
      <v-col xs12="xs12" md6>
          <h2 class="main-name text-xs-center text-md-right">
            Jason<br>
            <span class="main-alt">Dudley</span>
          </h2>
      </v-col>
      <v-col xs12="xs12" md6>
          <h2 class="main-name text-xs-center text-md-left">
            <span class="main-alt">Web Developer</span><br>
            Data Analyst
          </h2>
      </v-col>
    </v-row>-->
    <v-row class="home-row">
      <v-col xs6>
        <h2 class="main-name main-light text-xs-right">Jason</h2>
      </v-col>
      <v-col xs6>
        <h2 class="main-name main-alt text-xs-left">Dudley</h2>
      </v-col>
    </v-row>
    <hr class="main-hr main-light">
    <v-row class="home-row">
      <v-col xs6>
        <h3 class="main-name main-alt text-xs-right">Web Developer</h3>
      </v-col>
      <v-col xs6>
        <h3 class="main-name main-light text-xs-left">Data Analyst</h3>
      </v-col>
    </v-row>
    <v-row class="icon-row">
      <!-- GitHub and LinkedIn -->
      <v-col xs12 class="home-icons">
        <v-btn floating large raised v-tooltip:bottom="{ html: 'GitHub' }">
          <a href="https://github.com/jddudley" target="_blank"><icon name="github" scale="3"></icon></a>
        </v-btn>
        <v-btn floating large raised v-tooltip:bottom="{ html: 'LinkedIn' }">
          <a href="https://www.linkedin.com/in/jddudley" target="_blank"><icon name="linkedin" scale="3"></icon></a>
        </v-btn>
      </v-col>
      <!-- Work and Skills -->
      <v-col xs12 class="home-icons hidden-sm-and-down">
        <v-btn floating large raised v-tooltip:bottom="{ html: 'Work' }">
          <router-link to="/work">
            <icon name="briefcase" scale="3"></icon>
          </router-link>
        </v-btn>
        <v-btn floating large raised v-tooltip:bottom="{ html: 'Skills' }">
          <router-link to="/skills">
            <icon name="cogs" scale="3"></icon>
          </router-link>
        </v-btn>
      </v-col>
      <!-- About and Contact -->
      <v-col xs12 class="home-icons hidden-sm-and-down">
        <v-btn floating large raised v-tooltip:bottom="{ html: 'About' }">
          <router-link to="/about">
            <icon name="coffee" scale="3"></icon>
          </router-link>
        </v-btn>
        <v-btn floating large raised v-tooltip:bottom="{ html: 'Contact' }">
          <router-link to="/contact">
            <icon name="envelope" scale="3"></icon>
          </router-link>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

</script>

<style>
  .home-div {
    margin-top: 20vh;
  }
  
  .name-div {
    text-align: center;
    text-shadow: 2px 2px 6px #000;
    color: white;
  }
  
  .main-name {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px black;
    line-height: 1.0;
    margin-bottom: 0;
  }
  
  .main-light {
    color: #F4E7D3;
  }
  
  .main-alt {
    color: #29aae2;
  }
  
  .home-row {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 6px;
  }
  
  .main-tag {
    margin: 6px;
    color: #29aae2;
    text-shadow: 2px 2px 2px black;
    line-height: 1.0;
  }
  .icon-row {
    margin-top: 48px;
  }
  .home-icons {
    text-align: center;
    margin-bottom: 24px;
  }
  .home-icons button {
    background-color: #29aae2;
    color: #29aae2;
    box-shadow: 2px 2px 2px black;
    padding: 0;
  }
  .home-icons a {
    text-align: center;
    padding: 12px;
    color: black;
  }
</style>