import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { GUI } from "dat.gui";
import { Back, Elastic, gsap } from "gsap";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const movement = [
  {
    rotationX: 1,
    rotationY: -1,
    rotationZ: -1,
    positionX: Math.PI * 1,
    positionY: 0,
    positionZ: 0,
  },

  {
    rotationX: 0.2,
    rotationY: 0.2,
    rotationZ: 0.2,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
  },
  {
    rotationX: 0.5,
    rotationY: 0.5,
    rotationZ: 0.5,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
  },
];

export async function canvasPlane(preloader) {
  const canvasPlane = document.getElementById("canvas-plane");

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  canvasPlane.append(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 5);

  // const orbitControls = new OrbitControls(camera, renderer.domElement);
  // orbitControls.update();

  const ambientLight = new THREE.AmbientLight(0xffffff, Math.PI);
  scene.add(ambientLight);

  // a helper to identify  the center of the scene
  const axes = new THREE.AxesHelper(10);
  // add the axes to the scene
  scene.add(axes);

  let model3d;
  const assetLoader = new GLTFLoader();
  assetLoader.load(
    "./sukhoi.glb",
    (glb) => {
      model3d = glb.scene;

      model3d.scale.set(0.1, 0.1, 0.1);
      model3d.position.x = Math.PI * 3;
      model3d.position.x = Math.PI * 3;
      // model3d.rotation.x = Math.PI * 1;
      model3d.rotation.y = -1;
      // model3d.rotation.z = -1;
      // model3d.rotation.x = 1;

      scene.add(model3d);
      model3dGui(model3d);
    },
    (xhr) => {
      // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    (err) => {
      console.log(" \n\n\n\nAn error happened", err);
    }
  );

  // scroll animation started
  // scroll animation started
  let scrollY = window.scrollY;
  let currentSection = 0;
  if (preloader && model3d) {
    gsap.to(model3d.rotation, {
      duration: 1,
      // delay: 4,
      x: movement[newSection].rotationX,
      y: movement[newSection].rotationY,
      z: movement[newSection].rotationZ,
      ease: Back.easeInOut(1),
    });
  }

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    const newSection = Math.round(scrollY / window.innerHeight);
    console.log("New section scrollY: " + newSection, currentSection);

    // if (currentSection !== newSection) {
    if (!!model3d) {
      gsap.to(model3d.rotation, {
        duration: 1,
        x: movement[newSection].rotationX,
        y: movement[newSection].rotationY,
        z: movement[newSection].rotationZ,
        ease: Back.easeInOut(1),
      });
      gsap.to(model3d.position, {
        duration: 1,
        x: movement[newSection].positionX,
        y: movement[newSection].positionY,
        z: movement[newSection].positionZ,
      });
    }
    // }
  });

  const animate = (time) => {
    // renderer .render runs the scene on to the getmainId which will render it to the screen
    // boxMesh.rotation.y = Math.sin(time / 1000);
    if (model3d) {
      model3d.position.y = Math.sin(time / 1000) * 0.1;
      model3d.rotation.z = Math.sin(time / 1000) * 0.08;
    }
    renderer.render(scene, camera);
  };

  renderer.setAnimationLoop(animate);
}

const model3dGui = (model3d) => {
  const gui = new GUI();
  const model3drotation = gui.addFolder("model3d rotation");
  const model3dpostion = gui.addFolder("model3d postion");
  model3drotation.add(model3d.rotation, "x", -2, Math.PI * 2);
  model3drotation.add(model3d.rotation, "y", -2, Math.PI * 2);
  model3drotation.add(model3d.rotation, "z", -2, Math.PI * 2);
  model3drotation.open();

  model3dpostion.add(model3d.position, "x", -2, Math.PI * 2);
  model3dpostion.add(model3d.position, "y", -2, Math.PI * 2);
  model3dpostion.add(model3d.position, "z", -2, Math.PI * 2);
  model3dpostion.open();
};
