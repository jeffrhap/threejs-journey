<template>
  <div class="three">
    <canvas ref="canvas"></canvas>
    <div ref="loading-bar" class="loading-bar"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// @ts-ignore
import Experience from "@/experience/experience";

export default defineComponent({
  name: "ThreeScene",
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    const experience = new Experience(canvas);
  },
});
</script>

<style lang="scss" scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}

.loading-bar {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 0.5s;
  will-change: transform;

  &.ended {
    transform-origin: top right;
    transition: transform 1s ease-in-out;
  }
}
</style>
