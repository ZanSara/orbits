import * as THREE from 'three';
import StarsTexture from '../images/2k_milky_way.jpg'

const textureLoader = new THREE.TextureLoader();


export function backgroundStars(scene, radius){
    // // Background stars
    // // https://math.stackexchange.com/questions/1585975/how-to-generate-random-points-on-a-sphere#answer-1586185
    var bgStarsGeometry = new THREE.BufferGeometry();
    var bgStarsPositions = new Float32Array(1000 * 3);

    for (var i = 0; i < 1000; i++) {
        var bgStarsLatitude = Math.acos(2 * Math.random() - 1 ) - (Math.PI / 2);
        var bgStarsLongitude = Math.random() * Math.PI * 2;

        var bgStarsX = Math.cos(bgStarsLatitude) * Math.cos(bgStarsLongitude) * radius;
        var bgStarsY = Math.cos(bgStarsLatitude) * Math.sin(bgStarsLongitude) * radius;
        var bgStarsZ = Math.sin(bgStarsLatitude) * radius;

        bgStarsPositions[i * 3] = bgStarsX;
        bgStarsPositions[i * 3 + 1] = bgStarsY;
        bgStarsPositions[i * 3 + 2] = bgStarsZ;
    }
    bgStarsGeometry.setAttribute('position', new THREE.BufferAttribute(bgStarsPositions, 3));

    var bgStarsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        sizeAttenuation: false
    });

    const bgStars = new THREE.Points(bgStarsGeometry, bgStarsMaterial);
    scene.add(bgStars);
    
    return bgStars;

    // const material = new THREE.MeshBasicMaterial( { 
    //     map: textureLoader.load( StarsTexture ),
    //     side: THREE.BackSide
    // });
    // const geometry = new THREE.SphereGeometry( 1000000 );
    // const mesh = new THREE.Mesh( geometry, material );
    // scene.add(mesh);
}