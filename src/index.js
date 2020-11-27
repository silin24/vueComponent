import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";

new Vue({
  // el: "#root",
  render: (h) => h(App),
  router, //注册路由器
}).$mount("#root");
