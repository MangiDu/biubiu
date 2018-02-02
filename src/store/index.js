import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    editingOne: null
}

const actions = {
    ['setEditingOne']({commit}, data) {
        commit('setEditingOne', data)
    }
}

const mutations = {
    ['setEditingOne'](state, data) {
        state.editingOne = data
        console.log(state.editingOne)
    }
}

const getters = {
    ['editingOne'](state) {
        return state.editingOne
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store