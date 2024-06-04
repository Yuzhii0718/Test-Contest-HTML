<script setup lang="ts">

import {ElNotification} from 'element-plus'

const downloading01_1 = () => {
  ElNotification({
    title: '视频资源',
    message: '下载马上开始···',
    type: 'success',
  })
  const link = document.createElement('a');
  link.href = './assets/torrent.torrent';
  link.download = '[kisssub.org]20yrs ago - [2002-2003] Cheeky Angel_魯莽天使(天使な小生意気)_TV.torrent';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
const downloading01_2 = () => {
  ElNotification({
    title: '视频资源',
    message: '下载马上开始···',
    type: 'success',
  })
  window.open('magnet:?xt=urn:btih:7582f8c7e7caef5733f993a4c9761b7259f8696d&amp;tr=http://open.acgtracker.com:1096/announce', '_blank');
}
const downloading02 = () => {
  ElNotification({
    title: '汉语字幕',
    message: '下载马上开始···',
    type: 'success',
  })
  const link = document.createElement('a');
  link.href = './assets/ssa_chs&cht.zip';
  link.download = 'Cheeky-Angel_魯莽天使(天使な小生意気)_ssa_chs&cht.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<template>
  <div class="main-container">
    <h1>资源</h1>
    <br>
    <p id="describe">视频推荐下载<code>DVDRip.MKV.1296x720.RAW.U2</code>，此外，我还制作了与之对应的字幕，繁体是视频资源中经过修正的，简体是我额外制作的，效果也很好。</p>
    <div class="download-card">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>视频资源</span>
            <el-button class="button" @click="downloading01_1" text>种子下载</el-button>
            <el-button class="button" @click="downloading01_2" text>磁力下载</el-button>
          </div>
        </template>
        <div class="scrollable-area">
          <div class="text item">DVDRip.AVI.640x360.twHard (1-10)</div>
          <div class="text item">DVDRip.AVI.704x396.U2</div>
          <div class="text item">DVDRip.AVI.720x400.enHard (23-50)</div>
          <div class="text item">DVDRip.MKV.1296x720.RAW.U2</div>
          <div class="text item">DVDRip.MP4.704x480.U2</div>
          <div class="text item">TVRip.AVI.640x480.enHard (1-22)</div>
          <div class="text item">z.comic</div>
          <div class="text item">z.music</div>
        </div>
        <template #footer>使用 BitTorrent 软件进行下载</template>
      </el-card>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>汉语字幕</span>
            <el-button class="button" @click="downloading02" text>下载</el-button>
          </div>
        </template>
        <div class="scrollable-area">
          <div class="text item">[AI-Raws] 天使な小生意気 #zN (HEVC 1296x720 yuv444p10le FLAC)[hash].chs.ssa</div>
          <div class="text item">[AI-Raws] 天使な小生意気 #zN (HEVC 1296x720 yuv444p10le FLAC)[hash].cht.ssa</div>
        </div>
        <template #footer>配合专业的播放器使用</template>
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
  width: 480px;
  height: 300px;
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