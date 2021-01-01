import Vuex from 'vuex'
import Axios from 'axios'
import axios from "axios";

export default Vuex.createStore({
    state:{
        contacts:[],
        chats:[],
        currentChatUser:{}
    },
    getters:{},
    mutations:{
        SET_CHATS_TO_STORE(state, chats){
            state.chats=chats;
        },
        SET_CONTACTS_TO_STORE(state, contacts){
            state.contacts = contacts;
        },
        SET_USER(state, user){
            state.currentChatUser = user?user:'';
        }

    },
    actions:{
        FETCH_CHATS({commit}){
            return axios.get('http://localhost:3000/chats')
                .then((chats)=>{
                    commit('SET_CHATS_TO_STORE', chats.data)
                })
        },
        FETCH_CONTACTS({commit}){
            return axios.get('http://localhost:3000/contacts')
                .then((contacts) => {
                    commit('SET_CONTACTS_TO_STORE', contacts.data)
                })
        },
        SET_USER_TO_HEADER({commit}, user){
            commit('SET_USER', user);
        },
        ADD_MESSAGE_TO_CHAT({commit}, {userId, chat}){
            return axios.put('http://localhost:3000/chats/'+userId, chat)
                .then((response)=>{
                    return response;
                })
        }
    }
})