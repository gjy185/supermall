<template>
 <div>
  <nav-bar>
    <template v-slot:left >
      <div class="left_img" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </template>

    <template v-slot:center >
      <div class="title">
       <div v-for="(item, index) in titles"
        class="title-item" @click="itemClick(index)"
         :key="item.index"
         :class="{active:index === currentIndex}">{{item}}
        </div>

      </div>
    </template>
  </nav-bar>
 </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'DatailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
      // console.log(this.currentIndex);
      // console.log(index);
    },
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<style>
.title {
  display: flex;
  text-align: center;
  font-size: 14px;

}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);

}
.left_img {
  margin-top: 5px;
}
</style>
