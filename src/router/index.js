/* 定义路由器对象 */

import Vue from "vue";
import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message";
import MessageDetail from "../pages/MessageDetail";

//声明使用vue插件
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // 应用中所有路由
  routes: [
    // 注册路由
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [  //注册子路由
        {
          name:'news',
          path: "/home/news",  //path最左边的斜杠代表项目根路径
          component: News,
        },
        {
          path: "message",
          component: Message,
          children:[
            {
              path:'/home/message/detail/:id',
              component:MessageDetail
            }
          ]
        },
        {
          path:'/home/',
          redirect:'news'
        }
      ],
    },   
    {
      path: "/",
      redirect: "/about",
    },
  ],
});
