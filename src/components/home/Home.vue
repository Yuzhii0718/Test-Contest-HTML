<script setup lang="ts">
import {StarFilled, Message} from '@element-plus/icons-vue'

defineProps<{ msg: string }>();


</script>

<template>
  <h1 color="$ep-color-primary">{{ msg }}</h1>

  <p>
    星星
  </p>

  <el-divider border-style="dashed">
    <el-icon>
      <star-filled/>
    </el-icon>
  </el-divider>

  <!-- example components -->
  <h2>申明</h2>
  <p>如果构成侵权，请联系我进行删除。</p>
  <p><a href="mailto:admin@yuzhii0718.eu.org">
    <el-popover
        placement="top-start"
        title="联系我"
        :width="180"
        trigger="hover"
        content="通过电子邮件与我联系
                 Contact me via email
                 メールで連絡して"
    >
      <template #reference>
        <el-button type="primary" :icon="Message">Email</el-button>
      </template>
    </el-popover>
  </a></p>

</template>

<style scoped>
.lookup {
  width: 75%;
  margin: 0 auto;
  color: var(--ep-text-color-primary);
  line-height: 1.5;
}
#Home > p:nth-child(6) {
  padding-left: 2em;
  padding-right: 2em;
}


@media (max-width: 768px) {
  p {
    padding-left: 2em;
    padding-right: 2em;
  }
}
</style>