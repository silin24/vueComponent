<template>
  <div>
    <Blogs />
  </div>
</template>

<script>
import Blogs from "./components/blogs";
export default {
  data() {
    return {
      title: "App组件",
    };
  },
  components: {
    Blogs,
  },
};
</script>

<style>
</style>

