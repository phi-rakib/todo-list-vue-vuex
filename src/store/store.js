import { createStore } from "vuex";
import todo from "./modules/Todo";

const store = createStore({
  modules: {
    todo,
  },
});

export default store;
