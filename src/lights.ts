import * as THREE from "three";

export const ambientLight = new THREE.AmbientLight(0xaaaaaa, 4);

const sunlight = new THREE.PointLight(0xffffff, 1);
sunlight.position.set(0, 0, 0);

export { sunlight };
