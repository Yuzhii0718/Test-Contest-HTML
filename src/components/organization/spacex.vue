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
      title: 'Spacex',
      link: 'https://baike.baidu.com/item/%E5%A4%AA%E7%A9%BA%E6%8E%A2%E7%B4%A2%E6%8A%80%E6%9C%AF%E5%85%AC%E5%8F%B8?fromtitle=SpaceX&fromid=7997507&fromModule=lemma_search-box',
      markdownFile: '/markdown/organization/spacex.md'
    };
  }
};
</script>