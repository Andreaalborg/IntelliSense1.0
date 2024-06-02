import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeCanvas = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Resize listener
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize, false);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light, increased intensity
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Bright white light
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Additional Point Light
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(-10, -10, -10);
    scene.add(pointLight);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      '/gendarprotivogazz.glb', // Path to your model file in the public folder
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );

    camera.position.z = 5;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping for smooth motion
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.enableZoom = false; // Disable zooming
    controls.maxPolarAngle = Math.PI / 2;

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // Required for damping to work
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};

export default ThreeCanvas;
