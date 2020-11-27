<template>
  <div>
    <p v-if="!repoName">Loading......</p>
    <p v-else>
      most star repo is <a :href="repoUrl">{{ repoName }}</a>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repoName: "",
      repoUrl: "",
    };
  },
  mounted() {
    // axios("https://api.github.com/search/repositories?q=v&sort=stars")
    axios("https://api.github.com/search/repositories", {
      params: {
        q: "v",
        sort: "stars",
      },
    }).then((res) => {
      const result = res.data;
      const { name, Html_url } = result.items[0];
      this.repoName = name;
      this.repoUrl = Html_url;
    });
  },
};
</script>

<style>
</style>

