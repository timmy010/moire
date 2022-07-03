<template>
  <body>
    <header-item />
    <main class="content container">
      <div class="content__top">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="index.html">
              Каталог
            </a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="cart.html">
              Корзина
            </a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link">
              Оформление заказа
            </a>
          </li>
        </ul>

        <div class="content__row">
          <h1 class="content__title">
            Оформление заказа
          </h1>
        </div>
      </div>

      <section class="cart">
        <form class="cart__form form" action="#" method="POST">
          <div class="cart__field">
            <div class="cart__data">
              <label class="form__label" for="fio-input">
                <input
                  class="form__input"
                  type="text"
                  name="name"
                  placeholder="Введите ваше полное имя"
                  id="fio-input"
                >
                <span class="form__value">ФИО</span>
              </label>

              <label class="form__label" for="address-input">
                <input
                  class="form__input"
                  type="text"
                  name="address"
                  placeholder="Введите ваш адрес"
                  id="address-input"
                >
                <span class="form__value">Адрес доставки</span>
              </label>

              <label class="form__label" for="phone-input">
                <input
                  class="form__input"
                  type="tel"
                  name="phone"
                  placeholder="Введите ваш телефон"
                  id="phone-input"
                >
                <span class="form__value">Телефон</span>
                <span class="form__error">Неверный формат телефона</span>
              </label>

              <label class="form__label" for="email-input">
                <input
                  class="form__input"
                  type="email"
                  name="email"
                  placeholder="Введи ваш Email"
                  id="email-input"
                >
                <span class="form__value">Email</span>
              </label>

              <label class="form__label" for="comment-textarea">
                <textarea
                  class="form__input form__input--area"
                  name="comments"
                  placeholder="Ваши пожелания"
                  id="comment-textarea"
                />
                <span class="form__value">Комментарий к заказу</span>
              </label>
            </div>

            <div class="cart__options">
              <h3 class="cart__title">
                Доставка
              </h3>
              <ul class="cart__options options">
                <li class="options__item">
                  <label class="options__label" for="delivery-pickup">
                    <input
                      class="options__radio sr-only"
                      type="radio"
                      name="delivery"
                      value="0"
                      checked=""
                      id="delivery-pickup"
                    >
                    <span class="options__value">
                      Самовывоз <b>бесплатно</b>
                    </span>
                  </label>
                </li>
                <li class="options__item">
                  <label class="options__label" for="delivery-courier">
                    <input
                      class="options__radio sr-only"
                      type="radio"
                      name="delivery"
                      value="500"
                      id="delivery-courier"
                    >
                    <span class="options__value">
                      Курьером <b>290 ₽</b>
                    </span>
                  </label>
                </li>
              </ul>

              <h3 class="cart__title">
                Оплата
              </h3>
              <ul class="cart__options options">
                <li class="options__item">
                  <label class="options__label" for="payment-cart">
                    <input
                      class="options__radio sr-only"
                      type="radio"
                      name="pay"
                      value="card"
                      checked=""
                      id="payment-cart"
                    >
                    <span class="options__value">
                      Картой при получении
                    </span>
                  </label>
                </li>
                <li class="options__item">
                  <label class="options__label" for="payment-cash">
                    <input
                      class="options__radio sr-only"
                      type="radio"
                      name="pay"
                      value="cash"
                      id="payment-cash"
                    >
                    <span class="options__value">
                      Наличными при получении
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div class="cart__block">
            <ul class="cart__orders">
              <li class="cart__order">
                <h3>Смартфон Xiaomi Redmi Note 7 Pro 6/128GB</h3>
                <b>990 ₽</b>
                <span>Артикул: 150030</span>
              </li>
              <li class="cart__order">
                <h3>Гироскутер Razor Hovertrax 2.0ii</h3>
                <b>1 990 ₽</b>
                <span>Артикул: 150030</span>
              </li>
              <li class="cart__order">
                <h3>Электрический дрифт-карт Razor Lil’ Crazy</h3>
                <b>4 090 ₽</b>
                <span>Артикул: 150030</span>
              </li>
            </ul>

            <div class="cart__total">
              <p>Доставка: <b>бесплатно</b></p>
              <p>Итого: <b>3</b> товара на сумму <b>4 070 ₽</b></p>
            </div>

            <button class="cart__button button button--primery" type="submit">
              Оформить заказ
            </button>
          </div>
          <div class="cart__error form__error-block">
            <h4>Заявка не отправлена!</h4>
            <p>
              Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу.
            </p>
          </div>
        </form>
      </section>
    </main>
    <footer-item />
  </body>
</template>

<script>
import HeaderItem from '@/components/HeaderItem';
import FooterItem from '@/components/FooterItem';

export default {
  name: 'OrderView',
  components: { FooterItem, HeaderItem }
};
</script>

<style scoped>

</style>
