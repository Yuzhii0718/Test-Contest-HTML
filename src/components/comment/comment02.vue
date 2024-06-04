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
      title: 'もし天使な小生意気を実写化するとしたらキャストは？',
      link: 'https://xn--q9j984gbug42c4wieqsm2o.jp/jissyaka/',
      markdownFile: '/markdown/comment02.md'
    };
  }
};
</script>