<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { ElNotification } from 'element-plus'

defineProps<{ msg: string }>();

const toast = () => {
  ElMessage.success("我们仍不知宇宙的尽头~😚");
  ElNotification({
    title: '星星',
    message: '一闪一闪亮晶晶✨',
    type: 'success',
  })
};

const value1 = ref(true);
</script>

<template>
  <div>
    <a @click="toast">
      <img src="/assets/avatar.svg" class="logo" alt="Avatar" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 8em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 50%;
  background-color: #ffffff; /* 添加背景颜色 */
}
.logo:hover {
  filter: drop-shadow(0 0 2em #f6ff00);
}
</style>
