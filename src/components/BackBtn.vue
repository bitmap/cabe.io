<template>
  <router-link
    :class="position"
    :to="{path: url}"
    @click.native="transition(transitionDirection)" />
</template>

<script>
export default {
  props: ['transitionDirection', 'url', 'position'],
  methods: {
    transition(dir) {
      this.$root.transitionDir(dir)
    },
  },
}
</script>

<style scoped lang="scss">
a {
  display: flex;
  left: 0;
  height: 25vh;
  line-height: 25vh;
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;
  width: 100%;
  position: relative;
  color: white;
  transition: none;
  overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    display: block;
    margin: 0 auto;
    transition: 0.7s ease;
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    font-size: 1.2rem;
    font-weight: bold;
    content: "BACK";
    opacity: 0;
    transition: 0.7s ease;
    margin: auto;
  }

  &:hover::after {
    color: #52ffc4;
  }

  &:hover::before {
    color: #52ffc4;
    opacity: 1;
  }

  &.bottom {
    &::after {
      content: "\2193";
    }

    &:hover::after {
      transform: translate(-50%, 2rem);
    }
  }

  &.top {
    &::after {
      content: "\2191";
    }

    &:hover::after {
      transform: translate(-50%, -2rem);
    }
  }
}
</style>
