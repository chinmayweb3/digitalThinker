import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function canvasPlane() {
  const canvasPlane = document.getElementById("canvas-plane");

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  canvasPlane.append(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  camera.position.set(0, 0, 5);

  // const orbitControls = new OrbitControls(camera, renderer.domElement);
  // orbitControls.update();

  const boxGeometry = new THREE.BoxGeometry(1, 2);
  // MeshBasicMaterial is a skin like CSS
  const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true });

  // Mesh is something that connects the two independent instance boxGeometry and MeshBasicMaterial
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  // and the add, adds the box mesh to the scene
  scene.add(boxMesh);

  const planeGeo = new THREE.PlaneGeometry(5, 5);
  const planeMat = new THREE.MeshBasicMaterial({ Color: 0xffffff, side: 2, transparent: true });
  const planeMesh = new THREE.Mesh(planeGeo, planeMat);
  scene.add(planeMesh);
  planeMesh.rotation.x = -0.5 * Math.PI;

  // grid is something same as axishelper
  const grid = new THREE.GridHelper(5, 5);
  scene.add(grid);

  const animate = (time) => {
    // boxMesh.rotation.z = time / 1000;
    // boxMesh.rotation.y = time / 1000;
    // renderer .render runs the scene on to the getmainId which will render it to the screen
    renderer.render(scene, camera);
  };

  renderer.setAnimationLoop(animate);
}
