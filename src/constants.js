import * as THREE from 'three';
import EarthTexture from '../images/2k_earth.jpg'
import JupiterTexture from '../images/2k_jupiter.jpg'

export const SolarSystemData = {
    sun: {
        radius: 10, //696000
    },
    planets: {
        Earth: {
            body: {
                texture: EarthTexture,
                radius: 1, //6371
            },
            orbit: {
                apoapsis: 152097597,
                periapsis: 25, //147098450,
                semiMajorAxis: 149598023,
                eccentricity: 0.0167086,
                inclination: 7.155,
                longitudeAscendingNode: -11.26064,
                argumentPeriapsis: 114.20783
            },
            moons: {}
        },
        Jupiter: {
            body: {
                texture: JupiterTexture,
                radius: 1, //69911
            },
            orbit: {
                periapsis: 30, //696000 * 20 //740595000,
            },
            moons: {}
        }    
    }
}

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

