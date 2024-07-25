import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import "./style.css";
import { stars } from "./stars";
import { sunMesh } from "./sun";
import { ambientLight, sunlight } from "./lights";
import Planet from "./planet";
import { gui } from "./gui";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("root")?.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const orbitControls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 100);

orbitControls.update();

const controls = document.getElementById("controls");
window.onload = () => {
  controls?.addEventListener("click", () => {
    alert("Uh uh uh");
  });
};

//Creating A Solar System
const solarSystem = new THREE.Group();
solarSystem.add(sunMesh);

//Creating Planets
const mercury = new Planet(2, 12, "mercury.jpeg");
const mercuryMesh = mercury.getMesh();
let mercurySystem = new THREE.Group();
mercurySystem.add(mercuryMesh);

const venus = new Planet(2, 24, "venus.jpeg");
const venusMesh = venus.getMesh();
let venusSystem = new THREE.Group();
venusSystem.add(venusMesh);

const earth = new Planet(3, 32, "earth.jpg");
const earthMesh = earth.getMesh();
let earthSystem = new THREE.Group();
earthSystem.add(earthMesh);

const mars = new Planet(4, 48, "mars.jpeg");
const marsMesh = mars.getMesh();
let marsSystem = new THREE.Group();
marsSystem.add(marsMesh);

const jupiter = new Planet(12, 80, "jupiter.jpg");
const jupiterMesh = jupiter.getMesh();
let jupiterSystem = new THREE.Group();
jupiterSystem.add(jupiterMesh);

//Adding to Solar System
solarSystem.add(
  mercurySystem,
  venusSystem,
  earthSystem,
  marsSystem,
  jupiterSystem
);

// Adding to scene
scene.add(stars);
scene.add(solarSystem);
scene.add(ambientLight);
scene.add(sunlight);

//Adding UI ELEMENTS
const options = {
  LightColor: 0xaaaaaa,
};
gui.addColor(options, "LightColor").onChange((e) => {
  ambientLight.color.set(e);
});

//constants
const EARTH_YEAR = 2 * Math.PI * (1 / 300) * (1 / 60);
const EARTH_DAY = 2 * Math.PI * (1 / 90) * (1 / 60);

function animate() {
  sunMesh.rotation.y += 0.001;

  mercuryMesh.rotation.y += 58.6 * EARTH_DAY;
  mercurySystem.rotation.y += (1 / 0.24) * EARTH_YEAR;

  venusMesh.rotation.y += -243 * EARTH_DAY;
  venusSystem.rotation.y += (1 / 0.62) * EARTH_YEAR;

  earthMesh.rotation.y += EARTH_DAY;
  earthSystem.rotation.y += EARTH_YEAR;

  marsMesh.rotation.y += 1.001 * EARTH_DAY;
  marsSystem.rotation.y += (1 / 1.88) * EARTH_YEAR;

  jupiterMesh.rotation.y += 0.41 * EARTH_DAY;
  jupiterSystem.rotation.y += (1 / 11.86) * EARTH_YEAR;

  //main rendering
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
