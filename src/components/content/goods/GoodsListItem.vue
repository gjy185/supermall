<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
   showImage() {
    // const index = Object.keys(this.goodsItem).indexOf("show")
    // return index!== -1 ? this.goodsItem.show.img : this.goodsItem.show
    // return undefined || this.goodsItem.image || this.goodsItem.show.img
    return (this.goodsItem.show && this.goodsItem.show.img) || this.goodsItem.image
    // return this.goodsItem.image || (this.goodsItem.show && this.goodsItem.show.img)
   }
  },
  methods: {
    imageLoad() {
      // console.log('111');
      // this.$bus.$emit("itemImageLoad")
    },
    itemClick () {
      // console.log('----');
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;

}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  left: 0;
  right: 0;
  font-size: 12px;
  bottom: 5px;
  overflow: hidden;
  text-align: center;

}
.goods-info p {
  /* ellipsis:当对象内文本一处时显示省略标记(...)。配合overflow使用 */
  overflow: hidden;
  text-overflow: ellipsis;
  /* 禁止文字换行 */
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
