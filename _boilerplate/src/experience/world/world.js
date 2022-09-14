import Experience from "../experience.js";
import Loader from "../utils/loader.js";
import Environment from "./environment.js";
import Floor from "./floor.js";
import Fox from "./fox.js";

import { gsap } from "gsap";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.loader = new Loader();

    // Loading progress
    this.resources.on("progress", (args) => {
      this.loader.updateLoader(args.loaded);

      if (args.loaded >= 1) {
        this.loader.finishLoading();
      }
    });

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.floor = new Floor();
      this.fox = new Fox();
      this.environment = new Environment();
    });
  }

  update() {
    if (this.fox) {
      this.fox.update();
    }
  }
}
