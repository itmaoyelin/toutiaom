import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入并安装vant组件库
import Vant from 'vant'
// import 'vant/lib/index.css'
// 定制主题一定要引入less样式
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
