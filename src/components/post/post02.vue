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
      title: '2巻の名場面＆伏線',
      link: 'https://xn--q9j984gbug42c4wieqsm2o.jp/02-meibamen/',
      markdownFile: '/markdown/post02.md'
    };
  }
};
</script>