import * as THREE from "three";

const starsCoords = [];

for (let index = 0; index < Math.random() * 1000000; index++) {
    const x = THREE.MathUtils.randFloatSpread(1000);
    const y = THREE.MathUtils.randFloatSpread(1000);
    const z = THREE.MathUtils.randFloatSpread(1000);

    starsCoords.push(x, y, z);
}

const starGeometry = new THREE.BufferGeometry();

starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starsCoords, 3)
);

const starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
});
const stars = new THREE.Points(starGeometry, starMaterial);

export { stars };
