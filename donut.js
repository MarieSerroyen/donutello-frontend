
import './configerstyle.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Loader } from 'three';
// import './upload_widget.js'

// console.log(image);

//scene & camera
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xFFFFFF );
const camera = new THREE.PerspectiveCamera( 65, 700 / 500, 0.1, 1000 );
camera.position.z = 2.5;
camera.position.y = 1.5;
camera.position.x = 0;

const renderer = new THREE.WebGLRenderer({
  preserveDrawingBuffer: true,
});
// renderer.setSize( 700, 500);
if (window.innerWidth < 700) {
  renderer.setSize( 260, 160);
} else {
  renderer.setSize( 700, 500);
}
document.querySelector(".donut").appendChild( renderer.domElement );

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
//stop zoom
controls.enableZoom = false;

//light
const dire = new THREE.DirectionalLight(0xffffff, 3);
dire.position.set(2, 1, 1);
scene.add(dire);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(-2, 1, 1);
scene.add(light);

const light2 = new THREE.DirectionalLight(0xffffff, 2);
light2.position.set(1, -2, -2);
scene.add(light2);
// lights

// const light = new THREE.DirectionalLight( 0xffffff, 1.5 );
// light.position.set( 1, 1, 1 );
// scene.add( light );

// const light2 = new THREE.DirectionalLight( 0xffffff, 1.5 );
// light.position.set( 0, -1, -1 );
// scene.add( light2 );

// const light3 = new THREE.AmbientLight( 0xffffff, 1 );
// light3.position.set(2, 1, 1);
// scene.add( light3 );


//load texture
const textureLoader = new THREE.TextureLoader();

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



// Load texture
let texture 
// add rectangle
const rectangleGeometry = new THREE.BoxGeometry( 1, 0.7, 0.07 );
const rectangleMaterial = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const rectangle = new THREE.Mesh( rectangleGeometry, rectangleMaterial );
scene.add( rectangle);
rectangle.position.y = 0.7;
rectangle.position.z = -0.5;
rectangle.rotation.x = -1.2;
rectangle.visible = false;


// add square
const squareGeometry = new THREE.BoxGeometry( 0.7, 0.7, 0.07 );
const squareMaterial = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const square = new THREE.Mesh( squareGeometry, squareMaterial );
scene.add( square);
square.position.y = 0.7;
square.position.z = -0.5;
square.rotation.x = -1.2;
square.visible = false;

//add circle
const circleGeometry = new THREE.CircleGeometry( 0.5, 32,  );
const circleMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const circle = new THREE.Mesh( circleGeometry, circleMaterial );
scene.add( circle );
circle.position.y = 0.7;
circle.position.z = -0.5;
circle.rotation.x = -1.2;
circle.visible = false;

//add oval
const ovalGeometry = new THREE.CircleGeometry( 0.5, 32,  );
const ovalMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const oval = new THREE.Mesh( ovalGeometry, ovalMaterial );
scene.add( oval );
oval.position.y = 0.7;
oval.position.z = -0.5;
oval.rotation.x = -1.2;
oval.visible = false;


function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera );
}

animate();

// Glaze laten veranderen van kleur
const glazeColors = document.querySelector('.colors');
glazeColors.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('recolor-btn')) {
    config.traverse((child) => {
      if (child.isMesh) {
        config.getObjectByName('glaze').material.color.set(e.target.dataset.color);
        let flavour = e.target.dataset.flavour;
        console.log(flavour);
        localStorage.setItem('Flavour', flavour);
      }
    });
  }
});

//logo

// when checkbox rectangle is checked, show rectangleGeometry
document.querySelector('#rectangle').addEventListener('click', () => {
  if (document.querySelector('#rectangle').checked) {
    document.querySelector('#square').checked = false;
    square.visible = false;
    document.querySelector('#oval').checked = false;
    oval.visible = false;
    document.querySelector('#circle').checked = false;
    circle.visible = false;
    texture = textureLoader.load(document.querySelector('#uploadedimage').getAttribute("src"));
    rectangleMaterial.map = texture;
    rectangle.visible = true;
  } else {
    rectangle.visible = false;
  }
});

