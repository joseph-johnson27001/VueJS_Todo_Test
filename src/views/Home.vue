<template>
  <div id="app">
    <todo-list />
    <create-todo v-on:create-todo="createTodo"></create-todo>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import CreateTodo from '@/components/CreateTodo';

export default {
  name: 'home',
  components: {
    TodoList,
		CreateTodo
  },
  methods: {
    createTodo(newTodo) {
      console.log(newTodo);
    }
  }
};
</script>
