import Vue from 'vue'
import Vuex from 'vuex'
import dragula from 'dragula'

Vue.use(Vuex)

const SET_EDITING_ONE = 'setEditingOne'
const INIT_DRAGULA_INSTANCE = 'initDragulaInstance'

const state = {
    editingOne: null,
    drake: null
}

const actions = {
    [SET_EDITING_ONE]({commit}, data) {
        commit(SET_EDITING_ONE, data)
    },
    [INIT_DRAGULA_INSTANCE]({commit}, data) {
        commit(INIT_DRAGULA_INSTANCE, data)
    }
}

const mutations = {
    [SET_EDITING_ONE](state, data) {
        state.editingOne = data
    },
    [INIT_DRAGULA_INSTANCE](state, data) {
        if (!state.drake) {
            state.drake = dragula(data)
        }
    }
}

const getters = {
    editingOne(state) {
        return state.editingOne
    },
    drake(state) {
        return state.drake
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store
