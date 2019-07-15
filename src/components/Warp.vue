<template>
  <div ref="scene" />
</template>

<script>
import {
  OrthographicCamera,
  Scene,
  Mesh,
  BoxBufferGeometry,
  MeshBasicMaterial,
  WebGLRenderer,
  CubeCamera,
  BoxGeometry,
  NearestFilter,
  DoubleSide,
  TextureLoader,
} from 'three'

export default {

  mounted() {
    if (!this.$root.$data.loaded) {
      this.$root.$data.texture = new TextureLoader()
      this.$root.$data.texture.load('static/img/warp.png', t => {
        this.init(t)
        this.animate()
        this.$refs.scene.classList.add('warp')
        this.$refs.scene.appendChild(this.$root.$data.warp.renderer.domElement)
      })
    } else {
      this.$refs.scene.appendChild(this.$root.$data.warp.renderer.domElement)
    }

    this.$root.$data.warp.paused = false
  },
  methods: {
    init(texture) {
      const { warp } = this.$root.$data

      warp.camera = new OrthographicCamera(
        window.innerWidth / -2,
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerHeight / -2,
        1,
        720
      )

      warp.camera.position.x = 0
      warp.camera.position.y = 720

      warp.scene = new Scene()

      warp.cubeMesh = new Mesh(
        new BoxBufferGeometry(540, 540, 540),
        new MeshBasicMaterial({ map: texture, transparent: true })
      )

      warp.cubeMesh.geometry.scale(-1, 1, 1)
      warp.cubeMesh.position.z = -1e4
      warp.scene.add(warp.cubeMesh)

      warp.renderer = new WebGLRenderer({
        antialias: false,
      })

      warp.renderer.setPixelRatio(window.devicePixelRatio)
      warp.renderer.setSize(window.innerWidth, window.innerHeight)
      warp.renderer.setClearColor(0, 1)

      warp.cubeCam1 = new CubeCamera(100, 1e3, 1024)
      warp.cubeCam1.renderTarget.texture.minFilter = NearestFilter
      warp.cubeCam1.position.z = -1e4
      warp.scene.add(warp.cubeCam1)

      warp.cubeCam2 = new CubeCamera(100, 1e3, 1024)
      warp.cubeCam2.renderTarget.texture.minFilter = NearestFilter
      warp.cubeCam2.position.z = -1e4
      warp.scene.add(warp.cubeCam2)

      warp.material = new MeshBasicMaterial({
        // color: 5439428,
        envMap: warp.cubeCam2.renderTarget.texture,
        side: DoubleSide,
        opacity: 0.5,
      })

      const geometry = new BoxGeometry(1024, 1024, 1024)

      warp.cube1 = new Mesh(geometry, warp.material)
      warp.cube2 = new Mesh(geometry, warp.material)
      warp.cube3 = new Mesh(geometry, warp.material)

      warp.scene.add(warp.cube1)
      warp.scene.add(warp.cube2)

      warp.camera.lookAt(warp.scene.position)

      window.addEventListener('resize', this.resize, false)
    },

    resize() {
      const { warp } = this.$root.$data

      warp.renderer.setSize(window.innerWidth, window.innerHeight)
      warp.camera.aspect = window.innerWidth / window.innerHeight
      warp.camera.updateProjectionMatrix()
    },

    animate() {
      requestAnimationFrame(this.animate)

      const { warp } = this.$root.$data

      if (!warp.paused) {
        warp.cube1.rotation.x += 0.002
        warp.cube1.rotation.y += 0.003
        warp.cube1.rotation.z += 0.00138

        warp.cube2.rotation.x -= 0.0025
        warp.cube2.rotation.y -= 0.005
        warp.cube2.rotation.z -= 0.004

        warp.cube3.rotation.x += 0.0025
        warp.cube3.rotation.y -= 0.0054
        warp.cube3.rotation.z += 0.003

        // double buffer
        if (warp.tick % 2 === 0) {
          warp.material.envMap = warp.cubeCam1.renderTarget.texture
          warp.cubeCam2.update(warp.renderer, warp.scene)
        } else {
          warp.material.envMap = warp.cubeCam2.renderTarget.texture
          warp.cubeCam1.update(warp.renderer, warp.scene)
        }

        warp.tick += 1
      }

      warp.renderer.render(warp.scene, warp.camera)
    },
  },
}
</script>

<style scoped lang="scss">
div {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;

  &.warp {
    animation: fadeIn 10s ease;
  }
}
</style>
