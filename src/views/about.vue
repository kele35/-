<template>
  <div>
    <h1>点击下方进入洲子哥的世界</h1>
    <router-link :to="item.path" v-for="(item,index) in aboutnav" :key="index">{{item.meta.navName}}</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import AboutCildren from "../scripts/router/about.js";
export default {
  name: "userinfo",
  computed: {
    aboutnav() {
      return AboutCildren;
    }
  }
};
</script>
<style>
/* a{
        color:hotpink;
        margin: 0 10px;
    } */
</style>