<template>
  <div>
    <h2 class="pg-title">About</h2>
    <v-container fluid>
      <v-row>
        <v-col class="hidden-sm-and-down about-div" md2 lg3 xl4></v-col>
        <v-col xs12 md8 lg6 xl4 class="about-div">
          <img src="/public/img/portrait.jpg" class="about-img">
          <p>Spent 6 years studying Cognitive &amp; Behavioral Neuroscience, as well as Neuropsychology and Neurobiology. Learned
            many niche languages and solidified ability to quickly adapt to whatever is required for the job. Large datasets are
            a specialty, particularly complex statistical analyses.</p>
          <p>Private work for e-commerce professionals has given me invaluable experience combining technologies and statistical approaches
            to better understand consumers and customers.</p>
          <p>Modern full-stack education has rounded my skillset and given me a stronger ability to apply my expertise with logic
            and data analyses.</p>
          <p>Currently working for a range of clients across multiple fields, including scientific research, new product development, web apps, e-commerce, and non-profit
            support.</p>
        </v-col>
        <v-col class="hidden-sm-and-down about-div" md2 lg3 xl4></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

</script>

<style scoped>
  .about-div {
    background-color: rgba(244, 231, 211, 0.75);
  }
  .about-img {
    float: right;
    width: 200px;
    max-width: 50%;
    border-radius: 0 0 0 24px;
    padding-left: 12px;
  }
  .about-div p {
    padding: 6px 12px 6px 12px;
    line-height: 1.4;
  }
  .row .col {
    padding: 0;
  }
</style>