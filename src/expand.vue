<template>
  <div class="vue-expand-panel">
    <div class="catalog">
      <div class="item-container">
        <div class="index-bar" @click="clickBar()" :class="{ 'index-bar-border-radius': openBar === true }">
          <div class="left-index">{{ title }}</div>
          <div class="right-arrow">
            <div class="arrow" :class="{ 'rolling-in-the-deep': openBar === true }"></div>
          </div>
        </div>
        <div class="content" :class="{ 'content-height': openBar === true }">
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
    title: String
  },
  data () {
    return {
      openBar: false
    }
  },
  methods: {
    clickBar () {
      const currentOpenBar = this.openBar
      this.openBar = !currentOpenBar
    }
  }
}
</script>

<style lang="scss">
.vue-expand-panel {
  .catalog {
    margin: 0 20px;
    .item-container {
      margin-bottom: 12px;
      .index-bar-border-radius {
        border-radius: 4px 4px 0 0!important;
      }
      .index-bar {
        width: 100%;
        height: 32px;
        line-height: 32px;
        border-radius: 4px;
        border: 2px solid #4f4f4f;
        background-color: #FFD555;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        transition: border-radius .3s ease-in-out;
        .left-index {
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          margin-left: 16px;
        }
        .right-arrow {
          height: 100%;
          width: 24px;
          margin-right: 8px;
          div.rolling-in-the-deep {
            transform: rotate(-180deg);
          }
          div.arrow {
            transition: transform .3s ease-out;
            display: inline-block;
            position: relative;
            height: 100%;
            width: 100%;
          }
          div.arrow::after {
            display: inline-block;
            content: " ";
            height: 6px;
            width: 6px;
            border-width: 0 2px 2px 0;
            border-color: #4f4f4f;
            border-style: solid;
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            transform-origin: center;
            transition: transform .3s;
          }
        }
      }
      .content-height {
        max-height: 200px!important;
        border-left: 2px solid #4F4F4F!important;
        border-right: 2px solid #4F4F4F!important;
        border-bottom: 2px solid #4F4F4F!important;
      }
      .content {
        height: 0;
        overflow: hidden;
        border-radius: 0 0 4px 4px;
        background-color: #F3F9FF;
        transition: all .3s ease-in-out;
        border-left: 2px solid #FFFBEE;
        border-right: 2px solid #FFFBEE;
        border-bottom: 2px solid #FFFBEE;
      }
    }
  }
}
          
</style>
