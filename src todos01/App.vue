<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer
        :todos="todos"
        :clearCompletedTodos="clearCompletedTodos"
        :checkAll="checkAll"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import { saveTodos, readTodos } from "./utils/storageUtils";
export default {
  data() {
    return {
      todos: [
        { id: 1, title: "a", completed: false },
        { id: 3, title: "b", completed: true },
        { id: 5, title: "c", completed: false },
      ],
    };
  },
  mounted() {
    // this.todos = JSON.parse(localStorage.getItem("todos_key") || "[]");
    // 模拟异步读取数据
    setTimeout(() => {
      // 读取local中保存的todos, 更新数据
      this.todos = readTodos();
    }, 1000);
  },
  watch: {
    todos: {
      deep: true,
      // handler: function (value) {
      //   localStorage.setItem("todos_key", JSON.stringify(value));
      // },
      handler: saveTodos,
    },
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },

    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    clearCompletedTodos() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    checkAll(isCheckAll) {
      this.todos.forEach((todo) => (todo.completed = isCheckAll));
    },
    updateTodo(todo, isCheck) {
      todo.completed = isCheck;
    },
  },
  components: {
    Header,
    Footer,
    List,
  },
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

