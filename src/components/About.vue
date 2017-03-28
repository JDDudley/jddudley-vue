<template>
  <div>
    <h2 class="pg-title">About</h2>
    <v-container fluid>
      <v-row>
        <v-col class="hidden-sm-and-down about-div" md2 lg3 xl4></v-col>
        <v-col xs12 md8 lg6 xl4 class="about-div">
          <p>Spent 6 years studying Cognitive &amp; Behavioral Neuroscience, as well as Neuropsychology and Neurobiology. Learned
            many niche languages and ability to handle unique challenges. Large datasets are a specialty, particularly involving complex statistical analyses.</p>
          <p>Private work for e-commerce professionals has given me experience combining technologies and analytics to better serve 
            business and customer alike, while resulting in consistently higher sales.</p>
          <p>Modern full-stack education has rounded out my skillset, and I continue to add new tools through projects across multiple frameworks.</p>
          <p>Most free time is devoted to building up experience through non-profit projects that help technology improve data accessibility.</p>
        </v-col>
        <v-col class="hidden-sm-and-down about-div" md2 lg3 xl4></v-col>
      </v-row>
    </v-container>
    <div class="portrait-div">
      <img src="/public/img/portrait-brick.jpg" alt="Portrait">
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .about-div {
    background-color: rgba(244, 231, 211, 0.8);
  }
  .portrait-div {
    width: 240px;
    height: 240px;
    border-radius: 120px;
    margin: 24px auto;
  }
  .portrait-div img {
    border-radius: 120px;
    border: 4px solid #F4E7D3;
    box-shadow: 2px 2px 10px black;
  }
  .about-img {
    float: right;
    width: 200px;
    max-width: 50%;
    border-radius: 0 0 0 24px;
    padding-left: 12px;
  }
  .about-div p {
    line-height: 1.4;
  }
  .row .col {
    padding: 12px;
  }
</style>