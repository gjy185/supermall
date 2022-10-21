<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper v-if="topImages!=''" :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import { getDetail } from "@/network/details";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";


export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      topImages: []
    };
  },

  created() {
    // 这里是route！！！！！
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages
      console.log(this.topImages);
    });
  },
  methods: {

  },
};
</script>

<style>
</style>
