<script setup>
// import { useUserStore } from '@/stores'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
// const userStore = useUserStore()
</script>

<template>
  <div>
    <!-- 国际化处理 -->
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
