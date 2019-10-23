import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'



import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import header from './components/header.vue';
import footer from './components/footer.vue';
import home from './components/home.vue';
import aboutus from './components/aboutus.vue';


import gallery from './components/gallery.vue';
import map from './components/map.vue';
import '@mdi/font/css/materialdesignicons.css';
import ajax from "vuejs-ajax";
import axios from 'axios';
import VueAxios from 'vue-axios';
 
Vue.use(VueAxios, axios)
Vue.use(ajax)
Vue.use(Vuetify)
Vue.use(VueRouter)
export default new Vuetify({
 

  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
})
Vue.component('compheader',header)
Vue.component('compfooter',footer)
Vue.component('comphome',home)
Vue.component('aboutus',aboutus)

Vue.component('gallery',gallery)
Vue.component('map',map)


let router = new VueRouter({
  routes:[
    {
      path:'',
     redirect:'home'
      
    },
    {
    path:'/home',
    name:'Home',
    component:home
    },
    
    {
      path:'/map',
      name:'Map',
      component:map
    },
    { 
      path:'/gallery',
      name:'Gallery',
      component:gallery

    },
    {
      path:'/aboutus',
      name:'about',
      component:aboutus
    }
   
  ]
})
new Vue({
  el:"#app",
  vuetify,
  router,
  render: h => h(App)
})
