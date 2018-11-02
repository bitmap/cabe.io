<template>
  <div class="container">
    <section>
      <BackBtn url="/" transition-direction="up" position="top" />
      <p>Senior Developer / Designer based in NYC.</p>
      <p>
        <span class="br">Currently <a :href="about.wnw" @click="track" target="_blank">Freelance</a>.</span>
        Formerly @ <a href="https://cincodesign.com" @click="track" target="_blank">Cinco</a> &amp; <a href="https://b-reel.com" @click="track" target="_blank">B-Reel</a>.
      </p>
      <p>Specilizing in JavaScript &amp; Node.js, React, Vue.js, Canvas, WebGL, Three.js, weird CSS, <router-link to="work">etc</router-link>.</p>
      <p>
        <span class="br">Check out my <a :href="about.resume" @click="track" target="_blank">résumé</a> or <a :href="about.linkedIn" @click="track" target="_blank">LinkedIn</a>,</span>
        <span class="br">code on <a :href="about.github" @click="track" target="_blank">GitHub</a>/<a :href="about.gitlab" @click="track" target="_blank">GitLab</a> &amp; <a :href="about.npm" @click="track" target="_blank">npm</a>,</span>
        or contact me by <a @click="track" :href="about.email">email</a> or <a @click="track" :href="about.phone">phone</a>.
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
  },
  methods: {
    track(event) {
      this.$ga.event('About Link', 'click', event.currentTarget.href)
    },
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
