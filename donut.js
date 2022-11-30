//import configerstyle.ccs
import './configerstyle.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Loader } from 'three';

const scene = new THREE.Scene();
// change scene background color
scene.background = new THREE.Color( 0xE1E0E0 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

const dire = new THREE.DirectionalLight(0xffffff, 2);
dire.position.set(2, 4, 2);
scene.add(dire);
camera.position.z = 5;
camera.position.y = 2;




// add donut 
let donut;
const gltfLoader = new GLTFLoader();
gltfLoader.load('/assets/models/donut-marie.gltf', (gltf) => {
donut = gltf.scene;
gltf.scene.scale.set(20,20,20);
scene.add(donut);
donut.position.y = 0.5;
});



function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera );
}

animate();

