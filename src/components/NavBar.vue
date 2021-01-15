<template>
  <div class="nav">
    <router-link class="link" to="/">Knight Pizza</router-link>
    <div class="nav-icon" @click="toggleSidebar">
      <p>MENU</p>
      <img class="bars" :src="require('@/assets/img/pizza-slice.svg')" alt="" />
    </div>
  </div>
</template>

<script>
export default {

methods: {
    toggleSidebar(){
      this.$store.commit('toggleSidebar')
    }
  },

};
</script>

<style scoped>
.nav {
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
}

.link {
  color: #ffffff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 400px) {
  .link {
    position: absolute;
    top: 10px;
    left: 25px;
  }
}

.nav-icon{
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #ffffff;
}

.nav-icon p {
  transform: translate(-175%, 100%);
  font-weight: bold;
}

.nav-icon img{
  filter: invert(1);
}

.bars {
  font-size: 2rem;
  transform: translate(-50%, -15%);
}
</style>