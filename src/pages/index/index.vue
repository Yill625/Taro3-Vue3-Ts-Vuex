<template>
  <view class="index" @tap="abc" v-if="msg">
    <text>{{ msg }}</text>
  </view>
  <button type="warn" :disabled="false" @tap="show">1212</button>
  <nut-button shape="square" plain type="primary" icon="star-fill"
    >11111111111111</nut-button
  >
  <nut-icon
    size="40"
    name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
  ></nut-icon>
  <checkbox-group @change="abc">
    <checkbox> </checkbox>
  </checkbox-group>
  <hellow />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import hellow from '@/components/button/index.vue'

import './index.scss'

const msg = ref(true)
const abc = () => {
  console.log(1231)
}
const show = () => {
  msg.value = !msg.value
}
</script>
