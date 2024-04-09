<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)

// 组件对外暴露  方法  open  基于open传来的参数，区分添加或编辑
// open({}) => 表达无需渲染，说明添加
// open({id, cate_name, ...}) => 表单需要渲染，编辑
const open = (row) => {
  console.log(row)
  dialogVisible.value = true
}
defineExpose({
  open
})
</script>
<template>
  <el-dialog v-model="dialogVisible" title="添加弹层" width="30%">
    <div>我是内容部分</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
