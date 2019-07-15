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
  height: 50vh;
  line-height: 25vh;
  text-align: center;
  font-size: 2.5rem;
  margin: 0 auto;
  width: 100%;
  position: relative;
  color: white;
  transition: none;

  &::after {
    display: block;
    margin: 4rem auto;
    transition: 0.7s ease;
  }

  &:hover::after {
    color: #52ffc4;
  }

  &.bottom {
    &::after {
      content: "\2193";
    }

    &:hover::after {
      transform: translateY(2vh);
    }
  }

  &.top {
    height: 25vh;

    &::after {
      content: "\2191";
    }

    &:hover::after {
      transform: translateY(-2vh);
    }
  }
}
</style>
