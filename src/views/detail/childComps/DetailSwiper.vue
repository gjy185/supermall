<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item.index">
      <img class="img" :src="item" alt="">
    </swiper-item>
  </swiper>

</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem";

export default {
  name: "DetailSwiper",
  components: {
    SwiperItem,
    Swiper
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      },
    },
  },
};
</script>

<style>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
.img {
  width: 100%;
  height: 100%;
}
</style>
