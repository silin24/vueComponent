<template>
<div>
  <ul>
    <li v-for="(m,index) in messages" :key="m.id">
      <router-link :to="'/home/message/detail/'+m.id">{{m.title}}</router-link>
      ---<button @click='pushShow(m.id)'>push</button>
      ---<button @click='replaceShow(m.id)'>replace</button>
    </li>
  </ul>
  <button @click='backShow()'>返回</button>
  <router-view></router-view>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },

  mounted() {
    setTimeout(() => {
      const messages = [
        { id: 1, title: 'message001'},
        { id: 2, title: 'message002'},
        { id: 3, title: 'message003' },
      ];
      this.messages = messages
    }, 1000);
  },

  methods: {

    //编程式路由导航
    pushShow(id){
      this.$router.push('/home/message/detail/'+id)
    },
    replaceShow(id){
      this.$router.replace('/home/message/detail/'+id)
    },
    backShow(){
      this.$router.back()
    }
  },
};
</script>

<style>
</style>