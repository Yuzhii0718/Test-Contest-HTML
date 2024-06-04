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
      title: '4巻の名場面＆伏線',
      link: 'https://xn--q9j984gbug42c4wieqsm2o.jp/04-meibamen/',
      markdownFile: '/markdown/post04.md'
    };
  }
};
</script>