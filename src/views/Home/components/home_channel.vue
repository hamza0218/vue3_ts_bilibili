<template>
    <van-tabs v-model:active="active">
        <van-tab v-for="(item, index) in navList" :title="item.text" :index="item.id">
            <!-- 内容 {{ item.id }} -->
        </van-tab>
    </van-tabs>
</template>

<script setup lang="ts" name="home_channel">
import axios from 'axios'
import { ref, reactive } from 'vue';
let active = ref<number>(0)
// 接口拿到导航栏数据  interface规定数据类型，要求数组的每一项需要符合这个格式
interface INavItem {
    id: string
    text: string
}
let navList = ref<INavItem[]>([])
axios({
    url: '/navList',
    method: "get"
}).then(res => {
    if (res.data.code === 0) {
        navList.value = res.data.result
    }
})
</script>
  
<style lang="less">
.van-tabs__line {
    background: #fb7299;
}
</style>
  