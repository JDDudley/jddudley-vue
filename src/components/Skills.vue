<template>
  <div>
    <h1 class="pg-title">Skills</h1>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="skill in skills" class="skill-header">
        <div slot="header">
          <div class="skill-icon">
            <icon :name="skill.icon" scale="1.5"></icon>
          </div>
          <span class="skill-title">{{ skill.title }}</span>
        </div>
        <v-list class="skill-list">
          <v-list-item v-for="detail in skill.details" class="skill-list-item">
            {{ detail }}
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <!--<v-tabs id="skill-tabs" grow icons>
      <v-tab-item v-for="skill in skills" :href="skill.icon" slot="activators" class="secondary">
        <icon :name="skill.icon" scale="2"></icon>
        {{ skill.title }}
      </v-tab-item>
      <v-tab-content v-for="skill in skills" v-bind:id="skill.icon" slot="content" class="primary">
        <v-card>
          <v-card-text>
            <v-list>
              <v-list-item v-for="detail in skill.details" class="skill-detail">
                {{ detail }}
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tab-content>
    </v-tabs>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Skills',
        skills: [
          {
            title: 'Development',
            icon: 'terminal',
            details: [
              'Javascript',
              'Vue.JS + Quasar, Vuetify',
              'NodeJS',
              'AngularJS',
              'GitHub',
              'C#'
            ]
          },
          {
            title: 'Web',
            icon: 'code',
            details: [
              'HTML5',
              'CSS3',
              'Javascript',
              'Responsive Design',
              'Bootstrap 3',
              'Wordpress'
            ]
          },
          {
            title: 'IT',
            icon: 'laptop',
            details: [
              'Mac OS 7.0 - 10.12',
              'CentOS / Ubuntu / Fedora Linux',
              'Microsoft Office (including VBA)',
              'Adobe Photoshop Proficient',
              'Hardware Assembly & Repair'
            ]
          },
          {
            title: 'E-Commerce',
            icon: 'money',
            details: [
              'Store Design & Development',
              'Targeted Advertising',
              'Customer & Market Analytics',
              'Amazon Integration',
              'Shopify',
              'wooCommerce',
              'Square',
              'Paypal'
            ]
          },
          {
            title: 'Amazon',
            icon: 'amazon',
            details: [
              'Seller Central Management',
              'FBA & FBM Sales',
              'API Utilization',
              'Sales & Ranking Analytics',
              'Affiliate Program',
              'AWS Servers & Data'
            ]
          },
          {
            title: 'Data',
            icon: 'line-chart',
            details: [
              'Firebase Real-Time Data',
              'VBA Expert',
              'FileMaker Pro Development',
              'MySQL',
              'JSON-Formatted',
              'Custom API Development'
            ]
          },
          {
            title: 'Research',
            icon: 'flask',
            details: [
              'Research Data Specialist',
              'Neuropsychological Data Processing',
              'MRI & fMRI Analysis - FSL, AFNI, FreeSurfer',
              'Cognitive & Behavioral Neuroscience Experience'
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .skill-header {
    background-color: #F4E7D3;
  }
  
  .skill-list {
    background-color: #F9F8ED;
    padding: 16px;
    border: 0;
  }
  
  .skill-list-item {
    border: none;
  }
  .skill-icon {
    float: left;
    width: 40px;
    text-align: center;
  }
  
  .skill-title {
    font-family: 'Raleway', 'Helvetica', sans-serif;
    font-weight: bold;
    padding: 16px;
    margin: 16px;
    font-size: 1.5em;
    line-height: 1.5;
    text-transform: uppercase;
  }
</style>