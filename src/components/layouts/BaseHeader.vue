<script lang="ts" setup>
import {isDark, toggleDark} from "~/composables";
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  router.push({ name: 'Home' })
}
const navigateTo2_1 = () => {
  router.push({ name: 'Comment01' })
}
const navigateTo2_2 = () => {
  router.push({ name: 'Comment02' })
}
const navigateTo2_3 = () => {
  router.push({ name: 'Comment03' })
}
const navigateTo3_1 = () => {
  router.push({ name: 'CN' })
}
const navigateTo3_2 = () => {
  router.push({ name: 'NASA' })
}
const navigateTo3_3 = () => {
  router.push({ name: 'SpaceX' })
}
const navigateTo3_4 = () => {
  router.push({ name: 'EU' })
}
const navigateTo4 = () => {
  router.push({ name: 'About' })
}
const navigateTo5 = () => {
  router.push({ name: 'QA' })
}
const navigateTo6 = () => {
  router.push({ name: 'Resources' })
}
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1" @click="navigateToHome">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>评论</template>
      <el-menu-item index="2-1" @click="navigateTo2_1">人类探索太空的15座里程碑</el-menu-item>
      <el-menu-item index="2-2" @click="navigateTo2_2">宇宙探索的历史演进与时代价值</el-menu-item>
      <el-menu-item index="2-3" @click="navigateTo2_3">太空探索的故事</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>航天机构</template>
      <el-menu-item index="3-1"  @click="navigateTo3_1">中国国家航天局</el-menu-item>
      <el-menu-item index="3-2"  @click="navigateTo3_2">NASA</el-menu-item>
      <el-menu-item index="3-3"  @click="navigateTo3_3">SpaceX</el-menu-item>
      <el-menu-item index="3-4"  @click="navigateTo3_4">欧洲空间局</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4" @click="navigateTo4">关于</el-menu-item>
    <el-menu-item index="5" @click="navigateTo5">黑洞</el-menu-item>
    <el-menu-item index="6" @click="navigateTo6">资源</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
