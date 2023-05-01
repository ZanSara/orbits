import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { SolarSystemData } from './constants.js';

import {generateSolarSystem} from './generateBodies.js';
import { backgroundStars } from './sceneDetails.js';


const sceneSize = 8000000000000  // Solar system radius ~ 8 billion km
const scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper( sceneSize );
scene.add( axesHelper );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, sceneSize * 10 );
camera.position.z = SolarSystemData.sun.radius * 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

// Background stars
backgroundStars(scene, sceneSize-1);

// Solar System
var SolarSystem = generateSolarSystem(scene);

function focusOnPlanet(name){
    // controls.target.copy( SolarSystemData.planets[name].mesh.position );
    // controls.update();

	camera.position = SolarSystemData.planets[name].mesh.position;
	camera.position.z += 10;

}

function animate() {
	requestAnimationFrame( animate );
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();

focusOnPlanet("Jupiter");