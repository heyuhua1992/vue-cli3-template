import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
import '@/assets/css/global.scss'
import '@/assets/js/reset-rem'

Vue.use(Toast, {
  type: 'center',
  duration: 2500,
  wordWrap: false,
  width: 'auto'
})

Vue.config.productionTip = false
Vue.prototype.$imgSrc = (name) => {
  let imgSrc = null
  if (process.env.NODE_ENV === 'development') { // 开发环境
    imgSrc = require('./assets/image/' + name)
  } else { // 生产环境
    imgSrc = require('./assets/image/' + name)
  }
  return imgSrc
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
