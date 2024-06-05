<script setup lang="js">

</script>

<template>

<svg id="mySVG" style="border:1px solid black;">
  <circle cx="50" cy="50" r="50" fill="red" />
  <rect x="150" y="25" width="100" height="100" fill="blue" />
</svg>

<div id="infoBox" style="position: absolute; display: none; background: white; border: 1px solid black; padding: 10px;">
  <p id="infoText"></p>
</div>

</template>

<script>
const svg = document.getElementById('mySVG');
const infoBox = document.getElementById('infoBox');
const infoText = document.getElementById('infoText');

svg.addEventListener('mouseover', function(event) {
  const target = event.target;
  if (target.tagName !== 'svg') {
    target.style.fill = 'green';
    infoText.textContent = '详细信息：' + target.tagName;
    infoBox.style.display = 'block';
    infoBox.style.left = event.pageX + 'px';
    infoBox.style.top = event.pageY + 'px';
  }
});

svg.addEventListener('mouseout', function(event) {
  const target = event.target;
  if (target.tagName !== 'svg') {
    target.style.fill = target.tagName === 'circle' ? 'red' : 'blue';
    infoBox.style.display = 'none';
  }
});
</script>

<style scoped>

</style>