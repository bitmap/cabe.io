<template>
  <div class="container">
    <section>
      <BackBtn url="/" transition-direction="up" position="top" />
      <h1>Cabe Branson is a Developer &amp; Designer based in New York.</h1>
      <p>
        <span class="br">Currently <a :href="about.wnw" target="_blank">working</a> @ <a href="https://somethingnew.co" target="_blank">Something New</a>.</span>
        Formerly @ <a href="https://cincodesign.com" target="_blank">Cinco</a> &amp; <a href="https://b-reel.com" target="_blank">B-Reel</a>.
      </p>
      <p>
        <span class="br">Check out my <a :href="about.resume" target="_blank">resume</a>,</span>
        <span>connect on <a :href="about.linkedIn" target="_blank">linkedin</a>,</span>
        <span class="br">see my code on <a :href="about.github" target="_blank">github</a> &amp; <a :href="about.npm" target="_blank">npm</a>,</span>
        <span><a :href="about.email">email me</a></span>
        <span>or <a :href="about.phone">call me</a>.</span>
      </p>
      <h3>Stack</h3>
      <p>JavaScript, TypeScript, Node, React, React Native, Next, Vue, Canvas, WebGL, Three.js, weird CSS, Python, <router-link to="work">whatever</router-link>.</p>

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
  methods: {},
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
