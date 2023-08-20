import Vue from "vue";
import Vuex from "vuex";
import BookService from "@/services/book.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "",
    searchClicked: false,
    activeComponent: "RegisterComponent",
    searchResults: [],
    cartItemCount: 0,
    cartItems: [],
  },
  mutations: {
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_ACTIVE_COMPONENT(state, componentName) {
      state.activeComponent = componentName;
    },
    SET_SEARCH_CLICKED(state, value) {
      state.searchClicked = value;
    },
    SET_SEARCH_RESULTS(state, results) {
      state.searchResults = results;
    },
    INCREMENT_CART_ITEM_COUNT(state) {
      state.cartItemCount++;
    },
    ADD_TO_CART(state, item) {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newItem = { ...item, quantity: 1 };
        state.cartItems.push(newItem);
      }
    },
  },
  actions: {
    updateSearchQuery({ commit }, query) {
      commit("SET_SEARCH_QUERY", query);
    },
    updateSearchClicked({ commit }, value) {
      commit("SET_SEARCH_CLICKED", value);
    },
    async searchBooks({ commit }, query) {
      try {
        const results = await BookService.getBooksByTitle(query);
        commit("SET_SEARCH_RESULTS", results);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    },
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item);
      commit("INCREMENT_CART_ITEM_COUNT");
    },
  },
  getters: {
    isSearchClicked(state) {
      return state.searchClicked;
    },
    searchResults(state) {
      return state.searchResults;
    },
    cartItems(state) {
      return state.cartItems;
    },
  },
});