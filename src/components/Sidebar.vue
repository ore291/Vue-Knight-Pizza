<template>
  
  <div class="container" :class="{ active: isClosed }">
    <span class="icon" @click="toggleSidebar()">
      <img class="CloseIcon" :src="require('@/assets/img/times.svg')" alt="" />
    </span>
    <div class="sideBarMenu">
      <router-link class="link" to="/">Pizza</router-link>
      <router-link class="link" to="/">Smoothies and Drinks</router-link>
      <router-link class="link" to="/">Full Menu</router-link>
    </div>
    <div class="sideBtnWrap">
      <router-link to="/" class="sideBarRoute">Order Now</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sideBar', 
  // setup() {
  //   const state = reactive({
  //     isClosed: computed(() => this.$store.getters.sideBar)
  //   });

  //   function toggleSidebar() {
  //     state.isClosed = !state.isClosed;
  //   }

  //   return {
  //     state,
  //     toggleSidebar,
  //   };
  // },
  computed: {
    isClosed(){
      return this.$store.getters.sideBar
    }
  },
  methods: {
    toggleSidebar(){
      this.$store.commit('toggleSidebar')
    }
  },

};
</script>

<style scoped>
.container {
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: 0;
}

.active {
  right: -1000px;
}

@media screen and (max-width: 400px) {
  .container {
    width: 100%;
  }
  .sideBarMenu {
    grid-template-rows: repeat(3, 60px);
  }
}

.CloseIcon {
  color: #000;
}

.icon {
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
}

.sideBarMenu {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2a ease-in-out;
  color: #000;
  cursor: pointer;
}

.link:hover {
  color: #e31837;
  transition: 0.2s ease-in-out;
}

.sideBtnWrap {
  display: flex;
  justify-content: center;
}

.sideBarRoute {
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.sideBarRoute:hover {
  transition: 0.2s ease-in-out;
  color: #010626;
  background: #fff;
}
</style>>


