<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { ElNotification } from 'element-plus'

defineProps<{ msg: string }>();

const toast = () => {
  ElMessage.success("天使惠~可爱捏~😚");
  ElNotification({
    title: '天使惠',
    message: '圣天使🙏',
    type: 'success',
  })
};

const value1 = ref(true);
</script>

<template>
  <div>
    <a @click="toast">
      <img src="/assets/avatar.jpg" class="logo" alt="Avatar" />
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
}
.logo:hover {
  filter: drop-shadow(0 0 2em #f6ff00);
}
</style>
