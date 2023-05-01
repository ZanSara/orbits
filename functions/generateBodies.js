import * as THREE from 'three';

// Backgro
/* ************************
 *   Sizes, values, units
 * ************************
 * Distances are in km
 * Masses are in kg
 * ************************/
const earthRadius = 6378
const sunRadius = 695700

const earthMass = 5.972168 * (10 ^ 24) 
const sunMass = 1.9885 * (10 ^ 30) 

const earthOrbit = {
    apoapsis: 152097597,
    periapsis: 147098450,
    semiMajorAxis: 149598023,
    eccentricity: 0.0167086,
    inclination: 7.155,
    longitudeAscendingNode: -11.26064,
    argumentPeriapsis: 114.20783
}

const textureLoader = new THREE.TextureLoader();


export function generateStar(scene){
    var Sun = new THREE.Object3D();

    // Create a directional light and add it to the scene
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 0, 0);
    Sun.add(light);
    
    const sunMaterial = new THREE.MeshBasicMaterial( { 
        map: textureLoader.load( './images/2k_sun.jpg'),
        emissive: 0xffff00,
        emissiveIntensity: 1,
        receiveShadow: false,
    });
    const sunGeometry = new THREE.SphereGeometry( 1 );
    const SunMesh = new THREE.Mesh( sunGeometry, sunMaterial );
    Sun.add(SunMesh);
    scene.add(Sun);

    return Sun;
}


export function generateEarth(scene){
    const earthMaterial = new THREE.MeshStandardMaterial( { 
        map: textureLoader.load( './images/2k_earth.jpg'),
        receiveShadow: true,
    });
    const earthGeometry = new THREE.SphereGeometry( 1 );
    const Earth = new THREE.Mesh( earthGeometry, earthMaterial );

    scene.add(Earth);
    return Earth;
}


export function generateJupiter(scene){
    const jupMaterial = new THREE.MeshStandardMaterial( { 
        map: textureLoader.load( './images/2k_jupiter.jpg'),
        receiveShadow: true,
    });
    const jupGeometry = new THREE.SphereGeometry( 1 );
    const Jupiter = new THREE.Mesh( jupGeometry, jupMaterial );

    scene.add(Jupiter);
    return Jupiter;
}


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

