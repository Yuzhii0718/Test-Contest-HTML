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
      title: 'あらすじ',
      link: 'https://xn--q9j984gbug42c4wieqsm2o.jp/arasuji/',
      markdownFile: '/markdown/summary.md'
    };
  }
};
</script>