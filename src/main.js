// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'dragula/dist/dragula.css'
import '@/assets/style/index.scss'
import Vue from 'vue'
import store from '@/store'
import App from './App'
import router from './router'
import dropBag from '@/directives/dropBag'

Vue.directive('drop-bag', dropBag)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
