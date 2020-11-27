import Vue from "vue";
import App from "./App.vue";

new Vue({
  beforeCreate() {
    //创建一个全局的用于绑定事件监听和分发事件的对象:$globalEventBus
    // 全局事件总线对象就是一个vm,将其挂载到Vue的原型对象上,
    //所有组件对象的原型对象就是一个vm对象  ==>Vue原型对象是组件对象的原型链上的对象
    Vue.prototype.$globalEventBus = this;
  },
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
