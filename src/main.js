import Vue from 'vue'
import App from './App.vue'

// mock/index.js 写好后进行导入
import './mock/index.js'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
