<template>
  <div id="app">
    <div class="container">
      <Search />
      <Main />
    </div>
  </div>
</template>

<script>
import Search from "./components/Search";
import Main from "./components/Main";
export default {
  components: {
    Search,
    Main,
  },
};
</script>

<style>
</style>

