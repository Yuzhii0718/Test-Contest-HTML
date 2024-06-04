<script setup lang="ts">

</script>

<template>
  <el-card shadow="hover">
    <div id="byncsa">
      <h2>BY-NC-SA</h2>
      <p>
        This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
      </p>
      <p>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
          <img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" alt="Creative Commons License"/>
        </a>
      </p>
    </div>
  </el-card>
</template>

<style scoped>
#byncsa {
  padding-top: 50px;
  width: 15%;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  right: 0;
}

@media (max-width: 1400px) {
  #byncsa h2 {
    font-size: 100%;
  }

  #byncsa > p:nth-child(2) {
    display: none;
  }

  #byncsa {
    position: fixed;
    top: -2em;
    right: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 70%;
  }
}

@media (max-width: 768px) {
  #byncsa h2, #byncsa > p:nth-child(2) {
    display: none;
  }

  #byncsa img {
    transform: rotate(-90deg);
    filter: invert(1);
    display: block;
    left: -1em;
    position: fixed;
    bottom: 2.5em;
  }
}

</style>