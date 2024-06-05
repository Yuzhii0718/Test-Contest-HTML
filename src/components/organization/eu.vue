comment01.vue<template>
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
      title: '欧空局',
      link: 'https://baike.baidu.com/item/%E6%AC%A7%E6%B4%B2%E8%88%AA%E5%A4%A9%E5%B1%80?fromtitle=%E6%AC%A7%E7%A9%BA%E5%B1%80&fromid=715731&fromModule=lemma_search-box',
      markdownFile: '/markdown/organization/eu.md'
    };
  }
};
</script>