import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue';
import Memes from './views/Memes.vue';
import Resume from './views/Resume.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/resume', component: Resume },
    { path: '/memes', component: Memes },
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
