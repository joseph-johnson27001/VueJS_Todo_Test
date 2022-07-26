<template>
  <div>
    <todo
      v-for="(todo, index) in todos"
      v-bind:key="index"
      v-bind:todo="todo"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Todo from './Todo';

export default {
  components: {
    Todo
  },
  computed: {
    ...mapState({
      todos: state => state.todoList
    })
  }
};
</script>
