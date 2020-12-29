import Vuex from 'vuex'
import Axios from 'axios'
import axios from "axios";

export default Vuex.createStore({
    state:{
        contacts:[],
        currentChatUser:{}
    },
    getters:{},
    mutations:{
        SET_CONTACTS_TO_STORE(state, contacts){
            state.contacts = contacts;
        },
        SET_USER(state, user){
            state.currentChatUser = user?user:'';
        }

    },
    actions:{
        FETCH_CONTACTS({commit}){
            return axios.get('http://localhost:3000/contacts')
                .then((contacts) => {
                    commit('SET_CONTACTS_TO_STORE', contacts.data)
                })
        },
        SET_USER_TO_HEADER({commit}, user){
            commit('SET_USER', user);
        }
    }
})