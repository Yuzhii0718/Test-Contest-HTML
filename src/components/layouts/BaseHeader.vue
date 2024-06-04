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
  router.push({ name: 'Summary' })
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
      <el-menu-item index="2-1" @click="navigateTo2_1">【剧透警告！】 『惠』身上的魔法在最后一集中被解除的真正原因</el-menu-item>
      <el-menu-item index="2-2" @click="navigateTo2_2">如果你要制作真人版《鲁莽天使》，演员阵容如何选择？</el-menu-item>
      <el-menu-item index="2-3" @click="navigateTo2_3">动画版和漫画版的决定性区别在于⌈最后一集中『天使惠』会做什么⌋</el-menu-item>
<!--      <el-sub-menu index="2-4">-->
<!--        <template #title>item four</template>-->
<!--        <el-menu-item index="2-4-1">item one</el-menu-item>-->
<!--        <el-menu-item index="2-4-2">item two</el-menu-item>-->
<!--        <el-menu-item index="2-4-3">item three</el-menu-item>-->
<!--      </el-sub-menu>-->
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>设定</template>
      <el-menu-item index="3-1"  @click="navigateTo3_1">概要</el-menu-item>
      <el-menu-item index="3-2">传记</el-menu-item>
      <el-menu-item index="3-3">魔法书</el-menu-item>
      <el-menu-item index="3-4">男子汉天书</el-menu-item>
      <el-menu-item index="3-4">人物专题</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4" @click="navigateTo4">关于</el-menu-item>
    <el-menu-item index="5" @click="navigateTo5">问题</el-menu-item>
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
