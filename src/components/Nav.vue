<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/work" @click="transition('up')">
          <span>Select Work</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about" @click="transition('down')">
          <span>About</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  methods: {
    transition(dir) {
      setTimeout(() => this.$root.transitionDir(dir), 0)
    },
  },
}
</script>

<style scoped lang="scss">
.nav {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: 10000;
  opacity: 0;
  animation: fadeIn 5s ease forwards;

  @media screen and (max-width: 720px) {
    height: calc(100vh - 44px);
  }

  a {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: none;
    color: white;

    span {
      transition: 0.7s ease;
      margin: auto;
    }
  }

  ul {
    height: 100vh;

    @media screen and (max-width: 720px) {
      height: calc(100vh - 44px);
    }
  }

  li {
    position: absolute;
    top: 0;
    height: 50vh;
    width: 100vw;
    transition: 0.7s ease;
    line-height: 1;

    @media screen and (min-width: 720px) {
      &:hover a span {
        transform: translateY(-2vh);
        color: #52ffc4;
      }

      &:nth-of-type(2) {
        top: auto;
        bottom: 0;

        &:hover a span {
          transform: translateY(2vh);
          color: #52ffc4;
        }
      }
    }

    @media screen and (max-width: 720px) {
      font-size: 1.5rem;
    }
  }
}
</style>
