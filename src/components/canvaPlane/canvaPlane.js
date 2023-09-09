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

  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.update();

  const ambientLight = new THREE.AmbientLight(0xffffff, Math.PI);
  scene.add(ambientLight);

  const assetLoader = new GLTFLoader();

  // a helper to identify  the center of the scene
  const axes = new THREE.AxesHelper(10);
  // add the axes to the scene
  scene.add(axes);

  let model3d;
  assetLoader.load(
    "./raptor.glb",
    (gltf) => {
      model3d = gltf.scene;

      model3d.scale.set(0.1, 0.1, 0.1);
      model3d.position.set(0, 0, -1);

      model3d.rotation.y = -0.5 * Math.PI;
      scene.add(model3d);
    },
    // called while loading is progressing
    (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
    // called when loading has errors
    (error) => console.log("An error happened", error)
  );

  const boxGeometry = new THREE.BoxGeometry(1, 2);
  // MeshBasicMaterial is a skin like CSS
  const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  // Mesh is something that connects the two independent instance boxGeometry and MeshBasicMaterial
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  boxMesh.scale.set(1, 1, 1);
  boxMesh.rotation.y = -0.25 * Math.PI;
  // boxMesh.position.set(10, 0, 0);
  // and the add, adds the box mesh to the scene
  // scene.add(boxMesh);

  // grid is something same as axishelper
  // const grid = new THREE.GridHelper(5, 5);
  // scene.add(grid);

  const animate = (time) => {
    // renderer .render runs the scene on to the getmainId which will render it to the screen
    renderer.render(scene, camera);
  };

  renderer.setAnimationLoop(animate);
}
