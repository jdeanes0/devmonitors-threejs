import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // decrease these params to increase performance
document.body.appendChild(renderer.domElement);

// Create and render a cube for a test
const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const materialCube = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // green material for the mesh
const cube = new THREE.Mesh(geometryCube, materialCube);
// scene.add(cube);

camera.position.z = 50; // move the camera back a bit to see the cube
camera.position.y = 50;
camera.rotation.x = -Math.PI / 4; // rotate the camera to point slightly downwards

/**
 * Continously render the scene; acts like a loop
 */
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate();

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load('/tc_gltf.gltf', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
} );

const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

xscale = 1;
yscale = 1;
zscale = 1;
function animateModel() {
    requestAnimationFrame(animateModel);
    renderer.render(scene, camera);
    
    scene.rotation.y += 0.01;
}
animateModel();
