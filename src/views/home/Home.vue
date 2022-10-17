<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>

    <home-swiper :banners="banners" :key="banners.index"/>
    <recommend-view :recommends="recommends" :key="recommends.index"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView.vue'

import { getHomeMultidata } from "network/home";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      // 将res的数据保存
      // result: null
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      // this.result = res
      this.banners = res.data.banner.list,
      this.recommends = res.data.recommend.list
    });
  },
};
</script>

<style>
.home-nav {
  /* background-color: pink; */
  background-color: var(--color-tint);
  color: #fff;
}
</style>
