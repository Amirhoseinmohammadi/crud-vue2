import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    },
    deleteItem(state, item) {
      const index = state.items.indexOf(item)
      state.items.splice(index, 1)
    },
    updateItem(state, updatedItem) {
      const index = state.items.findIndex((item) => item.id === updatedItem.id)
      state.items.splice(index, 1, updatedItem)
    },
    addItem(state, newItem) {
      state.items.push(newItem)
    },
  },
  actions: {
    fetchItems({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          commit("setItems", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    deleteUser({ commit }, item) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${item.id}`)
        .then(() => {
          commit("deleteItem", item)
        })
        .catch((error) => console.log(error))
    },
  },
  updateItem({ commit }, updatedItem) {
    axios
      .put(
        `https://jsonplaceholder.typicode.com/users/${updatedItem.id}`,
        updatedItem
      )
      .then((response) => {
        commit("updatedItem", response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  addItem({ commit }, newItem) {
    axios
      .post("https://jsonplaceholder.typicode.com/users", newItem)
      .then((response) => {
        commit("addItem", response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
})
