<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>

    <scroll class="content"
         ref="scroll"
         :probe-type="3"
         @scroll="contentScroll"
         :pull-up-load="true"
         @pullingUp="loadMore"
         >
      <home-swiper :banners="banners" :key="banners.index" />
      <recommend-view :recommends="recommends" :key="recommends.index" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from 'components/common/backtop/BackTop'

import { getHomeMultidata, getHomeGoods } from "network/home";
import { PullUpLoad } from "better-scroll";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      // 将res的数据保存
      // result: null
      banners: [],
      recommends: [],
      // 放数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  // create生命周期函数 一旦创建打开就会运行
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // console.log(index);
    },
    backClick() {
      // console.log('11');
      // scrollTo(0, 0, 500) 在500秒之内返回到顶部
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 1000
    },
    loadMore() {
      // console.log('加载更多');
      // 调用本地的方法 加载更多
      this.getHomeGoods(this.currentType)

      // 进行刷新
      this.$refs.scroll.scroll.refresh()
    },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        (this.banners = res.data.banner.list),
        (this.recommends = res.data.recommend.list);
        // console.log(res);
        // this.result = res
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
        // console.log(res);

        this.$refs.scroll.finishPullUp()
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  padding-top: 44px;
  position: relative;

  /* 让首页的内容显示完全 后面可以删掉 */
  /* padding-bottom: 1440px; */
}

.home-nav {
  /* background-color: pink; */
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 9;
}
.tab-control {
  /* 粘性定位 */
  /* position: sticky; */

  top: 44px;
  background-color: #fff;

  z-index: 9;
}
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
