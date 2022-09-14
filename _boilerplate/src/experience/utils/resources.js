import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import EventEmitter from "./eventEmitter.js";

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();

    // Options
    this.sources = sources;

    // Setup
    this.items = {};

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    const loadingManager = new THREE.LoadingManager(
      // Loaded
      () => {
        this.trigger("ready");
      },

      // Progress
      (url, itemsLoaded, itemsTotal) => {
        const percentage = (itemsLoaded / itemsTotal);
        this.trigger("progress", [{ loaded: percentage }]);
      }
    );

    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader(loadingManager);
    this.loaders.textureLoader = new THREE.TextureLoader(loadingManager);
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);
  }

  startLoading() {
    // Load each source
    for (const source of this.sources) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "cubeTexture") {
        this.loaders.cubeTextureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }

  sourceLoaded(source, file) {
    this.items[source.name] = file;
  }
}
