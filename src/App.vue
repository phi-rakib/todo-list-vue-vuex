<template>
  <h1>Todo List</h1>
  <AddTodo />
  <Todos />
</template>

<script>
import Todos from './components/Todo.vue';
import AddTodo from './components/AddTodo.vue';

export default {
  name: "App",
  components: {Todos, AddTodo},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
