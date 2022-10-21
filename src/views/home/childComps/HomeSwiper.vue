<template>
  <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad"/>
        </a>
      </swiper-item>
    </swiper>
</template>

<script>

import {Swiper, SwiperItem} from 'components/common/swiper'


export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      // 记录状态
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      // 设置只打印一次
      if(!this.isLoad) {
        this.$emit("swiperImageLoad")
        this.isLoad = true
      }

    }
  }
}
</script>

<style>

</style>
