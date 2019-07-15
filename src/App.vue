<template>
  <div id="app" :class="{chrome: isChrome}" >
    <transition :name="this.$root.$data.transition">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import * as inobounce from 'inobounce'; // eslint-disable-line

export default {
  name: 'App',
  data() {
    return {
      isChrome: !!window.chrome,
    }
  },
}
</script>

<style lang='scss'>
#app {
  overflow: hidden;
}

.container {
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9998;
  padding: 0 2rem;
  min-height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 720px) {
    min-height: calc(100vh - 44px);
  }
}

.container section {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
