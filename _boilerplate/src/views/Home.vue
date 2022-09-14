<template>
  <div class="page">
    <ThreeScene />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ThreeScene from "@/components/ThreeScene.vue";

export default defineComponent({
  name: "Home",
  components: { ThreeScene },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.page.home {
  background-color: var(--black);
  height: 100vh;
}
</style>
