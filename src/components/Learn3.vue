<template>
  <div>
    <div id="container"></div>
    <div class="controls-box">
      <section>
        <p>
          <button type="primary" class="controls-button" size="mini" @click="resetCamera">resetCamera</button>
        </p>
      </section>
    </div>
  </div>
</template>
<script>
  import * as THREE from 'three'
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

  export default {
    name: 'Learn3',
    data() {
      return {
        publicPath: '',
        mesh: null,
        camera: null,
        scene: null,
        renderer: null,
        trackballControls: null,
        clock: null
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      // 初始化
      init() {
        this.createScene() // 创建场景
        // this.loadObjMtl() // 加载OBJ、MTL模型
        this.initFeiji() // 加载OBJ、MTL模型
        this.createLight() // 创建光源
        this.createCamera() // 创建相机
        this.createRender() // 创建渲染器
        this.createTrackballControls() // 创建轨迹球控件
        this.render() // 渲染
      },
      // 创建场景
      createScene() {
        this.scene = new THREE.Scene()
      },
      // 加载OBJ、MTL模型
      loadObjMtl() {
        const mtlLoader = new MTLLoader()
        const objLoader = new OBJLoader()
        const THIS = this
        mtlLoader.load(`../../static/IKING_Project/scenes/OBJ_03.mtl`, material => {
          material.preload()
          objLoader.setMaterials(material) //mtl文件中的材质设置到obj加载器
          return objLoader.load(`../../static/IKING_Project/scenes/OBJ_03.obj`, loadedMesh => {
            THIS.mesh = loadedMesh
            loadedMesh.scale.set(0.2, 0.2, 0.2)
            THIS.setRandomColors(loadedMesh, THIS)
            THIS.scene.add(THIS.mesh)
          })
        })
      },
      initFeiji() {
        let _this = this
        let loader = new GLTFLoader()
        loader.load('../../static/sheng-feiji.glb', function(result) {
          _this.mesh = result.scene
          _this.scene.add(_this.mesh)
        })
      },
      //给材质设置红黄绿随机色，并设置透明度
      setRandomColors(object, THIS) {
        const children = object.children

        if (children && children.length > 0) {
          children.forEach(function(e) {
            THIS.setRandomColors(e, THIS)
          })
        } else {
          if (object instanceof THREE.Mesh) {
            const colorIndex = Math.floor(Math.random() * 3) //0~2的随机数
            const colorArray = [new THREE.Color(0xff0000), new THREE.Color(0x00ff00), new THREE.Color(0x0000ff)]
            object.material.color = colorArray[colorIndex]
            object.material.transparent = true
            object.material.opacity = 0.3
            if (object.material.name && object.material.name.indexOf('building') == 0) {
              object.material.emissive = colorArray[colorIndex]
              object.material.transparent = true
              object.material.opacity = 0.3
            }

            //重新计算面法向量和顶点法向量,修复模型导入为重黑色
            object.geometry.computeFaceNormals()
            object.geometry.computeVertexNormals()
          }
        }
      },
      // 创建光源
      createLight() {
        // 环境光
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1) // 创建环境光
        this.scene.add(ambientLight) // 将环境光添加到场景

        const spotLight = new THREE.SpotLight(0xffffff) // 创建聚光灯
        spotLight.position.set(200, 200, 200)
        spotLight.castShadow = true
        this.scene.add(spotLight)
      },
      // 创建相机
      createCamera() {
        const element = document.getElementById('container')
        const width = element.clientWidth // 窗口宽度
        const height = element.clientHeight // 窗口高度
        const k = width / height // 窗口宽高比
        this.camera = new THREE.PerspectiveCamera(35, k, 0.1, 1000)
        this.camera.position.set(-80, 60, 40) // 设置相机位置

        this.camera.lookAt(new THREE.Vector3(10, 0, 0)) // 设置相机方向
        this.scene.add(this.camera)
      },
      // 创建渲染器
      createRender() {
        const element = document.getElementById('container')
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(element.clientWidth, element.clientHeight) // 设置渲染区域尺寸
        this.renderer.shadowMap.enabled = true // 显示阴影
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.setClearColor(0x3f3f3f, 1) // 设置背景颜色
        element.appendChild(this.renderer.domElement)
      },

      render() {
        const delta = this.clock.getDelta() // 获取自上次调用的时间差
        this.trackballControls.update(delta) // 相机更新
        this.renderer.render(this.scene, this.camera)
        requestAnimationFrame(this.render)
      },
      //相机恢复
      resetCamera() {
        this.trackballControls.reset()
      },
      // 创建轨迹球控件
      createTrackballControls() {
        this.clock = new THREE.Clock() //创建THREE.Clock对象，用于计算上次调用经过的时间
        this.trackballControls = new TrackballControls(this.camera, this.renderer.domElement)

        this.trackballControls.rotateSpeed = 1.0 //相机的旋转速度
        this.trackballControls.zoomSpeed = 1.0 //相机的缩放速度
        this.trackballControls.panSpeed = 1.0 //相机的平移速度
        this.trackballControls.staticMoving = true //关闭拖拽惯性移动
        //添加相机移动监听事件
        this.trackballControls.addEventListener('change', function(event) {
          console.log(event)
          //这里可以做一些基于相机位置变化的事情
        })
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
