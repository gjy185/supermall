import BackTop from 'components/common/backtop/BackTop'

export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      // console.log('11');
      // scrollTo(0, 0, 500) 在500秒之内返回到顶部
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000
    }
  }
}
