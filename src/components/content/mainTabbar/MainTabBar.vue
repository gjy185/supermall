
<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/shouye.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~/assets/img/tabbar/shouye_active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="~/assets/img/tabbar/fenlei.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~/assets/img/tabbar/fenlei_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" >
      <template v-slot:item-icon>
        <img src="~/assets/img/tabbar/gouwuche.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~/assets/img/tabbar/gouwuche_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile" >
      <!-- <img slot="item-icon" src="~/assets/img/tabbar/mine.png" alt="" />
      <img
        slot="item-icon-active"
        src="~/assets/img/tabbar/mine_active.png"
        alt=""
      />
      <div slot="item-text">我的</div> -->
      <template v-slot:item-icon>
        <img src="~/assets/img/tabbar/mine.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~/assets/img/tabbar/mine_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>

  </tab-bar>
</template>


<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
