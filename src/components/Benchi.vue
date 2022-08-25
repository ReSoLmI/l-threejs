<template>
  <!--  // 汽车模型开门动画颜色变换视角切换功能-->
  <div id="container"></div>
</template>

<script>
  let labelRenderer, grid, bodyMaterial, detailsMaterial, glassMaterial
  import * as THREE from 'three'
  import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'
  import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
  // import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js'
  // import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
  // import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
  // import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
  export default {
    name: 'HelloWorld2',
    data() {
      return {
        scene: undefined,
        camera: undefined,
        renderer: undefined,
        controls: undefined,
        carModel: undefined,
        doors: [],
        wheels: []
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
        // 包含了光照信息的环境 hdr 图，（因为没有添加灯光，少了他，场景就是黑色的）
        _this.scene.environment = new RGBELoader().load('../../static/threejs-xuexi/venice_sunset_1k.hdr')
        _this.scene.environment.mapping = THREE.EquirectangularReflectionMapping
        _this.scene.fog = new THREE.Fog(0x333333, 10, 15)

        let _GLTFLoader = new GLTFLoader()
        _GLTFLoader.load(
          '../../static/threejs-xuexi/benchi.glb',
          gltf => {
            console.log('______gltf', gltf)
            _this.carModel = gltf.scene

            let bodyModel1 = _this.carModel.getObjectByName('磨砂框架')
            let bodyModel2 = _this.carModel.getObjectByName('车门')
            // 车身框架
            // traverse --- 遍历
            bodyModel1.traverse(function(value) {
              value.material = bodyMaterial
            })

            // 车门包括细节
            bodyModel2.traverse(function(value) {
              // console.log(value.name)
              if (value.name.indexOf('_tex') > 0 || value.name.indexOf('_gum') > 0 || value.name.indexOf('_chr') > 0) {
                value.material = detailsMaterial
              } else if (value.name.indexOf('_skl') > 0) {
                value.material = glassMaterial
              } else {
                value.material = bodyMaterial
                if (value.name == 'DLP' || value.name == 'DLZ' || value.name == 'DPP' || value.name == 'DPZ') {
                  _this.doors.push(value)
                }
              }
            })

            let glassModel = _this.carModel.getObjectByName('车身')
            glassModel.traverse(function(value) {
              if (value.name.indexOf('_skl') > 0) {
                // 挡风玻璃
                value.material = glassMaterial
              } else {
                value.material = detailsMaterial
              }
            })

            let wheelModel = _this.carModel.getObjectByName('车轮')
            wheelModel.traverse(function(value) {
              if (value.material) {
                value.material.roughness = 1
              }
            })

            _this.wheels.push(...wheelModel.children)
            _this.carModel.scale.set(0.03, 0.03, 0.03)
            _this.carModel.position.set(0, 0.25, 0)

            _this.scene.add(gltf.scene)
          },
          xhr => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
          },
          error => {
            console.error(error)
          }
        )

        // 辅助坐标系
        let axesHelper = new THREE.AxesHelper(250)
        // axesHelper.position.set(100, 0, 0);
        this.scene.add(axesHelper)
        // 环境光
        var ambientLight = new THREE.AmbientLight('#ffffff', 1)
        this.scene.add(ambientLight)

        grid = new THREE.GridHelper(20, 40, 0xffffff, 0xffffff)
        grid.material.opacity = 0.2
        grid.material.depthWrite = false
        grid.material.transparent = true
        this.scene.add(grid)

        // materials
        bodyMaterial = new THREE.MeshPhysicalMaterial({
          color: '#000000',
          metalness: 1.0,
          roughness: 0.5,
          clearcoat: 1.0,
          clearcoatRoughness: 0.03,
          sheen: 0.5
        })

        detailsMaterial = new THREE.MeshStandardMaterial({
          color: '#ffffff',
          metalness: 1.0,
          roughness: 0.5
        })

        glassMaterial = new THREE.MeshPhysicalMaterial({
          color: '#793e3e',
          metalness: 0.25,
          roughness: 0,
          transmission: 1.0
        })

        const waves = document.createElement('div')
        waves.className = 'status'
        const solid = document.createElement('div')
        solid.className = 'solid'
        const animate1 = document.createElement('div')
        animate1.className = 'animate1'
        const animate2 = document.createElement('div')
        animate2.className = 'animate2'
        waves.appendChild(solid)
        waves.appendChild(animate1)
        waves.appendChild(animate2)

        const wavesLabel_right = new CSS2DObject(waves)
        wavesLabel_right.position.set(0.7, 0.7, -1.2)
        const wavesLabel_left = wavesLabel_right.clone()
        wavesLabel_left.position.set(-0.7, 0.7, -1.2)
        _this.scene.add(wavesLabel_right)
        _this.scene.add(wavesLabel_left)

        const element = document.getElementById('container')
        this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000)
        this.camera.position.set(4.25, 1.4, -4.5) //设置相机位置
        this.scene.add(this.camera)

        this.renderer = new THREE.WebGLRenderer({
          antialias: true
        })
        this.renderer.setSize(element.clientWidth, element.clientHeight) // 设置渲染区域尺寸
        this.renderer.shadowMap.enabled = true // 显示阴影
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping
        this.renderer.setClearColor(0x3f3f3f, 1) // 设置背景颜色
        element.appendChild(this.renderer.domElement)

        labelRenderer = new CSS2DRenderer()
        labelRenderer.setSize(window.innerWidth, window.innerHeight)
        labelRenderer.domElement.style.position = 'absolute'
        labelRenderer.domElement.style.top = '0px'
        document.body.appendChild(labelRenderer.domElement)

        window.addEventListener('resize', this.onWindowResize)
        document.addEventListener('click', this.pickupObjects, false) //监听单击拾取对象初始化球体

        this.$nextTick(() => {
          this.render()
        })

        this.controls = new OrbitControls(this.camera, labelRenderer.domElement)
        this.controls.enableDamping = true
        this.controls.maxDistance = 9
        this.controls.target.set(0, 0.5, 0)

        this.createGUI()
      },
      pickupObjects(event) {
        // 点击屏幕创建一个向量
        var raycaster = new THREE.Raycaster()
        var vector = new THREE.Vector2(
          (event.clientX / window.innerWidth) * 2 - 1,
          -(event.clientY / window.innerHeight) * 2 + 1
        )
        raycaster.setFromCamera(vector, this.camera)
        let intersects = raycaster.intersectObjects(this.scene.children)
      },
      createGUI() {
        const emotes = ['打开车门', '关闭车门', '车内视角', '车外视角']

        const params = {
          打开车门: this.carOpen,
          关闭车门: this.carClose,
          车内视角: this.carIn,
          车外视角: this.carOut
        }
        const bc = {
          车身颜色: '#6e2121',
          opacity: 1
        }
        const gc = {
          玻璃颜色: '#aaaaaa',
          opacity: 1
        }
        const dc = {
          细节颜色: '#6c6c6c',
          opacity: 1
        }
        const gui = new GUI()
        gui.addColor(bc, '车身颜色').onChange(function() {
          bodyMaterial.color.set(bc.车身颜色)
        })
        gui.addColor(dc, '细节颜色').onChange(function() {
          detailsMaterial.color.set(dc.细节颜色)
        })
        gui.addColor(gc, '玻璃颜色').onChange(function() {
          glassMaterial.color.set(gc.玻璃颜色)
        })

        gui.add(params, emotes[0])
        gui.add(params, emotes[1])
        gui.add(params, emotes[2])
        gui.add(params, emotes[3])
      },

      carOpen() {
        for (let i = 0; i < this.doors.length; i++) {
          if (this.doors[i].name == 'DLP' || this.doors[i].name == 'DLZ') {
            this.setupTweenDoor({ z: 0 }, { z: Math.PI * 0.4 }, this.doors[i])
          }
          if (this.doors[i].name == 'DPP' || this.doors[i].name == 'DPZ') {
            this.setupTweenDoor({ z: 0 }, { z: Math.PI * -0.4 }, this.doors[i])
          }
        }
      },

      carClose(scalar) {
        for (let i = 0; i < this.doors.length; i++) {
          if (this.doors[i].name == 'DLP' || this.doors[i].name == 'DLZ') {
            this.setupTweenDoor({ z: Math.PI * 0.4 }, { z: 0 }, this.doors[i])
          }
          if (this.doors[i].name == 'DPP' || this.doors[i].name == 'DPZ') {
            this.setupTweenDoor({ z: Math.PI * -0.4 }, { z: 0 }, this.doors[i])
          }
        }
      },

      carIn() {
        this.setupTweenCamera(
          { cx: 4.25, cy: 1.4, cz: -4.5, ox: 0, oy: 0.5, oz: 0 },
          { cx: -0.27, cy: 0.83, cz: -0.9, ox: 0, oy: 0.5, oz: -3 }
        )
      },

      carOut() {
        this.setupTweenCamera(
          { cx: -0.27, cy: 0.83, cz: -0.9, ox: 0, oy: 0.5, oz: -3 },
          { cx: 4.25, cy: 1.4, cz: -4.5, ox: 0, oy: 0.5, oz: 0 }
        )
      },

      setupTweenCamera(source, target) {
        let _this = this
        const carTween = new TWEEN.Tween(source).to(target, 3000).easing(TWEEN.Easing.Quadratic.Out)
        carTween.onUpdate(function(that) {
          _this.camera.position.set(that.cx, that.cy, that.cz)
          _this.controls.target.set(that.ox, that.oy, that.oz)
        })
        carTween.start()
      },

      setupTweenDoor(source, target, mesh) {
        const carTween = new TWEEN.Tween(source).to(target, 1000).easing(TWEEN.Easing.Quadratic.Out)
        carTween.onUpdate(function(that) {
          mesh.rotation.z = that.z
        })
        carTween.start()
      },

      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(window.innerWidth, window.innerHeight)

        labelRenderer.setSize(window.innerWidth, window.innerHeight)
      },
      render() {
        const time = -performance.now() / 1000
        for (let i = 0; i < this.wheels.length; i++) {
          this.wheels[i].rotation.x = time * Math.PI * 2
        }
        grid.position.z = -time % 1

        TWEEN.update()
        this.controls.update()
        this.renderer.render(this.scene, this.camera) //执行渲染操作
        labelRenderer.render(this.scene, this.camera)
        requestAnimationFrame(this.render)
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
