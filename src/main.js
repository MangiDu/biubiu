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
import dragNdrop from '@/directives/dragNdrop'

import initComponents from '@/components/module/init'
import node from '@/components/module/node'

initComponents()

Vue.directive('drop-bag', dropBag)
Vue.directive('resize', resize)
Vue.directive('draggable', dragNdrop.draggable)
Vue.directive('droppable', dragNdrop.droppable)

Vue.component('m-node', node)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
