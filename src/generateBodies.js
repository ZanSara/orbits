import * as THREE from 'three';

import { SolarSystemData } from './constants.js';

import SunTexture from '../images/2k_sun.jpg';


const textureLoader = new THREE.TextureLoader();


export function generateSolarSystem(scene){
    const SolarSystem = new THREE.Object3D();

    generateStar(SolarSystem, SolarSystemData.sun);

    for (const [planetName, planetData] of Object.entries(SolarSystemData.planets)) {    
        var Planet = generatePlanet(SolarSystem, planetData);

        // TODO fix this
        Planet.translateX(planetData.orbit.periapsis);
    }
    scene.add(SolarSystem);
    return SolarSystem;
}


export function generateStar(scene, starData){
    var Sun = new THREE.Object3D();

    // Create a directional light and add it to the scene
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 0, 0);
    Sun.add(light);
    
    const sunMaterial = new THREE.MeshBasicMaterial( { 
        map: textureLoader.load( SunTexture ),
        emissive: 0xffff00,
        emissiveIntensity: 1,
        receiveShadow: false,
    });
    const sunGeometry = new THREE.SphereGeometry( starData.radius );
    const SunMesh = new THREE.Mesh( sunGeometry, sunMaterial );
    Sun.add(SunMesh);

    starData.mesh = SunMesh;

    scene.add(Sun);
    return Sun;
}


export function generatePlanet(scene, planetData){
    var Planet = new THREE.Object3D();

    const planetMaterial = new THREE.MeshStandardMaterial( { 
        map: textureLoader.load( planetData.body.texture ),
        receiveShadow: true,
    });
    const planetGeometry = new THREE.SphereGeometry( planetData.body.radius );
    const PlanetMesh = new THREE.Mesh( planetGeometry, planetMaterial );
    Planet.add(PlanetMesh);
    PlanetMesh.translateX(planetData.orbit.periapsis);
    planetData.mesh = PlanetMesh;

    for (const [moonName, moonData] of Object.entries(planetData.moons)) {    
        Moon = generatePlanet(scene, moonData.body);
        // TODO fix this
        Moon.translateX(moonData.orbit.periapsis);
        Planet.add(Moon);
        moonData.mesh = Moon;
    }

    scene.add(Planet);
    return Planet;
}


// export function generateEarth(scene){
//     const earthMaterial = new THREE.MeshStandardMaterial( { 
//         map: textureLoader.load( EarthTexture ),
//         receiveShadow: true,
//     });
//     const earthGeometry = new THREE.SphereGeometry( 1 );
//     const Earth = new THREE.Mesh( earthGeometry, earthMaterial );

//     scene.add(Earth);
//     return Earth;
// }


// export function generateJupiter(scene){
//     const jupMaterial = new THREE.MeshStandardMaterial( { 
//         map: textureLoader.load( JupiterTexture ),
//         receiveShadow: true,
//     });
//     const jupGeometry = new THREE.SphereGeometry( 1 );
//     const Jupiter = new THREE.Mesh( jupGeometry, jupMaterial );

//     scene.add(Jupiter);
//     return Jupiter;
// }


// const mainBodyGeometry = new THREE.SphereGeometry( 1 );
// const mainBodyMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// const mainBody = new THREE.Mesh( mainBodyGeometry, mainBodyMaterial );
// scene.add( mainBody );

// //create a blue LineBasicMaterial
// const orbitsMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const orbitGeometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( orbitGeometry, orbitsMaterial );
// scene.add( line );

