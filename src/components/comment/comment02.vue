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
      title: '宇宙探索的历史演进与时代价值',
      link: 'http://www.rmlt.com.cn/2023/0316/668417.shtml',
      markdownFile: '/markdown/comment02.md'
    };
  }
};
</script>