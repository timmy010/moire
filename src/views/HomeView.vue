<template>
  <body>
    <header-item />

    <main class="content container">
      <div class="content__top">
        <div class="content__row">
          <h1 class="content__title">
            Каталог
          </h1>
          <span class="content__info">
            152 товара
          </span>
        </div>
      </div>

      <div class="content__catalog">
        <filter-item />
        <section class="catalog">
          <product-list-item />
          <pagination-item />
        </section>
      </div>
    </main>

    <footer-item />
  </body>
</template>

<script>
import HeaderItem from '@/components/HeaderItem';
import FooterItem from '@/components/FooterItem';
import FilterItem from '@/components/FilterItem';
import ProductListItem from '@/components/ProductListItem';
import PaginationItem from '@/components/PaginationItem';

export default {
  name: 'HomeView',
  components: { PaginationItem, FooterItem, HeaderItem, FilterItem, ProductListItem }
};
</script>
