<template>
  <view class="index" @tap="abc" v-if="msg">
    <text>{{ msg }}</text>
  </view>
  <button type="warn" :disabled="false" @tap="show">1212</button>
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
