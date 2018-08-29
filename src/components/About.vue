<template>
  <div class="container">
    <section>
      <BackBtn url="/" transition-direction="up" position="top" />
      <p>Senior Developer / Designer based in NYC.</p>
      <p>
        <span class="br">Currently <a :href="about.wnw" target="_blank">Freelance</a>.</span>
        Formerly @ <a href="https://cincodesign.com" target="_blank">Cinco</a> &amp; <a href="https://b-reel.com" target="_blank">B-Reel</a>.
      </p>
      <p>Specilizing in JavaScript & Node.js, React, Vue.js, Canvas, WebGL, Three.js, weird CSS, <router-link to="work">etc</router-link>.</p>
      <p>
        <span class="br">Check out my <a :href="about.resume" target="_blank">résumé</a> or <a :href="about.linkedIn" target="_blank">LinkedIn</a>,</span>
        <span class="br">code on <a :href="about.github" target="_blank">GitHub</a>/<a :href="about.gitlab" target="_blank">GitLab</a> &amp; <a :href="about.npm" target="_blank">npm</a>,</span>
        or contact me by <a :href="about.email">email</a> or <a :href="about.phone">phone</a>.
      </p>
      <p>✌️</p>
    </section>
  </div>
</template>

<script>
import BackBtn from 'components/BackBtn.vue'
import { about } from '../data'

export default {
  components: { BackBtn },
  data: function() {
    return { about }
  },
  mounted: function() {
    this.$root.$data.transition = 'up'
  }
}
</script>

<style scoped lang="scss">
$width: 640px;

section {
  max-width: $width;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

@media screen and (min-width: $width) {
  .br { display: block; }
}

</style>
