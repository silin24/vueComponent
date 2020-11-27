<template>
  <ul>
    <li>ID:{{ $route.params.id }}</li>
    <li>Time:{{ detail.title }}</li>
    <li>Content:{{ detail.content }}</li>
  </ul>
</template>

<script>
const allMessagesDetail = [
  { id: 1, title: "message001", content: "messageContent001" },
  { id: 2, title: "message002", content: "messageContent002" },
  { id: 3, title: "message003", content: "messageContent003" },
];
export default {
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
    setTimeout(() => {
      //输入函数体
      const id = this.$route.params.id * 1;
      const detail = allMessagesDetail.find((item) => item.id === id);
      this.detail = detail;
    }, 1000);
  },
  watch: {
    $route(to, from) {
      setTimeout(() => {
        //输入函数体
        const id = to.params.id * 1;
        const detail = allMessagesDetail.find((item) => item.id === id);
        this.detail = detail;
      }, 1000);
    },
  },
};
</script>

<style>
</style>
