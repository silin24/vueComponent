<template>
  <div>
    <h2 v-if="firstView">请输入关键词进行搜索</h2>
    <h2 v-else-if="loading">正在请求中......</h2>
    <h2 v-else-if="errorMsg">{{ erroeMsg }}</h2>
    <div class="row" v-else>
      <div class="card" v-for="(user, index) in users" :key="user.username">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.username }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      firstView: true,
      loading: false,
      users: [],
      errorMsg: "",
    };
  },
  mounted() {
    this.$globalEventBus.$on("searchUsers", async (searchName) => {
      //更新状态
      this.firstView = false;
      this.loading = true;
      //发送异步Ajax请求
      try {
        const response = await axios("/api/search/users", {
          params: {
            q: searchName,
          },
        });
        const result = response.data;
        const users = result.items.map((item) => ({
          username: item.login,
          url: item.html_url,
          avatar_url: item.avatar_url,
        }));
        this.loading = false;
        this.users = users;
      } catch (error) {
        this.loading = false;
        this.errorMsg = error.message;
      }
    });
  },
  beforeDestroy() {
    this.$globalEventBus.$off("searchUsers");
  },
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>