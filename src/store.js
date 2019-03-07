import Vue from 'vue'
import Vuex from 'vuex'
import auth from './api/auth'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        isLogin: false
    },
    getters: {
        setUser(state, payload) {
            state.user = payload.user
        },
        setLogin(state, payload) {
            state.isLogin = payload.isLogin
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user
        },
        setLogin(state, payload) {
            state.isLogin = payload.isLogin
        }
    },
    actions: {
        login({commit}, {username, password}) {
            return auth.login({username, password})
                .then(res => {
                    commit('setUser', {user: res.data})
                    commit('setLogin', {isLogin: true})
                })
        },
        async register({commit}, {username, password, avatar}) {
            let res = await auth.register({username, password, avatar})
            commit('setUser', {user: res.data})
            commit('setLogin', {isLogin: true})
            return res.data
        },
        async logout({commit}) {
            await auth.logout()
            commit('setUser', {user: null})
            commit('setLogin', {isLogin: false})
        },
        async checkLogin({commit, state}) {
            if (state.isLogin) return true
            let res = await auth.getInfo()
            commit('setLogin', {isLogin: res.isLogin})
            if (!res.isLogin) return false
            commit('setUser', {user: res.data})
            return true
        }
    }
})
