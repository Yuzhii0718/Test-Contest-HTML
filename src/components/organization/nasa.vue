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
      title: 'NASA',
      link: 'https://baike.baidu.com/item/%E7%BE%8E%E5%9B%BD%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E5%B1%80/5959612?fromtitle=NASA&fromid=243500',
      markdownFile: '/markdown/organization/nasa.md'
    };
  }
};
</script>