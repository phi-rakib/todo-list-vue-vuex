import axios from "axios";

const state = {
  todos: [],
  loading: false,
  error: null,
};

const getters = {
  allTodos: (state) => state.todos,
  loading: (state) => state.loading,
  error: (state) => state.error,
};

const actions = {
  async fetchTodos({ commit }) {
    commit("setLoading", true);
    commit("setError", null);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      commit("setTodos", response.data);
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  setError: (state, error) => {
    state.error = error;
  },
  setLoading: (state, payload) => {
    state.loading = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
