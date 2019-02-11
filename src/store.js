import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login: false,
        email: null
    },
    getters: {
        getLogin: function (state) {
            return state.login
        },
        getEmail: function (state) {
            return state.email
        }
    },
    mutations: {
        setLogin: function (state, payload) {
            state.login = payload
        },
        setEmail: function (state, payload) {
            state.email = payload
        }
    },
    actions: {
        signin: function ({commit}, payload) {
            return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                    commit('setLogin', true)
                    commit('setEmail', response.user.email)
                }).catch((error) => {
                    swal('Oppss!', error.message, 'error')
                })
        },
        signup: function ({commit}, payload) {
            return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .catch((error) => {
                    swal('Oppss!', error.message, 'error')
                })
            },
            logout ({commit}) {
                return firebase.auth().signOut()
                    .then(() => {
                        commit('setLogin', false)
                        commit('setEmail', null)
                    }).catch((error) => {
                        swal('Oppss!', error.message, 'error')
                    })
          }
    }
})
