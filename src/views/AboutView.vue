<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ str }}</h1>
  </div>
</template>


<script setup lang="ts" name="about">
  const str: string = '你好，我是字符串'
</script>
