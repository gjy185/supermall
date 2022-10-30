<template>
  <div id="app" class="wrapper">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <main-tab-bar v-show="this.$route.path.indexOf('detail') == -1"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
@import url("assets/css/base.css");
</style>
