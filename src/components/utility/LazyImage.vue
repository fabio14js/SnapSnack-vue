<script>
import VLazyImage from "v-lazy-image";
export default VLazyImage;
</script>

<template></template>

<style scoped>
.v-lazy-image {
  filter: blur(6px);
  transition: filter 0.8s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>