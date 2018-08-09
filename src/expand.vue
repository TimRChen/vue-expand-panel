<template>
  <div class="vue-expand-panel">
    <div class="catalog">
      <div class="item-container">
        <div class="index-bar" @click="clickBar(index)" :class="{ 'index-bar-border-radius': chooseBar === index && openBar === true }">
          <div class="left-index">{{ title }}</div>
          <div class="right-arrow">
            <img src="../static/course_page_icon_more.png" :class="{ 'rolling-in-the-deep': chooseBar === index && openBar === true }">
          </div>
        </div>
        <div class="content" :class="{ 'content-height': chooseBar === index && openBar === true }">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-expand-panel',
  props: {
    index: Number,
    title: String
  },
  data () {
    return {
      chooseBar: 0,
      openBar: false
    }
  },
  methods: {
    clickBar (index) {
      const currentOpenBar = this.openBar
      // 若在同一bar上点击，则对openBar的值取反
      if (index === this.chooseBar || this.chooseBar === 0) this.openBar = !currentOpenBar
      this.chooseBar = index
    }
  }
}
</script>

<style lang="scss">
.vip-gold-course {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
  > .catalog {
    margin: 0 20px;
    > .item-container {
      margin-bottom: 12px;
      .index-bar-border-radius {
        border-radius: 4px 4px 0 0!important;
      }
      > .index-bar {
        width: 100%;
        height: 32px;
        line-height: 32px;
        border-radius: 4px;
        background-color: #339fff;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        transition: border-radius .3s ease;
        > .left-index {
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          margin-left: 16px;
        }
        > .right-arrow {
          margin: 4px 10px;
          height: 24px;
          width: 24px;
          img.rolling-in-the-deep {
            transform: rotate3d(0, 0, 1, 0deg);
          }
          img {
            transform: rotate3d(0, 0, 1, -180deg);
            transition: transform .3s ease;
            height: 100%;
            width: 100%;
          }
        }
      }
      > .content-height {
        height: 104px!important;
        border: 1px solid #E2F1FF!important;
      }
      > .content {
        height: 0;
        overflow: hidden;
        transition: height .3s ease;
        background-color: #F3F9FF;
        border: 1px solid #fff;
        border-radius: 0 0 4px 4px;
      }
    }
  }
}
          
</style>
