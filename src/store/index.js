import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_EDITING_ONE = 'setEditingOne'

const state = {
    editingOne: null
}

const actions = {
    [SET_EDITING_ONE]({commit}, data) {
        commit(SET_EDITING_ONE, data)
    }
}

const mutations = {
    [SET_EDITING_ONE](state, data) {
        state.editingOne = data
        console.log(state.editingOne)
    }
}

const getters = {
    editingOne(state) {
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
