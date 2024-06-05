<script setup lang="ts">
import Home from "~/components/home/Home.vue";
import Logos from "~/components/home/Logos.vue";
import Introduction from "~/components/home/Introduction.vue";
import Banner from "~/components/home/Banner.vue";
</script>

<template>
  <div class="main-container">
    <div w="full" py="4" id="Home">
      <Logos my="4" msg=""/>
      <Home msg="『星星』 专题"/>
    </div>
    <div w="full" py="4">
      <Introduction/>
    </div>
    <div w="full" py="4">
      <Banner/>
    </div>
  </div>
</template>

<style scoped>

/* Add your styles here */
#Home {
  text-align: center;
}

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>