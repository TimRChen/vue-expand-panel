<template lang="pug">
  <div class="vip-gold-course">
    <div class="course-catalog">
      <div class="chapter-item-container">
        <div class="index-bar" @click="clickBar(1)" v-bind:class="{ 'index-bar-border-radius': chooseBar === 1 && openBar === true }">
          <div class="left-chapter-index">第1章 无理取闹</div>
          <div class="right-arrow">
            <img src="../../assets/vip-gold-course/course_page_icon_more.png" v-bind:class="{ 'rolling-in-the-deep': chooseBar === 1 && openBar === true }">
          </div>
        </div>
        <div class="chapter-content" v-bind:class="{ 'chapter-content-height': chooseBar === 1 && openBar === true }">
          <div class="section-content">
            <div class="title col-txt col-1">1.1 正数和负数</div>
            <div class="video-num col-txt col-2">视频 2个</div>
            <div class="exercises-num col-txt col-3">习题 12道</div>
          </div>
          <div class="section-content">
            <div class="title col-txt col-1">1.1 正数和负数</div>
            <div class="video-num col-txt col-2">视频 2个</div>
            <div class="exercises-num col-txt col-3">习题 12道</div>
          </div>
          <div class="section-content">
            <div class="title col-txt col-1">1.1 正数和负数</div>
            <div class="video-num col-txt col-2">视频 2个</div>
            <div class="exercises-num col-txt col-3">习题 12道</div>
          </div>
          <div class="section-content">
            <div class="title col-txt col-1">1.1 正数和负数</div>
            <div class="video-num col-txt col-2">视频 2个</div>
            <div class="exercises-num col-txt col-3">习题 12道</div>
          </div>
        </div>
      </div>
      <div class="chapter-item-container">
        <div class="index-bar" @click="clickBar(2)" v-bind:class="{ 'index-bar-border-radius': chooseBar === 2 && openBar === true }">
          <div class="left-chapter-index">第2章 排山蹈海</div>
          <div class="right-arrow">
            <img src="../../assets/vip-gold-course/course_page_icon_more.png" v-bind:class="{ 'rolling-in-the-deep': chooseBar === 2 && openBar === true }">
          </div>
        </div>
        <div class="chapter-content" v-bind:class="{ 'chapter-content-height': chooseBar === 2 && openBar === true }">
          <div class="section-content">
            <div class="title col-txt col-1">1.1 正数和负数</div>
            <div class="video-num col-txt col-2">视频 2个</div>
            <div class="exercises-num col-txt col-3">习题 12道</div>
          </div>
          <div class="section-content">
            <div class="title col-txt col-1">1.1 正数和负数</div>
            <div class="video-num col-txt col-2">视频 2个</div>
            <div class="exercises-num col-txt col-3">习题 12道</div>
          </div>
          <div class="section-content">
            <div class="title col-txt col-1">1.1 正数和负数</div>
            <div class="video-num col-txt col-2">视频 2个</div>
            <div class="exercises-num col-txt col-3">习题 12道</div>
          </div>
          <div class="section-content">
            <div class="title col-txt col-1">1.1 正数和负数</div>
            <div class="video-num col-txt col-2">视频 2个</div>
            <div class="exercises-num col-txt col-3">习题 12道</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chooseBar: 0,
      openBar: false
    }
  },
  methods: {
    /**
     * 点击章索引展开，控制展开动画
     */
    clickBar (chapter) {
      let currentOpenBar = this.openBar
      // 若在同一bar上点击，则对openBar的值取反
      if (chapter === this.chooseBar || this.chooseBar === 0) this.openBar = !currentOpenBar
      this.chooseBar = chapter
    }
  }
}
</script>

<style lang="scss">
div.vip-gold-course {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
  div.course-catalog {
    margin: 0 20px;
    div.chapter-item-container {
      margin-bottom: 12px;
      div.index-bar-border-radius {
        border-radius: 4px 4px 0 0!important;
      }
      div.index-bar {
        width: 100%;
        height: 32px;
        line-height: 32px;
        border-radius: 4px;
        background-color: #339fff;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        transition: border-radius .3s ease;
        .left-chapter-index {
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          margin-left: 16px;
        }
        .right-arrow {
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
      div.chapter-content-height {
        height: 104px!important;
        border: 1px solid #E2F1FF!important;
      }
      div.chapter-content {
        height: 0;
        overflow: hidden;
        transition: height .3s ease;
        background-color: #F3F9FF;
        border: 1px solid #fff;
        border-radius: 0 0 4px 4px;
        .section-content {
          display: flex;
          flex-flow: row;
          margin: 6px 16px;
          align-items: center;
          justify-content: space-between;
          .col-1 {
            min-width: 42.9%;
          }
          .col-2 {
            min-width: 16.5%;
          }
          .col-3 {
            min-width: 19.5%;
          }
          .col-txt {
            color: #557AB2;
            font-size: 13px;
          }
        }
      }
    }
  }
}
          
</style>
