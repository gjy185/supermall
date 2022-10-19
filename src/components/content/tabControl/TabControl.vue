<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item.index"
        class="tab-control-item"
        :class="{active: index === currentIndex}"
        @click="itemClick(index)"

        >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    // 这里需要将餐宿index传过来
    itemClick(index) {
      // console.log(index);
      this.currentIndex = index,
      // 将数据传出去
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);

}
.active span {
  border-bottom: 3px solid var(--color-tint);

}
</style>
