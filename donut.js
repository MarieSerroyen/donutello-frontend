
import './configerstyle.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Loader } from 'three';

const scene = new THREE.Scene();
// change scene background color
scene.background = new THREE.Color( 0xFFFFFF );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

const dire = new THREE.DirectionalLight(0xffffff, 3);
dire.position.set(2, 1, 1);
scene.add(dire);
camera.position.z = 5;
camera.position.y = 2;


// add donut 
let config;
const gltfLoader = new GLTFLoader();
gltfLoader.load('/assets/models/donut-larissa.gltf', (gltf) => {
config = gltf.scene;
gltf.scene.scale.set(8,8,8);
scene.add(config);
config.getObjectByName('glaze').material.color.set("");
config.getObjectByName('Sphere').material.color.set("");
});







//logo tags
// add box plane geometry
//const planeGeometry = new THREE.PlaneGeometry(10, 10);
//const planeMaterial = new THREE.MeshBasicMaterial({color: 0xff0099});
//planeMaterial.map = brickTexture;
//const plane = new THREE.Mesh( planeGeometry, planeMaterial );
//scene.add(plane);





function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera );
}

animate();






// Glaze laten veranderen van kleur
const glazeColors = document.querySelector('.glaze-colors');
glazeColors.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('recolor-btn')) {
    config.traverse((child) => {
      if (child.isMesh) {
        config.getObjectByName('glaze').material.color.set(e.target.dataset.color);
      }
    });
  }
});


// sprinkles laten veranderen van kleur
const sprinkleColors = document.querySelector('.sprinkle-colors');
sprinkleColors.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('recolor-btn')) {
    config.traverse((child) => {
      if (child.isMesh) {
        config.getObjectByName('Sphere').material.color.set(e.target.dataset.color);
      }
    });
  }
});




//topping



// when checkbox is unchecked, hide sprinkels
document.querySelector('#topping-1').addEventListener('click', () => {
  console.log('click');
  config.traverse((child) => {
    if (child.isMesh) {
      config.getObjectByName('Sphere').visible = false;
    }
  });
});