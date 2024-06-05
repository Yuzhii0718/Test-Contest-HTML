<template>
  <MarkdownViewer :title="title" :link="link" :markdownFile="markdownFile" />
</template>

<script>
import MarkdownViewer from '../MarkdownViewer.vue';

export default {
  components: {
    MarkdownViewer
  },
  data() {
    return {
      title: '国家航天局',
      link: 'https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E8%88%AA%E5%A4%A9%E5%B1%80/1759449?fr=ge_ala',
      markdownFile: '/markdown/organization/cn.md'
    };
  }
};
</script>