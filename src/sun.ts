import * as THREE from "three";

const sunGeomery = new THREE.SphereGeometry(8);
const sunTexture = new THREE.TextureLoader().load("../SUN.png");
const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });
const sunMesh = new THREE.Mesh(sunGeomery, sunMaterial);

export { sunMesh };
