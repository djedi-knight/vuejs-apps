<template>
  <div>
    <!-- JavaScript expressions in Vue are enclosed in double curly brackets. -->
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <!-- We are passing the data to the Todo component to render the Todo list -->
    <todo v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          @complete-todo="completeTodo"
          @delete-todo="deleteTodo">
    </todo>
  </div>
</template>

<script>
import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
  },
};
</script>

<style>
</style>
