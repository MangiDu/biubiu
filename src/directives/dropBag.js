import Vue from 'vue'
// import dragula from 'dragula'
import store from '@/store'

export default {
    inserted(el, binding, vnode) {
        // if (!store.state.drake) {
        //     store.dispatch('initDragulaInstance')
        // }
        Vue.nextTick(() => {
            const drake = store.state.drake
            drake.containers.push(el)
        })
    },
    unbind(el, binding, vnode) {
        const drake = store.state.drake
        const containers = drake.containers
        const index = containers.indexOf((element) => {
            return element === el
        })
        if (~index) {
            containers.splice(index, 1)
        }
    }
}
