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
    completedProjects: null,
    reviews: null,
    commMsg: null,
    commRoom: null,
    commUsers: null,
    devMsg: null,
    devRoom: null,
    devUsers: null,
    articles: null,
    article: null,
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
    setReviews(state, value) {
      state.reviews = value
    },
    setComProj(state, value) {
      state.completedProjects = value
    },
    setComMsg(state, value) {
      state.commMsg = value
    },
    setComRoom(state, value) {
      state.commRoom = value
    },
    setComUsers(state, value) {
      state.commUsers = value
    },
    setDevMsg(state, value) {
      state.devMsg = value
    },
    setDevRoom(state, value) {
      state.devRoom = value
    },
    setDevUsers(state, value) {
      state.devUsers = value
    },
    setArticles(state, value) {
      state.articles = value
    },
    setArticle(state, value) {
      state.article = value
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
      if(results) {
        context.commit('setActProj', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async fetchArticles(context) {
      const res = await axios.get(`${netURL}articles`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setArticles', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async fetchReviews(context) {
      const res = await axios.get(`${netURL}reviews`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setReviews', results)
      }else {
        context.commit('setMessage', err)
      }
    },
  },
  modules: {
  }
})
