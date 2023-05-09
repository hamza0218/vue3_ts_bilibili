<template>
  <van-tabs v-model:active="activeName">
    <van-tab title="推荐" name="recommend">
      <VideoRecommend />
    </van-tab>
    <van-tab title="评论" name="comment">
      <VideoComment />
    </van-tab>
  </van-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VideoRecommend from './video_recommend.vue'
import VideoComment from './video_comment.vue'
const activeName = ref('recommend')
</script>
