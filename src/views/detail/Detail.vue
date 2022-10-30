<template>
  <div id="detail">
    <detail-nav-bar class="detail-bar" ref="nav"  @itemClick="itemClick"></detail-nav-bar>

    <div>{{$store.state.cartList.length}}</div>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper
        v-if="topImages != ''"
        :top-images="topImages"
      ></detail-swiper>
      <detail-base-info v-if="goods != ''" :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends"/>

    </scroll>

    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

import { getDetail, Goods, Shop, GoodsParams, getRecommend } from "@/network/details";

import Scroll from "components/common/scroll/Scroll";


import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
import DetailBottomBar from './childComps/DetailBottomBar.vue';

import { debounce } from "@/common/utils";
import { backTopMixin } from "common/mixin";

export default {
  name: "Detail",
  components: {
    Scroll,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,

    };
  },
 updated () {


 },
  created() {
    // 这里是route！！！！！
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 1.获取顶部的轮播图数据
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // console.log(this.topImages);

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.获取店铺信息
      this.shop = new Shop(data.shopInfo);

      // 4.获取详情信息
      this.detailInfo = data.detailInfo

      // 5.获取参数的信息
      this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)

      // 6.获取评论信息(有些有有些没有)
      if(data.rate.cRate !== 0) {
      this.commentInfo = data.rate.list[0]
      };

      /*
    this.$nextTick(() => {
      // 根据最新的数据，对应的DOM是已经被渲染出来
      // 但是图片依然是没有加载完(目前获取到的offsetTop不包含其中的图片)
     this.themeTopYs = []
     this.themeTopYs.push(0)
     this.themeTopYs.push(this.$refs.param.$el.offsetTop)
     this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)

     console.log(this.themeTopYs);
    })

    */


    });

    // 3.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
      console.log(res);
      // console.log(this.recommends);
    })

    // 4.给getThemeTopY赋值(对给this.themeTopYs赋值的方式进行防抖)
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
     this.themeTopYs.push(0)
     this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
     this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
     this.themeTopYs.push(Number.MAX_VALUE)

    //  console.log(this.themeTopYs)

    }, 100)



  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()

      this.getThemeTopY()

    // this.themeTopYs = []
    //  this.themeTopYs.push(0)
    //  this.themeTopYs.push(this.$refs.param.$el.offsetTop)
    //  this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    //  this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)

    //  console.log(this.themeTopYs);
    //  console.log('111');
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)

      /*
    this.themeTopYs = []
     this.themeTopYs.push(0)
     this.themeTopYs.push(this.$refs.params.$el.offsetTop)
     this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)

     console.log(this.themeTopYs);
    */
    },
    contentScroll(position) {
      // 1.获取y值
      const positionY = -position.y

      // 2.positionY和主题中值themeTopYs对比
      // {0: 0, 1: 5036, 2: 6217, 3: 6524}
      // positionY 在 0 和 5036 之间， index = 0
      // positionY 在 5036 和 6217 之间， index = 1
      // positionY 在 6217 和 6524 之间， index = 2
      // positionY 大于 6524， index = 3

      // Number.MAX_VALUE 最大值
      // console.log(Number.MAX_VALUE);

      let length = this.themeTopYs.length
        // 因为多push一个 length要-1 防止越界
        for(let i= 0; i < length - 1; i++) {
          // 给themeTopYs总push一个最大值Number.MAX_VALUE 就可以直接大于小的,小于大的
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
          // if(this.currentIndex !== i && (i < length - 1 && positionY >= this.themeTopYs[i] &&
          //  positionY < this.themeTopYs[i+1]) ||
          //   (i === length - 1 && positionY >= this.themeTopYs[i])) {
          //   this.currentIndex = i
          //   this.$refs.nav.currentIndex = this.currentIndex
          // }
        }

      // 显示是否回到顶部 （判断backTop是否显示）
    this.listenShowBackTop(position)

    },
    addToCart() {
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // console.log('加入购物车');

      // 2.将商品添加到购物车
      // this.$store.cartList.push(product)
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product)

    }


  },
};
</script>

<style scoped>

#detail {
  height: 100vh;
}
.detail-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  height: calc(100% - 44px - 49px);
}
</style>