// when checkbox square is checked, show squareGeometry
document.querySelector('#square').addEventListener('click', () => {
  if (document.querySelector('#square').checked) {
    document.querySelector('#rectangle').checked = false;
    rectangle.visible = false;
    document.querySelector('#oval').checked = false;
    oval.visible = false;
    document.querySelector('#circle').checked = false;
    circle.visible = false;
    texture = textureLoader.load(document.querySelector('#uploadedimage').getAttribute("src"));
    squareMaterial.map = texture;
    square.visible = true;
  } else {
    square.visible = false;
  }
});

//when checkbox circle is checked, show circleGeometry
document.querySelector('#circle').addEventListener('click', () => {
  if (document.querySelector('#circle').checked) {
    document.querySelector('#square').checked = false;
    square.visible = false;
    document.querySelector('#oval').checked = false;
    oval.visible = false;
    document.querySelector('#rectangle').checked = false;
    rectangle.visible = false;
    texture = textureLoader.load(document.querySelector('#uploadedimage').getAttribute("src"));
    circleMaterial.map = texture;
    circle.visible = true;
  } else {
    circle.visible = false;
  }
});

//when checkbox oval is checked, show ovalGeometry
document.querySelector('#oval').addEventListener('click', () => {
  if (document.querySelector('#oval').checked) {
    document.querySelector('#square').checked = false;
    square.visible = false;
    document.querySelector('#rectangle').checked = false;
    rectangle.visible = false;
    document.querySelector('#circle').checked = false;
    circle.visible = false;
    texture = textureLoader.load(document.querySelector('#uploadedimage').getAttribute("src"));
    ovalMaterial.map = texture;oval.visible = true;
  } else {
    oval.visible = false;
  }
});

// sprinkles laten veranderen van kleur
const sprinkleColors = document.querySelector('.sprinkle-colors');
sprinkleColors.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('recolor-btn')) {
    config.traverse((child) => {
      if (child.isMesh) {
        console.log(child);
        config.getObjectByName('Sphere').material.color.set(e.target.dataset.color);
        let sprinkelColor = e.target.dataset.sprinkel;
        localStorage.setItem('Sprinkel', sprinkelColor);
      }
    });
  }
});

// when checkbox is unchecked, hide sprinkels
document.querySelector('#topping-1').addEventListener('click', () => {
  // log donut
  console.log(config.getObjectByName('Sphere'));
  if (document.querySelector('#topping-1').checked) {
    config.getObjectByName('Sphere').material.visible = true;
  } else {
    config.getObjectByName('Sphere').material.visible = false;    
  }
});

const saveButton = document.querySelector('.config-btn');
saveButton.addEventListener('click', (e) => {
  e.preventDefault();

  let imgDonut = renderer.domElement.toDataURL('image/png');
  let amount = document.querySelector('#amount').value;
  let company = document.querySelector('#company').value;
  let makerMail = document.querySelector('#makerMail').value;
  let description = document.querySelector('#description').value;
  let name = document.querySelector('#donutName').value;

  //LocalStorage items
  let logo = localStorage.getItem('Logo');
  let glaze = localStorage.getItem('Flavour');
  let sprinkelColor = localStorage.getItem('Sprinkel');

  if (sprinkelColor == null) {
    sprinkelColor = '';
  }

  //Topping
  let sprinkels = document.querySelector('#topping-1').checked;

  let topping = '';

  if (sprinkels == true) {
    topping = 'Sprinkels';
  } else {
    topping = 'Geen topping';
  }

  //Card types
  let rectangleCard = document.querySelector('#rectangle').checked;
  let squareCard = document.querySelector('#square').checked;
  let circleCard = document.querySelector('#circle').checked;
  let ovalCard = document.querySelector('#oval').checked;

  let cardType = '';

  if (rectangleCard == true) {
    cardType = 'Rechthoek';
  } else if (squareCard == true) {
    cardType = 'Vierkant';
  } else if (circleCard == true) {
    cardType = 'Cirkel';
  } else if (ovalCard == true) {
    cardType = 'Ovaal';
  }
  
  fetch("https://donuttello-api-team6.onrender.com/api/v1/donuts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      base: "Normaal",
      glaze: glaze,
      topping: topping + ' ' + sprinkelColor,
      logo: logo,
      cardType: cardType,
      amount: amount,
      company: company,
      makerMail: makerMail,
      description: description,
      donutImage: imgDonut,
      status: "Start productie",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.clear();
    });
});