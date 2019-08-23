<template>
  <div class="container" @mousemove="follow">
    <Doink />
    <section>

      <div class="chunk">
        <h2 class="header">Web</h2>
        <ul class="sites">
          <li class="site" v-for="site in sites" :key="site.title">
            <a @click="track" :href="site.url" target="_blank">
              <img :src="site.img" />
            </a>
          </li>
        </ul>
        </div>
      <div class="chunk">

      <h2 class="header">Etc</h2>
        <ul class="projects">
          <li class="project" v-for="project in projects" :key="project.title">
            <a @click="track" :href="project.url" target="_blank">
            <img :src="project.img" />
            <div>
            <h3>{{ project.title }}</h3>
              <p>{{ project.desc }}</p>
            </div>
            </a>
          </li>
        </ul>
      </div>

      <div class="chunk">
        <h2 class="header">Code</h2>
        <ul class="codes">
          <li class="code" v-for="code in codes" :key="code.title">
            <a @click="track" :href="code.url" target="_blank">
              <h3>{{ code.title }}</h3>
              <p>{{ code.desc }}</p>
            </a>
          </li>
        </ul>
      </div>

      <BackBtn url="/" transition-direction="down" position="bottom"/>

    </section>
  </div>
</template>

<script>
import BackBtn from 'components/BackBtn.vue'
import Doink from 'components/Doink.vue'
import { sites, projects, codes } from '../data'

export default {
  data() {
    return { sites, projects, codes, tick: 0 }
  },
  components: { BackBtn, Doink },
  mounted() {
    this.$root.$data.transition = 'down'
  },
  methods: {
    transition(dir) {
      this.$root.transitionDir(dir)
    },

    track(event) {
      this.$ga.event('Work Link', 'click', event.currentTarget.href)
    },

    follow(event) {
      const headers = document.querySelectorAll('.sites li')
      let i = 0
      if (this.tick % 3) {
        headers.forEach(text => {

          const w = text.clientWidth
          const h = text.clientHeight
          let x = ((event.clientX - window.innerWidth / 2) - (w * 2) / window.innerWidth) / 100
          const y = ((event.clientY - window.innerHeight / 2) - (h * 2) / window.innerHeight) / 50

          if (i % 2) {
            x = -((event.clientX - window.innerWidth / 2) - (w * 2) / window.innerWidth) / 100
          }

          text.style.transform = `translate(${x}%, ${y}%)`

          i += 1
        })
      }


      this.tick += 1
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  -webkit-overflow-scrolling: touch;

  section {
    margin-top: 6rem;

    @media screen and (max-width: 720px) {
      margin-top: 2rem;
    }
  }
}

h3 {
  font-size: 2rem;
  margin: 0;
  white-space: nowrap;
  text-transform: uppercase;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
}

p {
  font-size: 1.2rem;
  margin: 0;

  @media screen and (max-width: 720px) {
    font-size: 1rem;
  }
}

ul {
  padding: 0;
  margin: 0 0 8rem;
  list-style: none;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 720px) {
    margin-bottom: 2rem;
  }
}

.chunk {
  position: relative;
}

.header {
  font-size: 6rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  position: absolute;
  transform: rotate(90deg) translate(0%, 20%);
  transform-origin: 0 0%;
  top: 0;
  left: 0;

  @media screen and (max-width: 720px) {
    font-size: 3rem;
    -webkit-filter: none;
    transform: rotate(90deg) translate(0%, -25%);
    z-index: 100;
    color: #52ffc4;
  }
}

.sites {
  align-items: center;
  justify-content: center;
  padding-left: 0;
  margin-bottom: 4rem;
  display: flex;
  flex-flow: row wrap;

  .site {
    flex-basis: (100% / 3);
    height: 12rem;
    display: flex;
    transition: 250ms;
    padding: 0;
    position: relative;
    text-align: center;
    transform: scale(0.9);

    &:hover {
      transform: scale(1.2) !important;
    }
  }

  img {
    width: 20rem;
    max-width: 200px;
    display: block;
    margin: 0 auto auto;
  }

  a {
    margin: 0 auto;
  }

  @media screen and (max-width: 720px) {
    padding-left: 0;

    a {
      margin: auto;
    }

    .site {
      flex-basis: 100%;
    }
  }
}

.projects {
  align-items: center;
  justify-content: center;
  margin: 6rem auto;

  .project {
    min-width: calc(100% / 3);
    margin-bottom: 2rem;
    flex: (100% / 3);
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 300px;
    opacity: 0.2;
    transition: 300ms ease;
    position: relative;
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;
    image-rendering: optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
    filter: grayscale(100%) contrast(200%);
  }

  p {
    padding-right: 2rem;
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: 0 0;
  }

  a {
    position: relative;
    display: block;
    color: white;
    transition: none;

    &:hover {
      img {
        filter: grayscale(0%);
        opacity: 1;
      }

      div {
        transform: translateY(0);
      }
    }
  }

  @media screen and (max-width: 720px) {
    .project {
      min-width: 100%;
    }

    a {
      padding-right: 0;
    }

    img {
      filter: grayscale(0%) contrast(100%);
      opacity: 1;
    }
  }
}

.codes {
  margin: 6rem auto 0;

  .code {
    width: 50%;
    padding-right: 2rem;

    a {
      display: block;
      color: white;
      padding-bottom: 3rem;

      &:hover {
        h3 {
          color: #52ffc4;
        }
      }
    }

    @media screen and (max-width: 720px) {
      width: 100%;

      a {
        height: auto;
        padding: 0 0 2rem !important;
      }
    }
  }
}
</style>
