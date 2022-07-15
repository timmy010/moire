<template>
  <body>
    <header-item />
    <main class="content container">
      <div class="content__top">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="/">
              Каталог
            </a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="#">
              Носки
            </a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link">
              {{ product.title }}
            </a>
          </li>
        </ul>
      </div>
      <section class="item">
        <div class="item__pics pics">
          <div class="pics__wrapper">
            <img
              width="570"
              height="570"
              src="/img/product-square-1.jpg"
              srcset="/img/product-square-1@2x.jpg 2x"
              alt="Название товара"
            >
          </div>
          <ul class="pics__list">
            <li class="pics__item">
              <a href="" class="pics__link pics__link--current">
                <img
                  width="98"
                  height="98"
                  src="/img/product-square-2.jpg"
                  srcset="/img/product-square-2@2x.jpg 2x"
                  alt="Название товара"
                >
              </a>
            </li>
            <li class="pics__item">
              <a href="" class="pics__link">
                <img
                  width="98"
                  height="98"
                  src="/img/product-square-3.jpg"
                  srcset="/img/product-square-3@2x.jpg 2x"
                  alt="Название товара"
                >
              </a>
            </li>
          </ul>
        </div>

        <div class="item__info">
          <span class="item__code">Артикул: 150030</span>
          <h2 class="item__title">
            {{ product.title }}
          </h2>
          <div class="item__form">
            <form class="form" action="#" method="POST">
              <div class="item__row item__row--center">
                <div class="form__counter">
                  <button type="button" aria-label="Убрать один товар">
                    <svg width="12" height="12" fill="currentColor">
                      <use xlink:href="#icon-minus" />
                    </svg>
                  </button>
                  <label for="count">
                    <input
                      type="text"
                      value="1"
                      name="count"
                      id="count"
                    >
                  </label>

                  <button type="button" aria-label="Добавить один товар">
                    <svg width="12" height="12" fill="currentColor">
                      <use xlink:href="#icon-plus" />
                    </svg>
                  </button>
                </div>

                <b class="item__price">
                  {{ product.price }} ₽
                </b>
              </div>

              <div class="item__row">
                <fieldset class="form__block">
                  <legend class="form__legend">
                    Цвет
                  </legend>
                  <ul class="colors colors--black">
                    <li class="colors__item">
                      <label class="colors__label" for="color-item-blue">
                        <input
                          class="colors__radio sr-only"
                          type="radio"
                          name="color-item"
                          value="blue"
                          checked=""
                          id="color-item-blue"
                        >
                        <span class="colors__value" style="background-color: #73B6EA;" />
                      </label>
                    </li>
                    <li class="colors__item">
                      <label class="colors__label" for="color-item-yellow">
                        <input
                          class="colors__radio sr-only"
                          type="radio"
                          name="color-item"
                          value="yellow"
                          id="color-item-yellow"
                        >
                        <span class="colors__value" style="background-color: #FFBE15;" />
                      </label>
                    </li>
                    <li class="colors__item">
                      <label class="colors__label" for="color-item-yellow">
                        <input
                          class="colors__radio sr-only"
                          type="radio"
                          name="color-item"
                          value="gray"
                          id="color-item-gray"
                        >
                        <span class="colors__value" style="background-color: #939393;" /></label>
                    </li>
                  </ul>
                </fieldset>

                <fieldset class="form__block">
                  <legend class="form__legend">
                    Размер
                  </legend>
                  <label class="form__label form__label--small form__label--select" for="size">
                    <select
                      class="form__select"
                      type="text"
                      name="category"
                      id="size"
                    >
                      <option value="value1">37-39</option>
                      <option value="value2">40-42</option>
                      <option value="value3">42-50</option>
                    </select>
                  </label>
                </fieldset>
              </div>

              <button class="item__button button button--primery" type="submit">
                В корзину
              </button>
            </form>
          </div>
        </div>

        <div class="item__desc">
          <ul class="tabs">
            <li class="tabs__item">
              <a class="tabs__link tabs__link--current">
                Информация о товаре
              </a>
            </li>
            <li class="tabs__item">
              <a class="tabs__link" href="#">
                Доставка и возврат
              </a>
            </li>
          </ul>

          <div class="item__content">
            <h3>Состав:</h3>

            <p>
              60% хлопок<br>
              30% полиэстер<br>
            </p>

            <h3>Уход:</h3>

            <p>
              Машинная стирка при макс. 30ºC короткий отжим<br>
              Гладить при макс. 110ºC<br>
              Не использовать машинную сушку<br>
              Отбеливать запрещено<br>
              Не подвергать химчистке<br>
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer-item />
  </body>
</template>

<script>
import HeaderItem from '@/components/HeaderItem';
import FooterItem from '@/components/FooterItem';

export default {
  name: 'ProductView',
  components: { FooterItem, HeaderItem },
  data() {
    return {
      product: ''
    };
  },
  computed: {
    productId() {
      return this.$route.params.id;
    }
  },
  async mounted() {
    await this.getProduct();
  },
  methods: {
    async getProduct() {
      const res = await fetch(
        `https://vue-moire.skillbox.cc/api/products/${this.productId}`
      );
      const product = await res.json();
      this.product = product;
    }
  }
};
</script>

<style scoped>

</style>
