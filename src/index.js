
/*
* vue-expand-panel
* Author: timrchen@foxmail.com
* Github: https://github.com/TimRChen/vue-expand-pannel
*/

import compoment from './expand.vue'

export const expandPanel = compoment

export const install = function (Vue, options) {
  if (options) {
    compoment.props.globalOptions.default = () => options
  }
  Vue.component(compoment.name, compoment)
}

export default { expandPanel, install }
