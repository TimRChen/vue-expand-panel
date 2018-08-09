<template>
  <div class="test">
    <vue-expand-panel v-for="(item, index) in expandList" :key="index" :index="index" :title="item.title">
      <div class="section-content" v-for="(data, key) in item.dataList" :key="key">
        <div class="col-txt col-1">{{ data.col_1 }}</div>
        <div class="col-txt col-2">{{ data.col_2 }}</div>
        <div class="col-txt col-3">{{ data.col_3 }}</div>
      </div>
    </vue-expand-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      expandList: [{
        title: '第1章 无理取闹',
        dataList: [{
          col_1: '1.1 rick & morty',
          col_2: 'buffer 2个',
          col_3: '难关 12道'
        }, {
          col_1: '1.2 rick & morty',
          col_2: 'buffer 2个',
          col_3: '难关 12道'
        }, {
          col_1: '1.3 rick & morty',
          col_2: 'buffer 2个',
          col_3: '难关 12道'
        }, {
          col_1: '1.4 rick & morty',
          col_2: 'buffer 2个',
          col_3: '难关 12道'
        }]
      }, {
        title: '第2章 以和为贵',
        dataList: [{
          col_1: '2.1 有趣',
          col_2: 'buffer 2个',
          col_3: '难关 12道'
        }, {
          col_1: '2.2 有道理',
          col_2: 'buffer 2个',
          col_3: '难关 12道'
        }, {
          col_1: '2.3 有精神',
          col_2: 'buffer 2个',
          col_3: '难关 12道'
        }, {
          col_1: '2.4 有气质',
          col_2: 'buffer 2个',
          col_3: '难关 12道'
        }]
      }]
    }
  }
}
</script>

<style lang="scss">
div.test {
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
          
</style>
