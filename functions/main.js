import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import {generateStar, generateJupiter, generateEarth} from './generateBodies.js';
import { backgroundStars } from './scene.js';


const sceneSize = 100000
const scene = new THREE.Scene();

scene.add(new THREE.AxesHelper(sceneSize));

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, sceneSize );
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