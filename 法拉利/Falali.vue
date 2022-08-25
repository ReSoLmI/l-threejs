<template>
  <div id="container"></div>
</template>

<script>
  let grid, bodyMaterial, detailsMaterial, glassMaterial, gui
  import * as THREE from 'three'
  import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'
  import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
  export default {
    name: 'Falali',
    data() {
      return {
        scene: undefined,
        camera: undefined,
        renderer: undefined,
        controls: undefined,
        carModel: undefined,
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
        _this.scene.environment = new RGBELoader().load('../../static/threejs-xuexi/venice_sunset_1k.hdr')
        _this.scene.environment.mapping = THREE.EquirectangularReflectionMapping
        _this.scene.fog = new THREE.Fog(0x333333, 10, 15)

        // 辅助坐标系
        // let axesHelper = new THREE.AxesHelper(250)
        // _this.scene.add(axesHelper)
        // 环境光
        // let ambientLight = new THREE.AmbientLight('#ffffff', 1)
        // _this.scene.add(ambientLight)

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
        _this.camera.position.set(4.25, 1.4, -4.5) //设置相机位置
        _this.scene.add(_this.camera)

        _this.controls = new OrbitControls(this.camera, _this.renderer.domElement)
        _this.controls.enableDamping = true
        _this.controls.maxDistance = 90
        _this.controls.target.set(0, 0.5, 0)
        _this.controls.update()

        grid = new THREE.GridHelper(20, 40, 0xffffff, 0xffffff)
        grid.material.opacity = 0.2
        grid.material.depthWrite = false
        grid.material.transparent = true
        _this.scene.add(grid)

        // materials
        bodyMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xff0000,
          metalness: 1.0,
          roughness: 0.5,
          clearcoat: 1.0,
          clearcoatRoughness: 0.03,
          sheen: 0.5
        })

        detailsMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 1.0,
          roughness: 0.5
        })

        glassMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          metalness: 0.25,
          roughness: 0,
          transmission: 1.0
        })

        const map = new THREE.TextureLoader().load('../../static/threejs-xuexi/1.png')
        const material = new THREE.SpriteMaterial({
          map: map
        })

        const sprite = new THREE.Sprite(material)
        sprite.scale.set(0.1, 0.1, 0.1)
        sprite.position.set(1, 0.8, 0.2)
        // scene.add(sprite);
        var sprite2 = sprite.clone()
        sprite2.position.set(-1, 0.8, 0.2)
        // scene.add(sprite2);

        var sphereGeometry = new THREE.SphereGeometry(0.02, 50, 50)
        var sphereMaterial = new THREE.MeshBasicMaterial({
          color: '#ffffff'
        })
        var sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial)
        sphere1.position.set(1, 0.8, 0.2)
        // scene.add(sphere1);
        var sphere2 = sphere1.clone()
        sphere2.position.set(-1, 0.8, 0.2)
        // scene.add(sphere2);

        const shadow = new THREE.TextureLoader().load('../../static/threejs-xuexi/2.png')

        let _GLTFLoader = new GLTFLoader()
        _GLTFLoader.load(
          '../../static/threejs-xuexi/falali.glb',
          gltf => {
            console.log('______gltf', gltf)

            _this.initExplodeModel(gltf.scene)
            _this.carModel = gltf.scene.children[0]

            _this.carModel.getObjectByName('body').material = bodyMaterial
            _this.carModel.getObjectByName('rim_fl').material = detailsMaterial
            _this.carModel.getObjectByName('rim_fr').material = detailsMaterial
            _this.carModel.getObjectByName('rim_rr').material = detailsMaterial
            _this.carModel.getObjectByName('rim_rl').material = detailsMaterial
            _this.carModel.getObjectByName('trim').material = detailsMaterial

            _this.carModel.getObjectByName('glass').material = glassMaterial
            _this.wheels.push(
              _this.carModel.getObjectByName('wheel_fl'),
              _this.carModel.getObjectByName('wheel_fr'),
              _this.carModel.getObjectByName('wheel_rl'),
              _this.carModel.getObjectByName('wheel_rr')
            )
            const mesh = new THREE.Mesh(
              new THREE.PlaneGeometry(0.655 * 4, 1.3 * 4),
              new THREE.MeshBasicMaterial({
                map: shadow,
                blending: THREE.MultiplyBlending,
                toneMapped: false,
                transparent: true
              })
            )
            mesh.rotation.x = -Math.PI / 2
            mesh.renderOrder = 2
            _this.carModel.add(mesh)
            _this.scene.add(_this.carModel)
          },
          xhr => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
          },
          error => {
            console.error(error)
          }
        )

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

        document.addEventListener('click', this.pickupObjects, false) //监听单击拾取对象初始化球体

        this.$nextTick(() => {
          this.render()
        })

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
        let _this = this
        const states = ['红色', '蓝色', '黄色']
        const emotes = ['聚合分散', '重置']

        const params = {
          聚合分散: 0,
          重置: this.reset
        }
        const bc = {
          车身颜色: '#ffffff',
          opacity: 1
        }
        const dc = {
          座椅颜色: '#ffffff',
          opacity: 1
        }
        const gc = {
          玻璃颜色: '#ffffff',
          opacity: 1
        }

        const gui = new GUI()
        gui.addColor(bc, '车身颜色').onChange(function() {
          bodyMaterial.color.set(bc.车身颜色)
        })
        gui.addColor(dc, '座椅颜色').onChange(function() {
          detailsMaterial.color.set(dc.座椅颜色)
        })
        gui.addColor(gc, '玻璃颜色').onChange(function() {
          glassMaterial.color.set(gc.玻璃颜色)
        })

        gui
          .add(params, emotes[0], 1, 30)
          .step(0.1)
          .name(emotes[0])
          .onChange(function(value) {
            _this.applyScalar(value)
          })
        gui.add(params, emotes[1])
      },

      applyScalar(scalar) {
        let _this = this
        _this.carModel.traverse(function(value) {
          if (!value.isMesh || !value.userData.originPosition) return

          const distance = value.userData.worldDir
            .clone()
            .multiplyScalar(value.userData.worldDistance.length() * scalar)
          const offset = new THREE.Vector3().subVectors(value.userData.meshCenter, value.userData.originPosition)
          const center = value.userData.explodeCenter
          const newPos = new THREE.Vector3()
            .copy(center)
            .add(distance)
            .sub(offset)
          const localPosition = value.parent ? value.parent.worldToLocal(newPos.clone()) : ''
          localPosition && value.position.copy(localPosition)
        })
      },

      initExplodeModel(model) {
        //模型包围盒
        let modelBox3 = new THREE.Box3()
        let meshBox3 = new THREE.Box3()

        //获取模型的包围盒
        modelBox3.setFromObject(model)

        //计算模型的中心点坐标，这个为爆炸中心
        let explodeCenter = modelBox3.getCenter(new THREE.Vector3())

        model.traverse(function(value) {
          if (value.isMark || value.isMarkChild || value.isLine || value.isSprite) return
          if (value.isMesh) {
            meshBox3.setFromObject(value)

            //获取每个mesh的中心点，爆炸方向为爆炸中心点指向mesh中心点
            let meshCenter = meshBox3.getCenter(new THREE.Vector3())
            //计算爆炸方向
            value.userData.worldDir = new THREE.Vector3().subVectors(meshCenter, explodeCenter).normalize()
            // 爆炸距离 mesh中心点到爆炸中心点的距离
            value.userData.worldDistance = new THREE.Vector3().subVectors(meshCenter, explodeCenter)
            // 原始坐标
            value.userData.originPosition = value.getWorldPosition(new THREE.Vector3())
            // mesh中心点
            value.userData.meshCenter = meshCenter.clone()
            value.userData.explodeCenter = explodeCenter.clone()
          }
        })
        const helper = new THREE.Box3Helper(modelBox3, 0xffff00)
        this.scene.add(helper)
      },
      reset() {
        window.location.reload()
      },
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(window.innerWidth, window.innerHeight)
      },

      render() {
        this.controls.update()

        this.renderer.render(this.scene, this.camera)

        const time = -performance.now() / 1000

        for (let i = 0; i < this.wheels.length; i++) {
          this.wheels[i].rotation.x = time * Math.PI * 2
        }

        grid.position.z = -time % 1
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
