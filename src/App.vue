<template>
  <el-config-provider namespace="ep">
    <BaseHeader/>
    <div class="flex main-container">
      <BaseSide/>
      <ClientOnly>
        <router-view/>
      </ClientOnly>
    </div>
<!--    <div id="byncsa">-->
<!--      <Byncsa/>-->
<!--    </div>-->
    <el-backtop :right="320" :bottom="50" id="backtop"/>
  </el-config-provider>
</template>

<style>
#app {
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}

#byncsa {
  position: fixed;
}

@media (max-width: 768px) {
  #backtop {
    display: none;
  }
}

</style>

<script>

</script>