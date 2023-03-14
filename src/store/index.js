import axios from 'axios'
import { createStore } from 'vuex'
const netURL = "https://netspiders.onrender.com/"

export default createStore({
  state: {
    user: null,
    users: null,
    community: null,
    communities: null,
    activeProjects: null,
    message: null
  },
  getters: {
  },
  mutations: {
    setCommunities(state, value) {
      state.communities = value
    },
    setUsers(state, value) {
      state.users = value
    },
    setActProj(state, value) {
      state.activeProjects = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async fetchCommunities(context) {
      const res = await axios.get(`${netURL}communities`)
      const { results, err } = await res.data;
      if (results) {
        context.commit('setCommunities', results)
      } else {
        context.commit('setMessage', err)
      }
    },
    async fetchUsers(context) {
      const res = await axios.get(`${netURL}users`)
      const { results, err } = await res.data;
      if (results) {
        context.commit('setUsers', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async fetchActProjects(context) {
      const res = await axios.get(`${netURL}actProjects`)
      const {results, err} = await res.data;
      console.log(res);
      console.log(err);
      if(results) {
        context.commit('setActProj', results)
      }else {
        context.commit('setMessage', err)
      }
    }
  },
  modules: {
  }
})
