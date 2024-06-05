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
  'https://www.cnsa.gov.cn/english/template/10536202/10536227.png',
  'https://www.cnsa.gov.cn/n6758824/n6759009/n6759040/c6780422/pic_6780422.jpg',
  'https://www.cnsa.gov.cn/n6758824/n6759009/n6759041/c6780463/pic_6780463.jpg',
  'https://www.cnsa.gov.cn/n6758824/n6759009/n6759042/c6780592/pic_6780592.jpg',
  'https://www.cnsa.gov.cn/n6758824/n6759009/n6759043/c6780607/pic_6780607.jpg',
  'https://www.cnsa.gov.cn/english/template/10536202/10536233.png',
]
</script>

<template>
  <br>
  <br>
  <div id="banner">
    <p class="text-center demonstration">中国航天</p>
    <el-carousel
        height="440px"
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
  line-height: 400px;
  margin: 0;
  text-align: center;
}

banner {
  margin-top: 20px;
}

img {
  width: 80%;
}

</style>
