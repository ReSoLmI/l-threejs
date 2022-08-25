<template>
  <!--  Threejs实现镜头跟随物体移动效果，镜头拐弯并保持运动方向-->
  <div id="container"></div>
</template>

<script>
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

  let scene, camera, controls, renderer, mesh, curve, cube1, cube2

  const loopTime = 10000 // loopTime: 循环一圈的时间

  import * as THREE from 'three'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

  export default {
    name: 'Learn2',
    data() {
      return {}
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        // 创建一个场景，它将包含我们所有的元素，如物体，相机和灯光。
        scene = new THREE.Scene()

        // 创建一个摄像机，它定义了我们正在看的地方
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000)
        // 将摄像机对准场景的中心
        camera.position.z = -5746
        camera.position.y = 3289
        camera.position.x = -15945
        camera.lookAt(scene.position)

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          logarithmicDepthBuffer: true
        })
        renderer.setClearColor(new THREE.Color('#0e0934'))
        renderer.setSize(window.innerWidth, window.innerHeight)

        let ambientLight = new THREE.AmbientLight('#ffffff', 1)
        scene.add(ambientLight)

        // 将呈现器的输出添加到HTML元素
        document.getElementById('container').appendChild(renderer.domElement)

        // 监听窗体调整大小事件
        window.addEventListener('resize', this.onResize, false)
        // controls = new OrbitControls(camera, renderer.domElement)
        // controls.enableDamping = true
        // controls.maxDistance = 9
        // controls.target.set(0, 0.5, 0)
        this.initFeiji()
        this.render()
      },
      initFeiji() {
        let _this = this
        let loader = new GLTFLoader()
        loader.load('../../static/sheng-feiji.glb', function(result) {
          mesh = result.scene
          mesh.position.set(-1000, -5000, -5000)
          scene.add(mesh)
          _this.motion()
        })
      },
      motion() {
        // 通过类CatmullRomCurve3创建一个3D样条曲线
        curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-1000, -5000, -5000),
          new THREE.Vector3(1000, -5000, 0),
          new THREE.Vector3(1800, 800, 1000),
          new THREE.Vector3(800, 5000, 5000),
          new THREE.Vector3(0, 0, 10000)
        ])
        console.log('______curve', curve)
        // 样条曲线均匀分割100
        let points = curve.getPoints(100)

        // 添加航线模型
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const material = new THREE.LineBasicMaterial({ color: 0xffffff })
        const curveObject = new THREE.Line(geometry, material)
        scene.add(curveObject)

        //管道体
        const tubeGeometry = new THREE.TubeGeometry(curve, 100, 500, 30) // 101取点数 3为r 30为三角切面数
        const tubeMesh = new THREE.Mesh(
          tubeGeometry,
          new THREE.MeshBasicMaterial({
            color: '#00aa00',
            side: THREE.DoubleSide,
            wireframe: true
          })
        )
        scene.add(tubeMesh)
      },

      changeLookAt(t) {
        // 当前点在线条上的位置
        const position = curve.getPointAt(t)
        // console.log('_', position)
        let nPos = new THREE.Vector3(position.x, position.y - 100, position.z)
        mesh.position.copy(nPos)
        // 返回点t在曲线上位置切线向量
        const tangent = curve.getTangentAt(t)
        // 位置向量和切线向量相加即为所需朝向的点向量
        const lookAtVec = tangent.add(nPos)
        mesh.lookAt(lookAtVec)

        if (t > 0.03) {
          let pos = curve.getPointAt(t - 0.03)
          camera.position.copy(pos)
          // console.log('____position', position)
          camera.lookAt(position)
        }
      },

      // 随着窗体的变化修改场景
      onResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      },

      render() {
        let _this = this
        requestAnimationFrame(this.render)
        // controls.update()
        renderer.render(scene, camera)
        if (curve) {
          let time = Date.now()
          let t = (time % loopTime) / loopTime // 计算当前时间进度百分比
          setTimeout(function() {
            _this.changeLookAt(t)
          }, 500)
        }
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
