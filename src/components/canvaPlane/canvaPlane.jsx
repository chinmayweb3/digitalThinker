import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { GUI } from "dat.gui";
import { Back, gsap } from "gsap";
import { useEffect, useState } from "react";

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
    scaleX: 0.13,
    scaleY: 0.13,
    scaleZ: 0.13,
    bg: "#deb887",
  },

  {
    rotationX: 0.5,
    rotationY: 1,
    rotationZ: 0,
    positionX: -3,
    positionY: 0,
    positionZ: 0,
    scaleX: 0.13,
    scaleY: 0.13,
    scaleZ: 0.13,
    bg: "#aaa",
  },
  {
    rotationX: 0.5,
    rotationY: 0.8,
    rotationZ: Math.PI * 10,
    positionX: 0,
    positionY: 0,
    positionZ: -6,
    scaleX: 0.3,
    scaleY: 0.3,
    scaleZ: 0.3,
    bg: "#141414",
  },
];

export const useCanvasPlane = (preloader) => {
  const [modelState, setModelState] = useState();

  useEffect(() => {
    const canvasPlane = document.getElementById("canvas-plane");

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(sizes.width, sizes.height);

    canvasPlane.append(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // const orbitControls = new OrbitControls(camera, renderer.domElement);
    // orbitControls.update();

    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    const spotLight = new THREE.PointLight(0xffffff, 150);

    spotLight.position.y = 8;

    scene.add(ambientLight);
    scene.add(spotLight);
    const axes = new THREE.AxesHelper(10);

    let model3d;
    const assetLoader = new GLTFLoader();
    assetLoader.load(
      "./sukhoi.glb",
      (glb) => {
        model3d = glb.scene;
        setModelState(model3d);

        model3d.scale.set(0.13, 0.13, 0.13);
        model3d.position.x = Math.PI * 3;
        model3d.rotation.y = -1;

        scene.add(model3d);
      },
      (xhr) => {
        // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (err) => {
        console.log(" \n\n\n\nAn error happened", err);
      }
    );

    // scroll animation started
    let scrollY = window.scrollY;
    let currentSection = 0;

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      const newSection = Math.round(scrollY / sizes.height);
      console.log("New section scrollY: " + newSection, currentSection);
      document.getElementById("main").style.backgroundColor = movement[newSection].bg;

      if (!!model3d) {
        gsap.to(model3d.rotation, {
          duration: 1.2,
          x: movement[newSection].rotationX,
          y: movement[newSection].rotationY,
          z: movement[newSection].rotationZ,
          ease: Back.easeInOut(1),
        });
        gsap.to(model3d.position, {
          duration: 1.2,
          x: movement[newSection].positionX,
          y: movement[newSection].positionY,
          z: movement[newSection].positionZ,
          ease: Back.easeInOut(1),
        });
        gsap.to(model3d.scale, {
          duration: 1.2,
          ease: Back.easeInOut(1),
          x: movement[newSection].scaleX,
          y: movement[newSection].scaleY,
          z: movement[newSection].scaleZ,
        });
      }
    });

    const animate = (time) => {
      if (model3d) {
        model3d.position.y = Math.sin(time / 1000) * 0.1;
        model3d.rotation.z = Math.sin(time / 1000) * 0.08;
      }
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);
  }, []);

  useEffect(() => {
    const scrollY = window.scrollY;
    const newSection = Math.round(scrollY / sizes.height);
    if (!preloader && modelState) {
      gsap.to(modelState.rotation, {
        duration: 1,
        x: movement[newSection].rotationX,
        y: movement[newSection].rotationY,
        z: movement[newSection].rotationZ,
        ease: Back.easeInOut(1),
      });
      gsap.to(modelState.position, {
        duration: 1,
        x: movement[newSection].positionX,
        y: movement[newSection].positionY,
        z: movement[newSection].positionZ,
      });
      gsap.to(modelState.scale, {
        duration: 1,
        x: movement[newSection].scaleX,
        y: movement[newSection].scaleY,
        z: movement[newSection].scaleZ,
      });
    }
  }, [preloader, modelState]);
};

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
