import * as THREE from "three";

import { gsap } from "gsap";

import Experience from "../experience.js";

export default class Loader {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.loadingBar = document.querySelector(".three .loading-bar");

    this.setGeometery();
    this.setMaterial();
    this.setMesh();
  }

  setGeometery() {
    this.geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
  }

  setMaterial() {
    this.material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uAlpha: { value: 1 },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
      uniform float uAlpha;

        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
        }
      `,
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  updateLoader(loaded) {
    console.log("update loading", loaded);

    // Animate loadingbar in html
    this.loadingBar.style.transform = `scaleX(${loaded})`;
  }

  finishLoading() {
    console.log("finished loading");

    gsap.delayedCall(0.5, () => {
      // Hide loadingbar in html
      this.loadingBar.classList.add("ended");
      this.loadingBar.style.transform = "";

      gsap.to(this.material.uniforms.uAlpha, {
        value: 0,
        duration: 3,
      });
    });
  }
}
