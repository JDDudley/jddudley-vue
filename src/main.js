import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'

import HomeComponent from './components/Home.vue'
import WorkComponent from './components/Work.vue'
import SkillsComponent from './components/Skills.vue'
import AboutComponent from './components/About.vue'
import ContactComponent from './components/Contact.vue'
import ErrorComponent from './components/Error.vue'

// Vue-Awesome Font Awesome icons
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)

Vue.use(Vuetify)
Vue.use(VueRouter)
// Vue.use(VueResource)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/work',
      component: WorkComponent
    },
    {
      path: '/skills',
      component: SkillsComponent
    },
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '/contact',
      component: ContactComponent
    },
    {
      path: '*',
      component: ErrorComponent
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
