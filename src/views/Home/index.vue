<template>
    <app_header />  
    <home_channel />
    <Home_swiper />
    <Home_video_list />
</template>

<script setup lang="ts" name="home_index">
import { ref, reactive } from 'vue';
import app_header from '@/components/app_header.vue';
import home_channel from './components/home_channel.vue';
import Home_swiper from './components/home_swiper.vue';
import Home_video_list from './components/home_video_list.vue';

</script>
  
<style lang="less">

</style>
  