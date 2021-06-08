<template>
  <button @click="deleteTodo(this.id)">Delete</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DeleteTodo",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions(["deleteTodo"]),
  },
};
</script>