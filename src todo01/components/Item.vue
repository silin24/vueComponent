<template>
  <li
    :style="{ background: bgColor }"
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
  >
    <label>
      <input type="checkbox" v-model="isComplete" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">
      删除
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    deleteTodo: Function,
    index: Number,
    updateTodo: Function,
  },
  data() {
    return {
      bgColor: "#fff",
      isShow: false,
    };
  },
  computed: {
    isComplete: {
      get() {
        return this.todo.completed;
      },
      set(value) {
        this.updateTodo(this.todo, value);
      },
    },
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        (this.bgColor = "#aaaaaa"), (this.isShow = true);
      } else {
        (this.bgColor = "#ffffff"), (this.isShow = false);
      }
    },
    deleteItem() {
      if (window.confirm("确定删除吗?")) {
        this.deleteTodo(this.index);
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>