import * as THREE from 'three';


export function backgroundStars(){
    // Background stars
    // https://math.stackexchange.com/questions/1585975/how-to-generate-random-points-on-a-sphere#answer-1586185
    var bgStarsGeometry = new THREE.BufferGeometry();
    var bgStarsPositions = new Float32Array(1000 * 3);

    const radius = 100000;
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

    var bgStars = new THREE.Points(bgStarsGeometry, bgStarsMaterial);
    return bgStars;
}