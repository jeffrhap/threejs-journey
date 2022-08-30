import * as THREE from "three";

import Experience from "../experience.js";
import Environment from "./environment.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Test mesh
    const testMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial());
    this.scene.add(testMesh);

    // Wait for resources
    this.resources.on("ready", () => {
      console.log("resources ready");

      // Setup
      this.environment = new Environment();
    });
  }
}
