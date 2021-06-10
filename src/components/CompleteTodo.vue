<template>
  <input type="checkbox" @change="todoUpdate" />
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CompleteTodo",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["updateTodo"]),
    todoUpdate(event) {
      event.preventDefault();
      const todo = { ...this.todo };
      todo.completed = !todo.completed;
      this.updateTodo(todo);
    },
  },
};
</script>