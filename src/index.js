import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'

Vue.config.productionTip = false

const warp = {
  paused: false,
  camera: null,
  cubeMesh: null,
  cubeCam1: null,
  cubeCam2: null,
  scene: null,
  renderer: null,
  material: null,
  cube1: null,
  cube2: null,
  cube3: null,
  texture: null,
  tick: 0,
}

const data = {
  transition: 'down',
  loaded: false,
  warp,
}

const transition = {
  methods: {
    transitionDir(dir) {
      this.$root.$data.transition = dir
    },
  },
}

new Vue({
  el: '#cabe',
  data,
  router,
  components: { App },
  template: '<App/>',
  mixins: [transition],
})
