<template>
  <div class="productCard">
    <img class="img" :src="`${product.img}`" :alt="product.alt" srcset="" />
    <div class="productInfo">
      <h2 class="productTitle">{{ product.name }}</h2>
      <p class="productDescr">{{ product.desc }}</p>
      <p class="productPrice">{{ product.price }}</p>
      <button class="productButton">{{ product.button }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style >
.productCard {
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
}

.img {
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
}

.productTitle {
  font-weight: 400;
  font-size: 1.5rem;
}

.productDescr {
  margin-bottom: 1rem;
}

.productPrice {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.productButton {
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
}

.productButton:hover {
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}

.productInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
}
</style>