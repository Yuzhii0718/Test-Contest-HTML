<script setup lang="ts">

import {ElNotification} from 'element-plus'

const downloading01 = () => {
  ElNotification({
    title: '资源 1',
    message: '打开黑洞的发布页···',
    type: 'success',
  })
  window.open('https://www.eso.org/public/images/eso1907a/', '_blank');
}
const downloading02 = () => {
  ElNotification({
    title: '资源 2',
    message: '打开银河系全景图的发布页···',
    type: 'success',
  })
  window.open('https://www.eso.org/public/images/eso1242a/', '_blank');
}
</script>

<template>
  <div class="main-container">
    <h1>资源</h1>
    <br>
<!--    <p id="describe">这里收集了一些有关太空的资源文件，源自互联网</p>-->
    <div class="download-card">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>黑洞</span>
            <el-button class="button" @click="downloading01" text>前往官网</el-button>
          </div>
        </template>
        <div class="scrollable-area">
          <div class="text item">1024×768 ：https://cdn.eso.org/images/wallpaper1/eso1907a.jpg</div>
          <div class="text item">1280×1024：https://cdn.eso.org/images/wallpaper2/eso1907a.jpg</div>
          <div class="text item">1600×1200：https://cdn.eso.org/images/wallpaper3/eso1907a.jpg</div>
          <div class="text item">1920×1200：https://cdn.eso.org/images/wallpaper4/eso1907a.jpg</div>
          <div class="text item">2048×1536：https://cdn.eso.org/images/wallpaper5/eso1907a.jpg</div>
        </div>
        <template #footer>First Image of a Black Hole</template>
      </el-card>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>银河系全景图 81亿像素</span>
            <el-button class="button" @click="downloading02" text>前往官网</el-button>
          </div>
        </template>
        <div class="scrollable-area">
          <div class="text item">变焦查看器：http://www.eso.org/public/images/eso1242a/zoomable</div>
          <div class="text item">3.92GB压缩版：http://www.eso.org/public/archiv ... iff40k/eso1242a.tif</div>
          <div class="text item">24.6GB原版：http://www.eso.org/public/archives/images/original/eso1242a.psb</div>
        </div>
        <template #footer>VISTA gigapixel mosaic of the central parts of the Milky Way</template>
      </el-card>
    </div>
    <p id="right" >资源来自互联网，如有侵权，请联系我删除。</p>
  </div>

</template>

<style scoped>
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

#describe {
  margin-bottom: 2em;
  width: 50%;
  line-height: 2em;
  text-indent: 2em;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 500px;
  height: 320px;
}

.download-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; /* 设置块与块之间的间隙 */
}

.scrollable-area {
  overflow-y: auto;
  max-height: 140px;
}

#right {
  margin-top: 5em;
  width: 50%;
  font-size: 12px;
  color: #666;
  text-align: center;
}

@media (max-width: 768px) {
  .main-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin-top: 15em;
  }

  #describe {
    margin-bottom: 2em;
    width: 100%;
    line-height: 2em;
    text-indent: 2em;
  }

  .box-card {
    width: 100%;
    scale: 80%;
  }

  #right {
    padding-bottom: 5em;
  }
}
</style>