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
import resize from '@/directives/resize'

import Button from '@/components/module/button'
import MDiv from '@/components/module/mDiv'

Vue.component('Button', Button)
Vue.component('MDiv', MDiv)

Vue.directive('drop-bag', dropBag)
Vue.directive('resize', resize)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
