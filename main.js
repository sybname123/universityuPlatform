import App from './App'
import store from './store'
// import { mapState, mapMutations, mapActions } from "vuex";
// 引入mixin文件对全局文件混入注入
// let vuexStore = require('@/mixin/$u.mixin.js');
// Vue.mixin(vuexStore);
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
// Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif