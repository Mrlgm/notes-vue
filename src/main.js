import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VoirUI from 'voir-ui'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

Vue.use(VoirUI)

Vue.config.productionTip = false

Vue.filter('formatTime', (time) => {
  //2019/1/12 17:53
  let date = new Date(time)
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  return `${year}年${month}月${day}日`
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

