<template>
  <div class="container">
    <section>
      <BackBtn url="/" transition-direction="up" position="top" />
      <h1>Cabe Branson is a Developer &amp; Designer based in New York.</h1>
      <p>
        <span class="br">Currently <a :href="about.wnw" @click="track" target="_blank">working</a> @ <a href="https://somethingnew.co" @click="track" target="_blank">Something New</a>.</span>
        Formerly @ <a href="https://cincodesign.com" @click="track" target="_blank">Cinco</a> &amp; <a href="https://b-reel.com" @click="track" target="_blank">B-Reel</a>.
      </p>
      <p>
        <span class="br">Check out my <a :href="about.resume" @click="track" target="_blank">resume</a>,</span>
        <span>connect on <a :href="about.linkedIn" @click="track" target="_blank">linkedin</a>,</span>
        <span class="br">see my code on <a :href="about.github" @click="track" target="_blank">github</a> &amp; <a :href="about.npm" @click="track" target="_blank">npm</a>,</span>
        <span><a @click="track" :href="about.email">email me</a></span>
        <span>or <a @click="track" :href="about.phone">call me</a>.</span>
      </p>
      <h3>Stack</h3>
      <p>JavaScript, TypeScript, Node, React, Next, Vue, Canvas, WebGL, Three.js, weird CSS, <router-link to="work">etc</router-link>.</p>

    </section>
  </div>
</template>

<script>
import BackBtn from 'components/BackBtn.vue'
import { about } from '../data'

export default {
  components: { BackBtn },
  data() {
    return { about }
  },
  mounted() {
    this.$root.$data.transition = 'up'
  },
  methods: {
    track(event) {
      this.$ga.event('About Link', 'click', event.currentTarget.href)
    },
  },
}
</script>

<style scoped lang="scss">
$width: 640px;

section {
  max-width: $width;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

h1 {
  font-size: 2.5rem;
  text-transform: uppercase;
  margin: 0 0 0;
  line-height: 1.1;
}

h3 {
  font-size: 2rem;
  text-transform: uppercase;
  margin: 3rem 0 0;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

@media screen and (min-width: $width) {
  .br { display: block; }
}
</style>
