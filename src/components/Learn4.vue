<template>
  <!--  模型点击高亮&#45;&#45;模型后期处理-->
  <div>
    <div id="container"></div>
  </div>
</template>
<script>
  var scene, camera, controls, pointLight, stats
  var composer, renderer, mixer
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
  import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

  export default {
    name: 'Learn4',
    data() {
      return {}
    },
    mounted() {
      this.init()
    },
    methods: {
      // 初始化
      init() {
        var container = document.getElementById('container')

        renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0x3f3f3f, 1) // 设置背景颜色
        //renderer.toneMapping = THREE.ReinhardToneMapping;
        container.appendChild(renderer.domElement)

        scene = new THREE.Scene()

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100)
        camera.position.set(-5, 2.5, -3.5)
        scene.add(camera)

        controls = new OrbitControls(camera, renderer.domElement)

        var renderScene = new RenderPass(scene, camera)

        var bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85)
        bloomPass.threshold = 0
        bloomPass.strength = 1.5
        bloomPass.radius = 0

        composer = new EffectComposer(renderer)
        composer.addPass(renderScene)
        composer.addPass(bloomPass)

        let box = new THREE.CylinderGeometry(5, 5, 5)
        let mail = new THREE.MeshBasicMaterial()
        let mesh = new THREE.Mesh(box, mail)
        scene.add(mesh)
        this.render() // 渲染
      },
      render() {
        requestAnimationFrame(this.render)
        composer.render()
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
  .controls-box {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 300px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #c3c3c3;
  }
</style>
