import Vue from "vue";
import App from "./App.vue";
new Vue({
  // el:"#root"
  // render: (h) => h(App),
  components: {
    App,
  },
  template: "<App />",
}).$mount("#root");

/* 
render: 内部会使用vue-template-complier提前编译好模板


template: 内部不使用vue-template-complier ,不能编译template
vue默认引入的是不带编译器的打包版本vue.runtime.common.js

解决办法:让webpack打包带编译器的版本  配置:'vue$' : 'vue/dist/vue.esm.js'



*/
