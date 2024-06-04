<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"

  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location/>
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>名场景以及伏笔</span></template>
        <el-sub-menu index="1-1">
          <template #title><span>第 1-10 卷</span></template>
          <el-menu-item index="1-1-1" @click="navigateToPost_01">第 1 卷</el-menu-item>
          <el-menu-item index="1-1-2" @click="navigateToPost_02">第 2 卷</el-menu-item>
          <el-menu-item index="1-1-3" @click="navigateToPost_03">第 3 卷</el-menu-item>
          <el-menu-item index="1-1-4" @click="navigateToPost_04">第 4 卷</el-menu-item>
          <el-menu-item index="1-1-5">第 5 卷</el-menu-item>
          <el-menu-item index="1-1-6">第 6 卷</el-menu-item>
          <el-menu-item index="1-1-7">第 7 卷</el-menu-item>
          <el-menu-item index="1-1-8">第 8 卷</el-menu-item>
          <el-menu-item index="1-1-9">第 9 卷</el-menu-item>
          <el-menu-item index="1-1-10">第 10 卷</el-menu-item>
        </el-sub-menu>
      </el-menu-item-group>
      <!--      <el-menu-item-group title="Group Two">-->
      <!--        <el-menu-item index="1-3">item three</el-menu-item>-->
      <!--      </el-menu-item-group>-->
      <el-sub-menu index="1-2">
        <template #title><span>第 11-20 卷</span></template>
        <el-menu-item index="1-2-1">第 11 卷</el-menu-item>
        <el-menu-item index="1-2-2">第 12 卷</el-menu-item>
        <el-menu-item index="1-2-3">第 13 卷</el-menu-item>
        <el-menu-item index="1-2-4">第 14 卷</el-menu-item>
        <el-menu-item index="1-2-5">第 15 卷</el-menu-item>
        <el-menu-item index="1-2-6">第 16 卷</el-menu-item>
        <el-menu-item index="1-2-7">第 17 卷</el-menu-item>
        <el-menu-item index="1-2-8">第 18 卷</el-menu-item>
        <el-menu-item index="1-2-9">第 19 卷</el-menu-item>
        <el-menu-item index="1-2-10">第 20 卷</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2" @click="openJapanSite">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>日本原站点</template>
    </el-menu-item>
    <el-menu-item index="3" @click="openBlog">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>我的博客</template>
    </el-menu-item>

    <!--    <el-menu-item index="3" disabled>-->
    <!--      <el-icon><document /></el-icon>-->
    <!--      <template #title>Navigator Three</template>-->
    <!--    </el-menu-item>-->
    <!--    <el-menu-item index="4">-->
    <!--      <el-icon><setting /></el-icon>-->
    <!--      <template #title>Navigator Four</template>-->
    <!--    </el-menu-item>-->
  </el-menu>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);

const openJapanSite = () => {
  window.open('https://xn--q9j984gbug42c4wieqsm2o.jp/', '_blank');
};
const openBlog = () => {
  window.open('https://www.yuzhii0718.eu.org/', '_blank');
};

import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToPost_01 = () => {
  router.push({ name: 'Post01' })
}

const navigateToPost_02 = () => {
  router.push({ name: 'Post02' })
}
const navigateToPost_03 = () => {
  router.push({ name: 'Post03' })
}
const navigateToPost_04 = () => {
  router.push({ name: 'Post04' })
}

</script>
