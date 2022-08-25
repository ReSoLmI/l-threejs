<template>
  <!--  // 点击模型视角视角切换平滑过渡-->
  <div id="dom"></div>
</template>

<!--<script type="text/javascript" src="libs/statistics.js"></script>-->
<!--<script type="text/javascript" src="libs/steak.js"></script>-->
<!--<script type="text/javascript" src="libs/three.js"></script>-->
<!--<script type="text/javascript" src="libs/dat.gui.js"></script>-->
<!--<script type="text/javascript" src="libs/OrbitControls.js"></script>-->
<!--<script type="text/javascript" src="libs/GLTFLoader.js"></script>-->
<!--<script type="text/javascript" charset="UTF-8" src="libs/Tween.min.js"></script>-->

<script>
  import * as THREE from 'three'
  import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'

  var camera
  var renderer
  export default {
    name: 'HelloWorld1',
    data() {
      return {}
    },
    mounted() {
      var camera
      var renderer

      function init() {
        // var urls3 = [
        //   'assets/bgImage/skyBox3/posx.jpg',
        //   'assets/bgImage/skyBox3/negx.jpg',
        //   'assets/bgImage/skyBox3/posy.jpg',
        //   'assets/bgImage/skyBox3/negy.jpg',
        //   'assets/bgImage/skyBox3/posz.jpg',
        //   'assets/bgImage/skyBox3/negz.jpg'
        // ]
        // 创建一个场景，它将包含我们所有的元素，如物体，相机和灯光。
        var scene = new THREE.Scene()
        scene.opacity = 0

        // var cubeLoader = new THREE.CubeTextureLoader()
        // scene.background = cubeLoader.load(urls3)

        // 创建一个渲染器并设置大小，WebGLRenderer将会使用电脑显卡来渲染场景
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          logarithmicDepthBuffer: true
        })
        renderer.setClearColor(new THREE.Color('#0e0934'))
        renderer.setSize(window.innerWidth, window.innerHeight)

        // 创建一个摄像机，它定义了我们正在看的地方
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
        // 将摄像机对准场景的中心
        camera.position.z = 500
        camera.position.y = 100
        // camera.position.y = 150;
        // camera.position.x = 150;
        camera.lookAt(scene.position)
        var orbit = new OrbitControls(camera, renderer.domElement)
        console.log('_____orbit', orbit)

        var ambientLight = new THREE.AmbientLight('#ffffff', 1)
        scene.add(ambientLight)

        // 在屏幕上显示坐标轴
        var axes = new THREE.AxesHelper(500)
        scene.add(axes)

        // 将呈现器的输出添加到HTML元素
        document.getElementById('dom').appendChild(renderer.domElement)

        // 使用GUI调试库
        var controls = new (function() {
          this.randomCamera = function() {
            var x = Math.round(Math.random() * 100)
            var y = Math.round(Math.random() * 100)
            var z = 50

            var x2 = Math.round(Math.random() * 50)
            var y2 = Math.round(Math.random() * 50)
            var z2 = 5
            console.log(orbit.target)
            var pos = new THREE.Vector3(x, y, z)
            var pos2 = new THREE.Vector3(x2, y2, z2)
            console.log('________@', camera.position, pos, orbit.target, pos2)
            animateCamera(camera.position, pos, orbit.target, pos2)
          }
        })()
        var gui = new GUI()
        // 随机视角事件
        gui.add(controls, 'randomCamera')

        // 启动动画
        renderScene()
        var pos1 = new THREE.Vector3(-40, 0, 0)
        var cube1 = createBoxGeometryLambertMaterial(0xffff00, pos1)
        cube1.name = 'cube1'
        var pos2 = new THREE.Vector3(40, 50, 30)
        var cube2 = createBoxGeometryLambertMaterial(0xff00ff, pos2)
        cube2.name = 'cube2'
        var pos3 = new THREE.Vector3(20, 0, -10)
        var cube3 = createBoxGeometryLambertMaterial(0x0000ff, pos3)
        cube3.name = 'cube3'
        scene.add(cube1)
        scene.add(cube2)
        scene.add(cube3)
        console.log('_______scene', scene)

        // 创建一个MeshLambertMaterial材质的立方体
        function createBoxGeometryLambertMaterial(color, pos) {
          // 创建一个立方体并设置大小
          var cubeGeometry = new THREE.BoxGeometry(14, 14, 14)
          // MeshLambertMaterial设置材质
          var cubeMaterial = new THREE.MeshLambertMaterial({
            color: color
          })
          var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
          // 设置立方体位置
          cube.position.x = pos.x
          cube.position.y = pos.y
          cube.position.z = pos.z
          return cube
        }

        // current1 相机当前的位置
        // target1 相机的目标位置
        // current2 当前的controls的target
        // target2 新的controls的target
        function animateCamera(current1, target1, current2, target2) {
          console.log('.........22222', current1, target1, current2, target2)
          var tween = new TWEEN.Tween({
            x1: current1.x, // 相机当前位置x
            y1: current1.y, // 相机当前位置y
            z1: current1.z, // 相机当前位置z
            x2: current2.x, // 控制当前的中心点x
            y2: current2.y, // 控制当前的中心点y
            z2: current2.z // 控制当前的中心点z
          })
          tween.to(
            {
              x1: target1.x, // 新的相机位置x
              y1: target1.y, // 新的相机位置y
              z1: target1.z, // 新的相机位置z
              x2: target2.x, // 新的控制中心点位置x
              y2: target2.y, // 新的控制中心点位置x
              z2: target2.z // 新的控制中心点位置x
            },
            1000
          )
          tween.onUpdate(event => {
            console.log('________@3', event)
            camera.position.x = event.x1
            camera.position.y = event.y1
            camera.position.z = event.z1
            orbit.target.x = event.x2
            orbit.target.y = event.y2
            orbit.target.z = event.z2
            orbit.update()
          })
          tween.easing(TWEEN.Easing.Cubic.InOut)
          tween.start()
        }

        document.addEventListener('click', onDocumentMouseDown, false)

        function clickAddPoint(event) {
          event.preventDefault()
          let vector = new THREE.Vector3() //三维坐标对象
          vector.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5)
          vector.unproject(this.camera)
          let raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())
          let intersects = raycaster.intersectObjects(this.scene.children)
          if (intersects.length > 0) {
            let selected = intersects[0] //取第一个物体
            let point = {
              x: Math.round(selected.point.x),
              y: Math.round(selected.point.y),
              z: Math.round(selected.point.z)
            }
            this.$refs.addWayPoint.onPointSelect(point)
            this.removeWayPoint() // 先清除上一个点选生成的小球
            this.setPonitPosition(point, selected.point.x + selected.point.y + selected.point.z)
          }
        }

        function onDocumentMouseDown(event) {
          console.log('........1', scene)
          // 点击屏幕创建一个向量
          let vector = new THREE.Vector3() //三维坐标对象
          vector.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5)
          console.log('_____vector1', vector)
          vector = vector.unproject(camera) // 将屏幕的坐标转换成三维场景中的坐标
          console.log('______vector2', vector)
          let raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize())
          console.log('_______raycaster', raycaster)
          let intersects = raycaster.intersectObjects(scene.children, true)
          console.log('........intersects', intersects)
          if (intersects.length > 0) {
            console.log('........6', event)
            var pos = intersects[0].object.position
            console.log('........#', intersects[0])
            var num = Math.max(pos.x, pos.y, pos.z)
            var newPos = new THREE.Vector3(pos.x, pos.y, pos.z)

            if (pos.x == num) {
              newPos.x = num + 100
            }
            if (pos.y == num) {
              newPos.y = num + 100
            }
            if (pos.z == num) {
              newPos.z = num + 100
            }

            intersects[0].object.material.color.set('#00aa00')
            animateCamera(camera.position, newPos, orbit.target, orbit.target)
          }
        }

        function renderScene() {
          TWEEN.update()
          orbit.update()
          // 使用requestAnimationFrame函数进行渲染
          requestAnimationFrame(renderScene)
          renderer.render(scene, camera)
        }

        // 渲染的场景
        renderer.render(scene, camera)
      }
      window.onload = init

      // 随着窗体的变化修改场景
      function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      // 监听窗体调整大小事件
      window.addEventListener('resize', onResize, false)
    }
  }
</script>

<style>
  body {
    margin: 0;
    overflow: hidden;
  }
</style>
