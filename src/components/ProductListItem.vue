<template>
  <ul class="catalog__list">
    <li class="catalog__item" v-for="product in allProducts" :key="product.id">
      <a class="catalog__pic" href="#">
        <img src="img/product-1.jpg" srcset="img/product-1@2x.jpg 2x" alt="Название товара">
      </a>

      <h3 class="catalog__title">
        <router-link :to="`/product/${product.id}`">
          {{ product.title }}
        </router-link>
      </h3>

      <span class="catalog__price">
        3 690 ₽
      </span>

      <ul class="colors colors--black">
        <li class="colors__item">
          <label class="colors__label" for="color-73B6EA">
            <input
              class="colors__radio sr-only"
              type="radio"
              name="color-1"
              value="#73B6EA"
              checked=""
              id="color-73B6EA"
            >
            <span class="colors__value" style="background-color: #73B6EA;" />
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label" for="color-8BE000">
            <input
              class="colors__radio sr-only"
              type="radio"
              name="color-1"
              value="#8BE000"
              id="color-8BE000"
            >
            <span class="colors__value" style="background-color: #8BE000;" />
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label" for="color-222">
            <input
              class="colors__radio sr-only"
              type="radio"
              name="color-1"
              value="#222"
              id="color-222"
            >
            <span class="colors__value" style="background-color: #222;" />
          </label>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductListItem',
  computed: {
    ...mapGetters([
      'allProducts'
    ])
  },
  async mounted() {
    await this.getProducts();
  },
  methods: {
    ...mapActions([
      'getProducts'
    ])
  }
};
</script>

<style scoped>

</style>
