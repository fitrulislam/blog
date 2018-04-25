import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    addArticles (state, payload) {
      state.articles = payload
    },
    addArticle (state, payload) {
      state.articles.push(payload)
    },
    deleteArticle (state, payload) {
      let newArticle = []
      state.articles.forEach(article => {
        if (article.title !== payload) {
          newArticle.push(article)
        }
      })
      state.articles = newArticle
    },
    addArticleToDB (state, payload) {
      axios.post('http://35.187.241.115:3000/article/create', payload, {
        headers: {token: localStorage.getItem('token')}
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteArticleInDB (state, payload) {
      axios.post(`http://35.187.241.115:3000/article/delete/${payload}`, {}, {
        headers: {token: localStorage.getItem('token')}
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  actions: {
    addArticleToDB ({ commit }, payload) {
      commit('addArticleToDB', payload)
    },
    deleteArticleInDB ({ commit }, payload) {
      commit('deleteArticleInDB', payload)
    }
  }
})
