import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import StaticPage from './pages/StaticPage.vue'
import StatsPage from './pages/StatsPage.vue'
import MapPage from './pages/MapPage.vue'
import DataPage from './pages/DataPage.vue'
import VizPage from './pages/VizPage.vue'

import moment from 'moment'
import 'moment/locale/sl'

moment.locale('sl')

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMoment)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    component: StaticPage,
    props: {
      name: 'about',
      content: import('./content/about.md')
    }
  },
  {
    path: '/stats',
    component: StatsPage
  },
  {
    path: '/Viz',
    component: VizPage
  },
  {
    path: '/data',
    component: DataPage
  },
  {
    path: '/map',
    component: MapPage
  },
  {
    path: '/links',
    component: StaticPage,
    props: {
      name: 'links',
      content: import('./content/links.md')
    }
  },
  {
    path: '/team',
    component: StaticPage,
    props: {
      name: 'team',
      content: import('./content/team.md')
    }
  },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
