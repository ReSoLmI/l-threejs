<template>
  <div id="container"></div>
</template>

<script>
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
  import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js'
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        scene: undefined,
        camera: undefined,
        renderer: undefined,
        controls: undefined,
        mixer: undefined,
        clock: undefined
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
        // _this.scene.environment = new RGBELoader().load('../../static/threejs-xuexi/venice_sunset_1k.hdr')
        // _this.scene.environment.mapping = THREE.EquirectangularReflectionMapping
        // _this.scene.fog = new THREE.Fog(0x333333, 10, 15)

        // let _MTLLoader = new MTLLoader(); //材质文件加载器
        // let _OBJLoader = new OBJLoader(); // OBJ 加载器
        //   _MTLLoader.setPath("../../static/IKING_Project/scenes/");
        //   _MTLLoader.load("OBJ_03.mtl", function(materials) {
        //     materials.preload();
        //     console.log("___materials", materials);
        //     // 返回一个包含材质的对象MaterialCreator
        //     //obj的模型会和MaterialCreator包含的材质对应起来
        //     _OBJLoader.setMaterials(materials);
        //     _OBJLoader.setPath("../../static/IKING_Project/scenes/");
        //     _OBJLoader.load("OBJ_03.obj", function(obj) {
        //       // 控制台查看返回结构：包含一个网格模型Mesh的组Group
        //       // 加载后的一些编辑操作
        //       obj.children.forEach(item => {
        //         item.scale.set(1, 1, 1); //网格模型缩放
        //         // item.position.set(-50, 0, 0);
        //         // item.geometry.center()
        //       });
        //       _this.scene.add(obj);
        //     });
        //   });

        // let _GLTFLoader = new GLTFLoader()
        // _GLTFLoader.load(
        //   '../../static/sheng-feiji.glb',
        //   gltf => {
        //     console.log('______obj', gltf)
        //     gltf.scene.scale.set(1, 1, 1) //  设置模型大小缩放
        //     gltf.scene.position.set(0, 0, 0)
        //     let axis = new THREE.Vector3(0, 1, 0) //向量axis
        //     // gltf.scene.rotateOnAxis(axis,Math.PI/2);
        //     // //绕axis轴逆旋转π/16
        //     // gltf.scene.rotateOnAxis(axis,Math.PI/-20);
        //     // gltf.scene.rotateOnAxis(axis,Math.PI/50);
        //     // gltf.rotateY(Math.PI / 2);
        //     // this.groupBox.add(gltf);
        //     _this.scene.add(gltf.scene)
        //     _this.mixer = new THREE.AnimationMixer(gltf.scene)
        //     _this.clock = new THREE.Clock()
        //     console.log('animations', gltf.animations)
        //     let AnimationAction = _this.mixer.clipAction(gltf.animations[0])
        //     console.log('__AnimationAction', AnimationAction)
        //     AnimationAction.play() //播放动画
        //     _this.animate() // 渲染
        //   },
        //   xhr => {
        //     console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        //   },
        //   error => {
        //     console.error(error)
        //   }
        // )

        //       // instantiate a loader
        //       const loader = new PCDLoader();
        //
        // // load a resource
        //       loader.load(
        //         '../../static/jiku.pcd',
        //         // called when the resource is loaded
        //         function ( mesh ) {
        //           scene.add( mesh );
        //         },
        //         // called when loading is in progresses
        //         function ( xhr ) {
        //           console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        //         },
        //         // called when loading has errors
        //         function ( error ) {
        //           console.log( 'An error happened' );
        //
        //         }
        //       );

        let _FBXLoader = new FBXLoader()
        _FBXLoader.setPath('../../static/')
        _FBXLoader.load('hujingsan.fbx', function(obj) {
          console.log('______obj', obj)
          obj.scale.set(0.5, 0.5, 0.5)
          obj.name = 'cone'
          // obj作为参数创建一个混合器，解析播放obj及其子对象包含的动画数据
          _this.mixer = new THREE.AnimationMixer(obj)
          _this.clock = new THREE.Clock()
          // 查看动画数据
          console.log('animations', obj.animations)
          // obj.animations[0]：获得剪辑对象clip
          let AnimationAction = _this.mixer.clipAction(obj.animations[0])
          console.log('__AnimationAction', AnimationAction)
          // AnimationAction.timeScale = 1; //默认1，可以调节播放速度
          // AnimationAction.loop = THREE.LoopOnce; //不循环播放
          // AnimationAction.clampWhenFinished=true;//暂停在最后一帧播放的状态
          _this.scene.add(obj)
          AnimationAction.play() //播放动画
          _this.animate() // 渲染
        })

        // 辅助坐标系
        let axesHelper = new THREE.AxesHelper(250)
        // axesHelper.position.set(100, 0, 0);
        this.scene.add(axesHelper)
        // 环境光
        var ambientLight = new THREE.AmbientLight('#ffffff', 1)
        this.scene.add(ambientLight)
        // 方向光1
        // let _directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        // _directionalLight.position.set(-10000, -10000, -10000);
        // this.scene.add(_directionalLight);
        // // 方向光2
        // let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        // directionalLight.position.set(10000, 10000, 10000);
        // this.scene.add(directionalLight);

        const element = document.getElementById('container')
        const width = element.clientWidth // 窗口宽度
        const height = element.clientHeight // 窗口高度
        const k = width / height // 窗口宽高比
        console.log('___k', k)
        let s = 150 //三维场景显示范围控制系数，系数越大，显示的范围越大
        // PerspectiveCamera( fov, aspect, near, far )
        this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
        this.camera.position.set(200, 300, 200) //设置相机位置
        this.camera.lookAt(this.scene.position) //设置相机方向(指向的场景对象)

        //创建一个透视相机，70是相机的视角  ， 宽高比是屏幕的宽高比 ， 最近能看到1 ， 最远能看到10000
        // this.camera = new THREE.PerspectiveCamera(70, width / height, 1, 10000);
        // this.camera.position.set(0, 250, 1000);
        this.scene.add(this.camera)

        this.renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: false
        })
        this.renderer.setSize(element.clientWidth, element.clientHeight) // 设置渲染区域尺寸
        this.renderer.shadowMap.enabled = true // 显示阴影
        // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setClearColor(0x3f3f3f, 1) // 设置背景颜色
        element.appendChild(this.renderer.domElement)

        this.render()

        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      },
      render() {
        this.renderer.render(this.scene, this.camera) //执行渲染操作
        requestAnimationFrame(this.render)
      },
      animate() {
        requestAnimationFrame(this.animate)
        this.controls.update()
        if (this.mixer) {
          //clock.getDelta()方法获得两帧的时间间隔
          // 更新混合器相关的时间
          this.mixer.update(this.clock.getDelta())
        }
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
