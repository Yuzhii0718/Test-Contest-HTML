<script setup lang="ts">
const openwiki_work = () => {
  window.open('https://baike.baidu.com/item/%E4%BA%BA%E9%A1%9E%E6%8E%A2%E7%B4%A2%E5%A4%AA%E7%A9%BA%E5%8F%B2/9852857');
};

import { ref, computed } from 'vue';

const fullText = '二战后，美国和前苏联在德国的研究基础上继续从事火箭及其他航天技术的研究工作。\n' +
    '    美国和前苏联研制的各种类型导弹武器相继问世，形成了导弹武器系统，\n' +
    '    同时也积累了研制运载火箭的经验，建立了与之配套且初具规模的工业设施。\n' +
    '    1957年10月4日，前苏联採用改装的P－7洲际导弹把世界上第一颗人造地球卫星送入太空。\n' +
    '    人类要实现上天的愿望必须满足三个条件：第一要有强大的运载工具，第二要有乘坐宇航员的先进的航天器，\n' +
    '    第三必须弄清高空环境和飞行环境对人体的影响，并找到防护措施。到20世纪50年代，\n' +
    '    美国和前苏联在这几方面都取得了长足的进步，为载人航天奠定了坚实的技术基础。\n' +
    '    1961年4月12日，前苏联首先将载有世界上第一名宇航员尤里·加加林的“东方1号”宇宙飞船送入离地面181～327千米的空间轨道。\n' +
    '    尤里·加加林的航天飞行，实现了人类梦寐以求的飞天愿望，开创了载人航天的新时代。\n' +
    '    美国也紧随其后，1969年7月20日，“阿波罗11号”登月舱在月球“静海”区安全着陆，\n' +
    '    美国宇航员N·A·阿姆斯特朗和E·E·奥尔德林登上月球，实现了人类几千年的梦想，使嫦娥奔月的神话变成了现实，\n' +
    '    人类探索太空的成就达到了新的高峯。\n' +
    '    自第一颗人造衞星成功发射后，在短短不到半个世纪的时间里，人类对太空的探索已取得了飞速发展。\n' +
    '    从人造衞星的应用到星际探索，从月球探险到火星、土星勘探计划再到彗星“深度撞击”。\n' +
    '    截至2004年底，世界各国共进行了航天发射4000多次，把5500多个各类航天器送入太空，\n' +
    '    目前，仍在轨道上或宇宙中运行的航天器大约有1300多个。\n' +
    '    迄今为止，人类已经研制成功了载人飞船、空间站、航天飞机等三种不同的载人航天器，\n' +
    '    将500多人送入太空，有12人登上月球，并已开始建造永久性载人空间站。';
const showFullText = ref(false);
const displayText = computed(() => {
  if (showFullText.value) {
    return fullText;
  } else {
    return fullText.slice(0, 600);  // 只显示前100个字符
  }
});

const toggleShowFullText = () => {
  showFullText.value = !showFullText.value;
};

</script>

<template>

  <el-tooltip
      class="box-item"
      effect="dark"
      content="链接到百科"
      placement="left-start"
  >
    <h2 @click="openwiki_work">
      探索宇宙
    </h2>
  </el-tooltip>

  <p class="">{{ displayText }}</p>
  <el-button type="primary" round @click="toggleShowFullText">
    {{ showFullText ? '收起' : '显示全部' }}
  </el-button>
</template>

<style scoped>

p {
  padding-left: 2em;
  padding-right: 2em;
}

h2 {
  padding-left: 1em;
}

</style>