<template>
  <view class="index" @tap="abc">
    <text>{{ msg }}</text>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const msg = ref('Hello world')
const abc = () => {
  console.log(1111111)
}
</script>
