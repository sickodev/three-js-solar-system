import * as THREE from "three";

export default class Planet {
    radius: number;
    positionX: number;
    texture: string;
    mesh?: THREE.Mesh;

    constructor(radius: number, positionX: number, texture: string) {
        this.radius = radius;
        this.positionX = positionX;
        this.texture = texture;
    }

    getMesh() {
        if (this.mesh === undefined || this.mesh === null) {
            const geometry = new THREE.SphereGeometry(this.radius);
            const texture = new THREE.TextureLoader().load(
                `../public/textures/${this.texture}`
            );
            const material = new THREE.MeshBasicMaterial({ map: texture });
            this.mesh = new THREE.Mesh(geometry, material);
            this.mesh.position.x += this.positionX;
        }

        return this.mesh;
    }
}
