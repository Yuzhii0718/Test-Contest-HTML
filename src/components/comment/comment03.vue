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
      title: '无垠宇宙中的人类探索',
      link: 'https://news.cyol.com/gb/articles/2021-11/13/content_Lqx5guG7q.html',
      markdownFile: '/markdown/comment03.md'
    };
  }
};
</script>