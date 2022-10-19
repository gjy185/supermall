<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item" :key="item.index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  components: { GoodsListItem },
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.goods {
  display: flex;
  /* 换行 */
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
