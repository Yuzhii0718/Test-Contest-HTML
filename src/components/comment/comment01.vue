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
      title: '【ネタバレ注意！】最終回で恵の魔法が解けた本当の理由',
      link: 'https://xn--q9j984gbug42c4wieqsm2o.jp/netabare/',
      markdownFile: '/markdown/comment01.md'
    };
  }
};
</script>