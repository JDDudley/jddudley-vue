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
          <ul>
            <li v-for="detail in skill.details" class="skill-list-item">
              {{ detail }}
            </li>
          </ul>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Skills',
        skills: [
          {
            title: 'Front End',
            icon: 'code',
            details: [
              'HTML5',
              'CSS3',
              'Javascript',
              'Responsive Design',
              'VueJS + Vuetify & Quasar',
              'AngularJS'
            ]
          },
          {
            title: 'Back End',
            icon: 'terminal',
            details: [
              'Full Scale Javascript Web App Development',
              'NodeJS',
              'API Development & Custom Middlewares',
              'GitHub & Related Git Technologies',
              'C#'
            ]
          },
          {
            title: 'IT',
            icon: 'laptop',
            details: [
              'Mac OS 7.0 - 10.12',
              'CentOS / Ubuntu / Fedora Linux',
              'Microsoft & Linux Server Management',
              'Microsoft Office (including VBA)',
              'Adobe Photoshop Proficient',
              'Hardware Assembly & Repair',
              'Network Maintainence & Troubleshooting'
            ]
          },
          {
            title: 'Amazon',
            icon: 'amazon',
            details: [
              'Amazon MWS Development',
              'FBA & FBM Sales',
              'Seller-Fulfilled Prime',
              'Seller Central Management',
              'Sales & Ranking Analytics',
              'Affiliate Program',
              'AWS Servers & Data',
              'Custom Scraping & Data Collection'
            ]
          },
          {
            title: 'E-Commerce',
            icon: 'money',
            details: [
              'Store Design & Development',
              'Targeted Advertising',
              'Customer & Market Analytics',
              'Supplier Management',
              'Shopify & wooCommerce',
              'Square & Paypal',
              'Custom Credit Card Processing',
              'Custom POS Development'
            ]
          },
          {
            title: 'Data',
            icon: 'line-chart',
            details: [
              'Advanced Data Scraping',
              'Firebase Real-Time Data',
              'VBA Expert',
              'FileMaker Pro Development',
              'MySQL',
              'JSON Application Conversion',
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
    margin-left: 70px;
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