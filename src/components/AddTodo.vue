<template>
  <div>
    <form>
      <input type="text" v-model="title" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["createTodo"]),
    onSubmit(event) {
      event.preventDefault();
      this.createTodo({ title: this.title });
      this.title = "";
    },
  },
  computed: {},
  created() {},
};
</script>
