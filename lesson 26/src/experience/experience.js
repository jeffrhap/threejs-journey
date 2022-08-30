import * as THREE from "three";
import Camera from "./camera.js";
import Renderer from "./renderer.js";
import World from "./world/world.js";
import Resources from "./utils/resources.js";

import Sizes from "./utils/sizes.js";
import Time from "./utils/time.js";

import sources from './sources.js'

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;
    // Global access: Maybe usefull for stopping timers via console?
    // window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.renderer = new Renderer();

    this.world = new World();

    // Events
    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
  }
}
