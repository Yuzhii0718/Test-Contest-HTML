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
      title: 'カテゴリー: 疑問',
      link: 'https://xn--q9j984gbug42c4wieqsm2o.jp/category/question/',
      markdownFile: '/markdown/qa.md'
    };
  }
};
</script>