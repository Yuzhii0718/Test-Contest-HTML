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
      title: '天使な小生意気のレビューサイトについて',
      link: 'https://xn--q9j984gbug42c4wieqsm2o.jp/',
      markdownFile: '/markdown/about.md'
    };
  }
};
</script>