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
      title: 'アニメ版と漫画版で決定的に違うのは、「最終回にめぐがどうなるか」！',
      link: 'https://xn--q9j984gbug42c4wieqsm2o.jp/anime/chigai/',
      markdownFile: '/markdown/comment03.md'
    };
  }
};
</script>