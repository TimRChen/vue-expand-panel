[![GitHub stars](https://img.shields.io/github/stars/TimRChen/vue-expand-panel.svg?style=flat-square)](https://github.com/TimRChen/vue-expand-panel/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/TimRChen/vue-expand-panel.svg?style=flat-square)](https://github.com/TimRChen/vue-expand-panel/issues)
[![GitHub forks](https://img.shields.io/github/forks/TimRChen/vue-expand-panel.svg?style=flat-square)](https://github.com/TimRChen/vue-expand-panel/network)
[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat-square)](https://github.com/TimRChen/vue-expand-panel)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/TimRChen/vue-expand-panel)

![NPM](https://nodei.co/npm/vue-expand-panel.png?downloads=true&downloadRank=true&stars=true)


# Vue-expand-panel
Expand panel component for Vue.

# Install

#### NPM

``` bash
npm install vue-expand-panel --save
```

### Mount

#### mount with global

``` javascript
import Vue from 'vue'
import VueExpandPanel from 'vue-expand-panel'

// import styles
import 'vue-expand-panel/dist/vue-expand-panel.css'

// mount with global
Vue.use(VueExpandPanel)
```

#### mount with component

```javascript
import { expandPanel } from 'vue-expand-panel'
// import styles
import 'vue-expand-panel/dist/vue-expand-panel.css'

export default {
  components: {
    expandPanel
  }
}
```


### Component

```vue
<template>
  <div class="vue-expand-panel">
    <ul>
      <li v-for="(item, index) in expandList" :key="index">
        <expand-panel :index="index" :title="item.title">
          <div class="section-content" v-for="(data, key) in item.dataList" :key="key">
            <div class="col-txt col-1">{{ data.col_1 }}</div>
            <div class="col-txt col-2">{{ data.col_2 }}</div>
            <div class="col-txt col-3">{{ data.col_3 }}</div>
          </div>
        </expand-panel>
      </li>
    </ul>
  </div>
</template>
```


# Options

| prop       | type     |
| :--------  | :----- |
| index      | `Number` |
| title      | `String` |


# Author
[TimRChen](https://github.com/TimRChen)


