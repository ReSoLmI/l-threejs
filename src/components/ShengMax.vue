<template>
  <!--  圣MAX 解剖  -->
  <div id="container"></div>
</template>

<script>
  import * as THREE from 'three'
  import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
  export default {
    name: 'ShengMax',
    data() {
      return {
        scene: undefined,
        camera: undefined,
        renderer: undefined,
        controls: undefined
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        let _this = this
        _this.scene = new THREE.Scene()
        _this.scene.background = new THREE.Color(0x333333)
        _this.scene.environment = new RGBELoader().load('../../static/threejs-xuexi/venice_sunset_1k.hdr')
        _this.scene.environment.mapping = THREE.EquirectangularReflectionMapping
        // _this.scene.fog = new THREE.Fog(0x333333, 10, 15)

        // 辅助坐标系
        let axesHelper = new THREE.AxesHelper(250)
        _this.scene.add(axesHelper)
        // 环境光
        let ambientLight = new THREE.AmbientLight('#ffffff', 1)
        _this.scene.add(ambientLight)

        const element = document.getElementById('container')
        _this.renderer = new THREE.WebGLRenderer({
          antialias: true
        })
        _this.renderer.setPixelRatio(window.devicePixelRatio)
        _this.renderer.setSize(window.innerWidth, window.innerHeight)
        _this.renderer.setAnimationLoop(_this.render)
        _this.renderer.outputEncoding = THREE.sRGBEncoding
        _this.renderer.toneMapping = THREE.ACESFilmicToneMapping
        _this.renderer.toneMappingExposure = 0.85
        element.appendChild(_this.renderer.domElement)

        window.addEventListener('resize', _this.onWindowResize)

        _this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000)
        _this.camera.position.set(10, 10, 10) //设置相机位置
        _this.scene.add(_this.camera)

        _this.controls = new OrbitControls(this.camera, _this.renderer.domElement)
        _this.controls.enableDamping = true
        _this.controls.maxDistance = 90
        _this.controls.target.set(0, 0.5, 0)
        _this.controls.update()

        let _GLTFLoader = new GLTFLoader()
        _GLTFLoader.load(
          '../../static/sheng-feiji.glb',
          gltf => {
            console.log('______gltf', gltf)
            gltf.scene.name = 'sheng-max'
            gltf.scene.scale.set(0.1, 0.1, 0.1) //  设置模型大小缩放

            _this.scene.add(gltf.scene)
          },
          xhr => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
          },
          error => {
            console.error(error)
          }
        )
        this.$nextTick(() => {
          this.render()
        })
      },

      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
      },

      render() {
        this.controls.update()

        this.renderer.render(this.scene, this.camera)
      }
    }
  }
</script>

<style>
  #container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
