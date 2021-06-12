<template>
  <div>
    <form>
      <input type="text" v-model="title" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods:{},
  computed:{},
  created() {

  }
}
</script>
