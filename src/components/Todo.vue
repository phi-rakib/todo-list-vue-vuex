<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
      <span :class="{ job_done: todo.completed }">{{ todo.title }}</span>
      <DeleteTodo :id="todo.id" />
      <CompleteTodo :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DeleteTodo from "./DeleteTodo.vue";
import CompleteTodo from "./CompleteTodo.vue";

export default {
  name: "Todo",
  components: {
    DeleteTodo,
    CompleteTodo
  },
  computed: { ...mapGetters(["allTodos"]) },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
.job_done {
  text-decoration: line-through;
}

li {
  list-style-type: none;
}
</style>
