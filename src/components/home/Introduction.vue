<script setup lang="ts">
const openwiki_work = () => {
  window.open('https://ja.wikipedia.org/wiki/%E5%A4%A9%E4%BD%BF%E3%81%AA%E5%B0%8F%E7%94%9F%E6%84%8F%E6%B0%97');
};

const openwiki_author = () => {
  window.open('https://ja.wikipedia.org/wiki/%E8%A5%BF%E6%A3%AE%E5%8D%9A%E4%B9%8B');
};

</script>

<template>

  <el-tooltip
      class="box-item"
      effect="dark"
      content="链接到维基百科"
      placement="left-start"
  >
    <h2 @click="openwiki_work">
      简介
    </h2>
  </el-tooltip>

  <p class="lookup">《天使的小生意气》（天使な小生意気），又名《鲁莽天使》，<br>
    是由TMS娱乐制作公司制作的搞笑的校园爱情动画。 在2002年4月开始连载。<br>
    讲述了从魔法书中跑出的恶魔小丑天使惠由男生变成了“女人中的女人”，<br>
    为了尽快恢复自己的男儿身，开始寻找那本丢失已久的魔法书的故事。</p>

  <el-tooltip
      class="box-item"
      effect="dark"
      content="链接到维基百科"
      placement="left-start"
  >
    <h2 @click="openwiki_author">
      作者简介
    </h2>
  </el-tooltip>

  <p>
    中文名：西森博之<br>
    性别：男<br>
    生日：1963年11月23日<br>
    出生地：千叶县<br>
    <br>
    高中毕业后向少女漫画投稿，后向小学馆投稿少年漫画。<br>
    作品集<br>
    1987年《プー太郎》<br>
    1990年《歪哥刑警》2集<br>
    1990年连载《我是大哥大》成名作品，之后新作都受到极大影响。<br>
    1998年连载《劲爆好小子》和春风邪三太合画<br>
    1999年连载《天使的小生意气》20集（有外传2话），这部作品作者得到小学馆的46回漫画奖<br>
    2004年连载《高校武士道士郎》</p>

</template>

<style scoped>

p {
  padding-left: 2em;
  padding-right: 2em;
}

h2 {
  padding-left: 1em;
}

</style>