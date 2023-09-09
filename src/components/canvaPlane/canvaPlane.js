import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function canvasPlane() {
  const canvasPlane = document.getElementById("canvas-plane");

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  canvasPlane.append(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  camera.position.set(0, 0, 5);

  // const orbitControls = new OrbitControls(camera, renderer.domElement);
  // orbitControls.update();

  const assetLoader = new GLTFLoader();

  assetLoader.load(
    "../../assets/raptor.glb",
    function (gltf) {
      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  // let mixer;
  // assetLoader.load(
  //   raptorGlb.href,
  //   function (gltf) {
  //     const model = gltf.scene;
  //     scene.add(model);
  //     mixer = new THREE.AnimationMixer(model);
  //     const clips = gltf.animations;

  //     // Play all animations at the same time
  //     clips.forEach(function (clip) {
  //       const action = mixer.clipAction(clip);
  //       action.play();
  //     });
  //   },
  //   undefined,
  //   function (error) {
  //     console.error(error);
  //   }
  // );

  const boxGeometry = new THREE.BoxGeometry(1, 2);
  // MeshBasicMaterial is a skin like CSS
  const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  // Mesh is something that connects the two independent instance boxGeometry and MeshBasicMaterial
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  // and the add, adds the box mesh to the scene
  // scene.add(boxMesh);

  // grid is something same as axishelper
  // const grid = new THREE.GridHelper(5, 5);
  // scene.add(grid);

  const animate = (time) => {
    // boxMesh.rotation.z = time / 1000;
    // boxMesh.rotation.y = time / 1000;
    // renderer .render runs the scene on to the getmainId which will render it to the screen
    renderer.render(scene, camera);
  };

  renderer.setAnimationLoop(animate);
}
