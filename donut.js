
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
gltf.scene.scale.set(20,20,20);
scene.add(config);
config.position.y = 0.5;
config.getObjectByName('glaze').material.color.set("");
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


//document.querySelector('.glaze-colors').addEventListener('click', () => {
  //console.log('click');
  //config.traverse((child) => {
    // if (child.isMesh = '.recolor-btn') {
      //config.getObjectByName('glaze').material.color.set(0x86584A);
      
     //}
   
   //});
   
//});



// get .glaze-colors and add event listener to each child element 
const glazeColors = document.querySelector('.glaze-colors');
glazeColors.addEventListener('click', (e) => {
  //console.log(e.target);
  //console.log(e.target.classList);
  //console.log(e.target.classList.contains('recolor-btn'));
  if (e.target.classList.contains('recolor-btn')) {
    //console.log('click');
    config.traverse((child) => {
      if (child.isMesh) {
        config.getObjectByName('glaze').material.color.set(e.target.dataset.color);
      }
    });
  }
});
