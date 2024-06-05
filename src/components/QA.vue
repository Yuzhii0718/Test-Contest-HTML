<template>
  <MarkdownViewer :title="title" :link="link" :markdownFile="markdownFile" />
</template>

<script>
import MarkdownViewer from './MarkdownViewer.vue';

export default {
  components: {
    MarkdownViewer
  },
  data() {
    return {
      title: '黑洞起源之谜',
      link: 'https://www.nasachina.cn/pos/5508.html',
      markdownFile: '/markdown/qa.md'
    };
  }
};
</script>