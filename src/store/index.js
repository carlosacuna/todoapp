import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API = 'http://carlosa.space:3000/api/';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:false,
    dataForm: false,
    tasks:[]
  },
  mutations: {
    getTasks(state, data){
      state.tasks = data
    },
    addTask(state, data){
      state.tasks.push(data)
    },
    showForm(state, title = false){
        state.dataForm = title
    },
    editTask(state, data){
      let index = state.tasks.findIndex(item => item._id == data._id);
      if (index !== -1) state.tasks.splice(index, 1, data);
    },    
    removeTask(state, data){
      let index = state.tasks.findIndex(item => item._id == data._id);      
      if (index !== -1) state.tasks.splice(index, 1);
    },
    auth_success(state, token){     
      state.token = token
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    logout(state){
      state.token = false
      state.tasks = []
      state.dataForm = false
      localStorage.removeItem('token')      
    },
  },
  actions: {
    login: async ({commit}, data) =>{
        return new Promise((resolve, reject) => {
          axios.post(`${API}signin`, data)
          .then(resp => {    
            const token = resp.data.token            
            commit('auth_success', token)        
            resolve(resp)
          })
          .catch(err => {            
            reject(err)
          })
        })
    },
    register: async ({commit}, data) =>{
        return new Promise((resolve, reject) => {
          axios.post(`${API}signup`, data)
          .then(resp => {           
            resolve(resp)
          })
          .catch(err => {            
            reject(err)
          })
        })
    }, 
    getTaks: async ({commit}) =>{
        return new Promise((resolve, reject) => {
          axios.get(`${API}task`)
          .then(resp => {            
            const data = resp.data.tasks        
            commit('getTasks', data)
            resolve(resp)
          })
          .catch(err => {
            console.log(err)            
            reject(err)
          })
        })
    },
    saveTaks: async ({commit},data) =>{      
      return new Promise((resolve, reject) => {
        axios.post(`${API}task`, data)
        .then(resp => {
          commit('addTask', resp.data.data)
          resolve(resp)
        })
        .catch(err => {        
          console.log(err) 
          reject(err)
        })
      })
    },
    updateTaks: async ({commit},data) =>{      
      return new Promise((resolve, reject) => {
        axios.put(`${API}task/${data._id}`, data)
        .then(resp => {
          commit('editTask', data)
          resolve(resp)
        })
        .catch(err => {        
          console.log(err) 
          reject(err)
        })
      })
    },
    deleteTaks: async ({commit}, data) =>{      
      return new Promise((resolve, reject) => {
        axios.delete(`${API}task/${data._id}`)
        .then(resp => {
          commit('removeTask', data)
          resolve(resp)
        })
        .catch(err => {        
          console.log(err) 
          reject(err)
        })
      })
    },
  },
  modules: {
  }
})
