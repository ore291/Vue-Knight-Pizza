<template>
  <div
    class="HeroContainer"
    :style="{
      backgroundImage: `url(${imgbg})`,
    }"
  >
    <NavBar />
    <side-bar></side-bar>
    <HeroContent @click="toggleSidebar()" />
  </div>
</template>

<script>
import imgbg from "@/assets/img/pizza-1.jpg";
import { reactive, toRefs} from "vue";
import HeroContent from "./HeroContent";
import NavBar from "./NavBar";
import sideBar from "./Sidebar";

export default {
  setup() {
    const state = reactive({
      imgbg: imgbg,
    });
    return toRefs(state)
  },
methods: {
   toggleSidebar(){
     const isClosed = this.$store.getters.sideBar
     if(!isClosed)
      this.$store.commit('toggleSidebar')
    }
},
  components: {
    NavBar,
    sideBar,
    HeroContent,
  },
};
</script>

<style >
.HeroContainer {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  height: 100vh;
  background-position: center;
  background-size: cover;
}
</style>