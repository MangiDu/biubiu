import Vue from 'vue'
import dragula from 'dragula'
import store from '@/store'

export default {
    inserted(el, binding, vnode) {
        // if (!store.state.drake) {
        //     store.dispatch('initDragulaInstance')
        // }
        Vue.nextTick(() => {
            const drake = store.state.drake
            console.log(el)
            drake.containers.push(el)
            console.log(drake.containers)
        })
    },
    unbind(el, binding, vnode) {

    }
}