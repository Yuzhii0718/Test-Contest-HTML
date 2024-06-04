<!--    <el-carousel indicator-position="outside" height="500px">-->
<!--      <el-carousel-item>-->
<!--        <img src="https://pics.prcm.jp/d00e9dad6977d/83016890/jpeg/83016890.jpeg" alt="1"/>-->
<!--      </el-carousel-item>-->
<!--      <el-carousel-item>-->
<!--        <img src="https://pics.prcm.jp/d00e9dad6977d/83016879/jpeg/83016879.jpeg" alt="2"/>-->
<!--      </el-carousel-item>-->
<!--      <el-carousel-item>-->
<!--        <img src="https://pics.prcm.jp/d00e9dad6977d/83016844/jpeg/83016844.jpeg" alt="3"/>-->
<!--      </el-carousel-item>-->
<!--      <el-carousel-item>-->
<!--        <img src="https://pics.prcm.jp/d00e9dad6977d/83016836/jpeg/83016836.jpeg" alt="4"/>-->
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->
<script setup  lang="ts">
const items = [
  'https://pics.prcm.jp/d00e9dad6977d/83016890/jpeg/83016890.jpeg',
  'https://pics.prcm.jp/d00e9dad6977d/83016879/jpeg/83016879.jpeg',
  'https://pics.prcm.jp/d00e9dad6977d/83016844/jpeg/83016844.jpeg',
  'https://pics.prcm.jp/d00e9dad6977d/83016836/jpeg/83016836.jpeg',
]
</script>

<template>
  <br>
  <br>
  <div id="banner">
    <p class="text-center demonstration">剧集截屏</p>
    <el-carousel
        height="400px"
        direction="vertical"
        type="card"
        :autoplay="true"
        :interval="3000"
        :pause-on-hover="true"
    >
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item" alt="Carousel item" />
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

banner {
  margin-top: 20px;
}

img {
  width: 100%;
}

</style>
