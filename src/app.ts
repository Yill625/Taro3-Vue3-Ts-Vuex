import { createApp } from 'vue'
import { Button, Cell, Icon, Popup } from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'

import './app.scss'

export default createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
  .use(Button)
  .use(Cell)
  .use(Icon)
  .use(Popup)
