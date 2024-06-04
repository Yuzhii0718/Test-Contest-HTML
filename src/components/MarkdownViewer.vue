<template>
  <div id="mdview">
<!--    <p>{{ title }}</p>-->
<!--    <label v-for="control in controls" :id="control">-->
<!--      <input v-model="options[control]" type="checkbox">-->
<!--      {{ control }}-->
<!--    </label>-->
<!--    <hr>-->
    <br>
    <Markdown :source='source' v-bind='options' :plugins='plugins' class="markdown-body"/>
    <br>
    <hr>
    <p>原文链接：<a :href="link" target="_blank">{{ title }}</a> </p>
    <br>
  </div>
</template>

<script>
import MarkdownItIcons from 'markdown-it-icons';
import Markdown from "vue3-markdown-it";

export default {
  components: {
    Markdown
  },
  props: {
    title: String,
    link: String,
    markdownFile: String
  },
  data() {
    return {
      source: '',
      options: {
        breaks: true,
        html: true,
        linkify: true,
        typographer: true,
      },
      controls: ['breaks', 'html', 'linkify', 'typographer'],
      plugins: [
        {
          plugin: MarkdownItIcons,
          options: 'font-awesome'
        }
      ]
    };
  },

  async created() {
    const response = await fetch(this.markdownFile);
    if (response.ok) {
      this.source = await response.text();
    } else {
      console.error('Failed to load markdown file');
    }
  }

};
</script>

<style scoped>
#mdview {
  padding-top: 50px;
  width: 40%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  #mdview {
    padding-top: 1em;
    width: 80%;
    margin: 0 auto;
  }
}

</style>