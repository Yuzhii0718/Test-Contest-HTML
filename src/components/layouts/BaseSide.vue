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
        <template #title><span>地外天体</span></template>
        <el-sub-menu index="1-1">
          <template #title><span>星星</span></template>
          <el-menu-item index="1-1-1" @click="navigateToPost_01">NGC 4731</el-menu-item>
          <el-menu-item index="1-1-2" @click="navigateToPost_02">NGC 6744</el-menu-item>
          <el-menu-item index="1-1-3" @click="navigateToPost_03">NGC 4449</el-menu-item>
          <el-menu-item index="1-1-4" @click="navigateToPost_04">NGC 2217</el-menu-item>
          <el-menu-item index="1-1-5" @click="navigateToPost_05">M76</el-menu-item>
        </el-sub-menu>
      </el-menu-item-group>
      <!--      <el-menu-item-group title="Group Two">-->
      <!--        <el-menu-item index="1-3">item three</el-menu-item>-->
      <!--      </el-menu-item-group>-->
<!--      <el-sub-menu index="1-2">-->
<!--        <template #title><span>第 11-20 卷</span></template>-->
<!--        <el-menu-item index="1-2-1">第 11 卷</el-menu-item>-->
<!--        <el-menu-item index="1-2-2">第 12 卷</el-menu-item>-->
<!--        <el-menu-item index="1-2-3">第 13 卷</el-menu-item>-->
<!--        <el-menu-item index="1-2-4">第 14 卷</el-menu-item>-->
<!--        <el-menu-item index="1-2-5">第 15 卷</el-menu-item>-->
<!--        <el-menu-item index="1-2-6">第 16 卷</el-menu-item>-->
<!--        <el-menu-item index="1-2-7">第 17 卷</el-menu-item>-->
<!--        <el-menu-item index="1-2-8">第 18 卷</el-menu-item>-->
<!--        <el-menu-item index="1-2-9">第 19 卷</el-menu-item>-->
<!--        <el-menu-item index="1-2-10">第 20 卷</el-menu-item>-->
<!--      </el-sub-menu>-->
    </el-sub-menu>
    <el-menu-item index="2" @click="openCNSite">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>中国国家航天局</template>
    </el-menu-item>
    <el-menu-item index="3" @click="openNASASite">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>NASA</template>
    </el-menu-item>
    <el-menu-item index="4" @click="openSpaceXSite">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>SpaceX</template>
    </el-menu-item>
    <el-menu-item index="4" @click="openEUSite">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>European Space Agency</template>
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

const openCNSite = () => {
  window.open('https://www.cnsa.gov.cn//', '_blank');
};
const openSpaceXSite = () => {
  window.open('https://www.spacex.com/', '_blank');
};
const openEUSite = () => {
  window.open('https://www.esa.int//', '_blank');
};
const openNASASite = () => {
  window.open('https://www.nasa.gov//', '_blank');
};

import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToPost_01 = () => {
  window.open('https://science.nasa.gov/image-detail/hubble-ngc4731-potw2422a/', '_blank');
}
const navigateToPost_02 = () => {
  window.open('https://www.nasa.gov/image-article/big-brother-milky-way/', '_blank');
}
const navigateToPost_03 = () => {
  window.open('https://www.nasa.gov/image-article/big-brother-milky-way/', '_blank');
}
const navigateToPost_04 = () => {
  window.open('https://www.nasa.gov/image-article/big-brother-milky-way/', '_blank');
}
const navigateToPost_05 = () => {
  window.open('https://www.nasa.gov/image-article/big-brother-milky-way/', '_blank');
}

</script>
