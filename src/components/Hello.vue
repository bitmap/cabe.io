<template>
  <main @mousemove="follow">
    <Nav />
    <Doink />
    <Warp />
    <section class="splash">
      <h1 class="splash_text">
        <div>Cabe Branson</div>
        <div>Creative Developer</div>
      </h1>
    </section>
  </main>
</template>

<script>
import Nav from 'components/Nav.vue'
import Warp from 'components/Warp.vue'
import Doink from 'components/Doink.vue'

export default {
  components: {
    Nav, // eslint-disable-line
    Warp,
    Doink,
  },

  data() { return { tick: 0 }},

  methods: {
    follow(event) {
      if (this.tick % 3) {
        const text = document.querySelector('.splash_text')
        const w = text.clientWidth
        const h = text.clientHeight
        const x = ((event.clientX - window.innerWidth / 2) - (w * 2) / window.innerWidth) / 100 - 50
        const y = ((event.clientY - window.innerHeight / 2) - (h * 2) / window.innerHeight) / 25 - 50
        text.style.transform = `translate(${x}%, ${y}%)`
      }

      this.tick += 1
    },

    split(el) {
      const divs = [...el.querySelectorAll('.splash_text div')]

      for (let i = 0, { length } = divs; i < length; i += 1) {
        const spantastic = divs[i].textContent.replace(/\w/g, '<span>$&</span>')
        divs[i].innerHTML = spantastic
      }

      const spans = [...el.querySelectorAll('.splash_text span')]
      return spans
    },

    hover(spans) {
      for (let i = 0, { length } = spans; i < length; i += 1) {
        spans[i].addEventListener('mouseover', e => phase(e.target))
      }

      function phase(span) {
        span.classList.add('phase')
        span.style.transitionDelay = ''

        setTimeout(() => {
          span.classList.remove('phase')
        }, 1000)
      }
    },

    intro(spans) {
      function animate(span, i) {
        span.style.transitionDelay = `${i * 35}ms`
        span.style.transform = 'translateY(0)'
        span.style.color = ''
      }

      for (let i = 0, { length } = spans; i < length; i += 1) {
        spans[i].style.color = 'transparent'

        setTimeout(() => {
          animate(spans[i], i)
        }, 100)
      }
    },
  },

  mounted() {
    const spans = this.split(this.$el)
    this.hover(spans)

    if (!this.$root.$data.loaded) {
      this.intro(spans)
      this.$root.$data.loaded = true
    }
  },
}
</script>

<style scoped lang='scss'>
main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.splash {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 11000;
  user-select: none;
  pointer-events: none;
  overflow: hidden;

  .chrome & {
    -webkit-filter: url("#doink");
    filter: url("#doink");
  }

  @media screen and (max-width: 720px) {
    height: calc(100vh - 44px);
    -webkit-filter: none;
    filter: none;
  }
}

.splash_text {
  font-size: 6rem;
  perspective: 100vw;
  white-space: nowrap;
  position: absolute;
  text-align: center;
  line-height: 1.2;
  pointer-events: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  transition: 800ms ease-out;

  @media screen and (max-width: 720px) {
    font-size: 2rem;
  }

  /deep/ span {
    display: inline-block;
    transform-style: preserve-3d;
    transform-origin: 50%;
    transition-property: all;
    transition-duration: 500ms;
    pointer-events: auto;
    transform: translateY(-10px);
  }

  /deep/ .phase {
    color: #52ffc4;
    transition-property: color, transform;
  }
}
</style>
