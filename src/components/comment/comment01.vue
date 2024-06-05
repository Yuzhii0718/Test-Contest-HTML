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
      title: '人类探索太空的15座里程碑',
      link: 'https://finance.sina.cn/tech/2021-06-21/detail-ikqcfnca2353928.d.html?fromtech=1&from=wap',
      markdownFile: '/markdown/comment01.md'
    };
  }
};
</script>