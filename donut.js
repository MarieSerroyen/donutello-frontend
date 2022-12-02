//import configerstyle.ccs
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
let sprinkel;
const gltfLoader = new GLTFLoader();
gltfLoader.load('/assets/models/donut-larissa.gltf', (gltf) => {
sprinkel = gltf.scene;
gltf.scene.scale.set(20,20,20);
scene.add(sprinkel);
sprinkel.position.y = 0.5;
sprinkel.getObjectByName('glaze').material.color.set(0xFFFFFF);
});

//const assetloader = new GLTFLoader();


//assetloader.load('/assets/models/donut-marie.gltf', (gltf) => {
 
  //const model = gltf.scene;
  //scene.add(model);
  //console.log(model.getObjectByName('Donut'));
 //model.getObjectByName('Donut').material.color.set(0x00FF00);

//});





// define Sprinkel
//
//new THREE.SphereGeometry(0.1, 32, 32),
//new THREE.MeshBasicMaterial({ color: 0x00FF00 })





function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera );
}

animate();


document.querySelector('.recolor-btn').addEventListener('click', () => {
  sprinkel.traverse((child) => {
     if (child.isMesh) {
      sprinkel.getObjectByName('glaze').material.color.set(0xffff00);
     }
   });
   
     cube.material.color.set(0xffff00);
   });

   