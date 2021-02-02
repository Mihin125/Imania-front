import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import global components
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Post from './components/Post.vue'
import Pagination from './components/Pagination.vue'

// register components
Vue.component('Footer',Footer)
Vue.component('Header',Header)
Vue.component('Post',Post)
Vue.component('Pagination',Pagination)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
