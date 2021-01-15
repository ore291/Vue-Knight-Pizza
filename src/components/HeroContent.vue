<template>
  <div class="heroContent">
    <hero-items></hero-items>
  </div>
</template>

<script>
import HeroItems from "./HeroItems";
export default {
  components: {
    HeroItems,
  },
};
</script>

<style>
.heroConte{
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) / 2);
}
</style>