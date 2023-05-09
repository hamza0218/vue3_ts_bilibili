<template>
    <van-swipe class="my_swiper" :loop="true" :autoplay="3000" indicator-color="white" lazy-render>
        <van-swipe-item v-for="(item ,index) in swiperList" :key="index">
            <img :src="item.imgSrc" alt="">
        </van-swipe-item>
    </van-swipe>
</template>

<script setup lang="ts" name="home_swiper">
import axios from 'axios'
import { ref, reactive } from 'vue';
// 接口拿到导航栏数据  interface规定数据类型，要求数组的每一项需要符合这个格式
interface swiperList {
    imgSrc: string
    link: string
}
let swiperList = ref<swiperList[]>([])
axios({
    url: '/swiperList',
    method: "get"
}).then(res => {
    if (res.data.code === 0) {
        swiperList.value = res.data.result
    }
})
</script>
  

<style lang="less">
.my_swiper{
    margin: 8px 0;
    img{width: 100%;max-height: 200px;}
}
</style>
  