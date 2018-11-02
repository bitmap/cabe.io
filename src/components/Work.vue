<template>
  <div class="container" @mousemove="follow">
    <Doink />
    <section>

      <h2 class="header header-left"><div>Internet</div></h2>
      <ul class="sites">
        <li class="site" v-for="site in sites" :key="site.title">
          <a @click="track" :href="site.url" target="_blank">
            <img :src="site.img" />
          </a>
        </li>
      </ul>

      <h2 class="header header-right"><div>Other Stuff</div></h2>
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

      <h2 class="header header-tilt"><div>Just Code</div></h2>
      <ul class="codes">
        <li class="code" v-for="code in codes" :key="code.title">
          <a @click="track" :href="code.url" target="_blank">
            <h3>{{ code.title }}</h3>
            <p>{{ code.desc }}</p>
          </a>
        </li>
      </ul>

      <BackBtn url="/" transition-direction="down" position="bottom"/>

    </section>
  </div>
</template>

<script>
import BackBtn from 'components/BackBtn.vue'
import Doink from 'components/Doink.vue'
import { sites, projects, codes } from '../data'

export default {
  data: function() {
    return { sites, projects, codes, tick: 0 }
  },
  components: { BackBtn, Doink },
  mounted: function() {
    this.$root.$data.transition = 'down'
  },
  methods: {
    transition: function(dir) {
      this.$root.transitionDir(dir)
    },

    track(event) {
      this.$ga.event('Work Link', 'click', event.currentTarget.href)
    },

    follow(event) {
      const headers = document.querySelectorAll('.header div')
      let i = 0
      if (this.tick % 3) {
        headers.forEach(text => {

          const w = text.clientWidth
          const h = text.clientHeight
          let x = ((event.clientX - window.innerWidth / 2) - (w * 2) / window.innerWidth) / 100
          let y = ((event.clientY - window.innerHeight / 2) - (h * 2) / window.innerHeight) / 50

          if (i % 2) {
            x = -((event.clientX - window.innerWidth / 2) - (w * 2) / window.innerWidth) / 100
          }

          text.style.transform = `translate(${x}%, ${y}%)`

          i += 1
        })
      }


      this.tick += 1
    },
  }
}
</script>

<style scoped lang="scss">
.container {
  -webkit-overflow-scrolling: touch;

  section {
    margin-top: 4rem;

    @media screen and (max-width: 720px) {
      margin-top: 2rem;
    }
  }
}

h3 {
  font-size: 2.5rem;
  margin: 0;
  white-space: nowrap;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
}

p {
  font-size: 1.25rem;
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

.header {
  color: #52ffc4;
  font-size: 4rem;
  text-transform: uppercase;
  margin: 0;

  .chrome & {
    -webkit-filter: url("#doink");
    filter: url("#doink");
  }

  div { transition: 800ms ease-out; }

  &-left {
    transform: rotate(-5deg) translateX(-1em) translateY(0);
    transform-origin: 0 0;
    line-height: 1;
    padding-left: 4rem;
  }

  &-right {
    text-align: right;
    transform: rotate(15deg) translateY(1em);
    transform-origin: 100% 100%;
  }

  &-tilt {
    text-align: center;
    transform: rotate(4deg) translate(0, -2rem);
    transform-origin: 0 0;
    margin: 0 0 2rem;
  }

  @media screen and (max-width: 720px) {
    font-size: 3rem;
    -webkit-filter: none;
    filter: none;

    &-left {
      padding-left: 2rem;
    }

    &-right {
      padding-left: 0;
      transform: rotate(10deg) translateX(-2rem) translateY(0);
    }

    &-tilt {
      text-align: left;
      transform: rotate(8deg) translate(0, -1rem);
    }
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
    height: 16rem;
    display: flex;
    transition: 250ms;
    padding: 0;
    position: relative;
    text-align: center;
    transform: scale(0.9);

    &:hover {
      transform: scale(1);
    }
  }

  img {
    width: 24rem;
    max-width: 320px;
    max-width: 240px;
    display: block;
    margin: auto;
  }

  a {
    margin: auto;
  }

  @media screen and (max-width: 720px) {
    padding-left: 0;

    .site {
      flex-basis: 100%;
    }
  }
}

.projects {
  align-items: flex-start;
  justify-content: flex-start;

  .project {
    min-width: (100% / 3);
    padding: 0 2rem;
    margin-bottom: 2rem;

    &:nth-child(3) {
      margin-left: (100% / 6);
    }

    &:nth-child(5) {
      margin-left: (100% / 3);
    }
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    min-width: 100%;
    min-height: 300px;
    max-width: 300px;
    opacity: 0.5;
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

      &:nth-child(3),
      &:nth-child(5) {
        margin-left: 0;
      }
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
  align-items: flex-end;

  .code {
    width: 50%;
    padding-right: 2rem;

    a {
      display: block;
      color: white;
      padding-bottom: 5rem;
      height: 10rem;

      &:hover {
        h3 {
          color: #52ffc4;
        }
      }
    }

    &:nth-child(even) a {
      transform: translateY(5rem);
    }

    @media screen and (max-width: 720px) {
      width: 100%;

      a {
        height: auto;
        padding: 0 0 2rem !important;
      }

      &:nth-child(even) a {
        transform: translateY(0);
      }
    }
  }
}
</style>
