import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import {generateStar, generateJupiter, generateEarth} from './generateBodies.js';
import { backgroundStars } from './scene.js';


// // Scene, cameras and controls

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
// camera.position.z = 100;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const controls = new OrbitControls(camera, renderer.domElement);
// const textureLoader = new THREE.TextureLoader();


// // Background stars
// // https://math.stackexchange.com/questions/1585975/how-to-generate-random-points-on-a-sphere#answer-1586185
// var bgStarsGeometry = new THREE.BufferGeometry();
// var bgStarsPositions = new Float32Array(1000 * 3);

// const radius = 100000;
// for (var i = 0; i < 1000; i++) {
//     var bgStarsLatitude = Math.acos(2 * Math.random() - 1 ) - (Math.PI / 2);
//     var bgStarsLongitude = Math.random() * Math.PI * 2;

//     var bgStarsX = Math.cos(bgStarsLatitude) * Math.cos(bgStarsLongitude) * radius;
//     var bgStarsY = Math.cos(bgStarsLatitude) * Math.sin(bgStarsLongitude) * radius;
//     var bgStarsZ = Math.sin(bgStarsLatitude) * radius;

//     bgStarsPositions[i * 3] = bgStarsX;
//     bgStarsPositions[i * 3 + 1] = bgStarsY;
//     bgStarsPositions[i * 3 + 2] = bgStarsZ;
// }
// bgStarsGeometry.setAttribute('position', new THREE.BufferAttribute(bgStarsPositions, 3));

// var bgStarsMaterial = new THREE.PointsMaterial({
//     color: 0xffffff,
//     size: 2,
//     sizeAttenuation: false
// });

// var bgStarss = new THREE.Points(bgStarsGeometry, bgStarsMaterial);
// scene.add(bgStarss);


// /* ************************
//  *   Sizes, values, units
//  * ************************
//  * Distances are in km
//  * Masses are in kg
//  * ************************/
// const earthRadius = 6378
// const sunRadius = 695700

// const earthMass = 5.972168 * (10 ^ 24) 
// const sunMass = 1.9885 * (10 ^ 30) 

// const earthOrbit = {
//     apoapsis: 152097597,
//     periapsis: 147098450,
//     semiMajorAxis: 149598023,
//     eccentricity: 0.0167086,
//     inclination: 7.155,
//     longitudeAscendingNode: -11.26064,
//     argumentPeriapsis: 114.20783
// }

// // Main Body - Sun

// const sunMaterial = new THREE.MeshBasicMaterial( { 
//     map: textureLoader.load( './images/2k_sun.jpg'),
//     emissive: 0xffff00,
//     emissiveIntensity: 1,
//     receiveShadow: false,
// });
// const sunGeometry = new THREE.SphereGeometry( 1 );
// const Sun = new THREE.Mesh( sunGeometry, sunMaterial );
// scene.add( Sun );

// // Create a directional light and add it to the scene
// const light = new THREE.PointLight(0xffffff, 1);
// light.position.set(0, 0, 0);
// scene.add(light);



// const earthMaterial = new THREE.MeshStandardMaterial( { 
//     map: textureLoader.load( './images/2k_earth.jpg'),
//     receiveShadow: true,
// });
// const earthGeometry = new THREE.SphereGeometry( 1 );
// const Earth = new THREE.Mesh( earthGeometry, earthMaterial );
// scene.add( Earth );


// const jupMaterial = new THREE.MeshStandardMaterial( { 
//     map: textureLoader.load( './images/2k_jupiter.jpg'),
//     receiveShadow: true,
// });
// const jupGeometry = new THREE.SphereGeometry( 1 );
// const Jupiter = new THREE.Mesh( jupGeometry, jupMaterial );
// scene.add( Jupiter );



// // const mainBodyGeometry = new THREE.SphereGeometry( 1 );
// // const mainBodyMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// // const mainBody = new THREE.Mesh( mainBodyGeometry, mainBodyMaterial );
// // scene.add( mainBody );

// // //create a blue LineBasicMaterial
// // const orbitsMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// // const points = [];
// // points.push( new THREE.Vector3( - 10, 0, 0 ) );
// // points.push( new THREE.Vector3( 0, 10, 0 ) );
// // points.push( new THREE.Vector3( 10, 0, 0 ) );

// // const orbitGeometry = new THREE.BufferGeometry().setFromPoints( points );

// // const line = new THREE.Line( orbitGeometry, orbitsMaterial );
// // scene.add( line );


// Jupiter.translateX(100);
// Earth.translateX(10);

// function animate() {

// 	requestAnimationFrame( animate );

// 	// cube.rotation.x += 0.01;
// 	// cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// }


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

// Background stars
const bgStars = backgroundStars();
scene.add(bgStars);

// Default planets
const Sun = generateStar(scene);
const Jupiter = generateJupiter(scene);
const Earth = generateEarth(scene);

Jupiter.translateX(100);
Earth.translateX(10);

function animate() {

	requestAnimationFrame( animate );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}
animate();