<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
      <span :class="{ job_done: todo.completed }">{{ todo.title }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todo",
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
