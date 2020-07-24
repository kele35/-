<template>
  <div id="app">
    <nav>
      <router-link :to="item.path" v-for="(item, index) in nav" :key="index">{{item.meta.navName}}</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from "./scripts/router/menu";
export default {
  name: "App",
  components: {},
  computed: {
    nav() {
      return routes;
    }
  },
  created() {
    // console.log(routes[0].meta.navName)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
</style>
