<template>
  <div class="pizzaContainer">
    <div class="heading">Order for your favourite Pizza</div>
    <div class="productWrapper" >   
        <Product v-for="(product, index) in products" :key="index" :product='product' />
    </div>
  </div>
  <div class="pizzaContainer sweets">
    <div class="heading">Order for your favourite Snacks</div>
    <div class="productWrapper" >   
        <Product v-for="(product, index) in sweets" :key="index" :product='product' />
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  computed: {
    sideBar() {
      return this.$store.getters.sideBar;
    },
    products() {
      return this.$store.getters.pizza;
    },
    sweets(){
      return this.$store.getters.sweets;
      }
  },
  components: {
    Product,
  },
};
</script>

<style scoped>
.pizzaContainer {
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((80vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
}
.sweets{
  background: #221111;
}
.productWrapper {
  justify-content: center;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.heading {
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
}
</style>