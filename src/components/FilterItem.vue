<template>
  <aside class="filter">
    <form class="filter__form form" action="#" method="get">
      <fieldset class="form__block">
        <legend class="form__legend">
          Цена
        </legend>
        <label class="form__label form__label--price" for="price-from">
          <input
            class="form__input"
            type="text"
            name="min-price"
            value="0"
            id="price-from"
          >
          <span class="form__value">От</span>
        </label>
        <label class="form__label form__label--price" for="price-to">
          <input
            class="form__input"
            type="text"
            name="max-price"
            value="12345"
            id="price-to"
          >
          <span class="form__value">До</span>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">
          Категория
        </legend>
        <label class="form__label form__label--select" for="category-select">
          <select
            class="form__select"
            name="category"
            id="category-select"
          >
            <option value="value1">Все категории</option>
            <option value="value2">Футболки</option>
            <option value="value3">Бюстгалтеры</option>
            <option value="value4">Носки</option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">
          Материал
        </legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label" for="material-len">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="material"
                value="лен"
                id="material-len"
              >
              <span class="check-list__desc">
                лен
                <span>(3)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label" for="material-cotton">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="material"
                value="хлопок"
                id="material-cotton"
              >
              <span class="check-list__desc">
                хлопок
                <span>(46)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label" for="material-wool">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="material"
                value="шерсть"
                id="material-wool"
              >
              <span class="check-list__desc">
                шерсть
                <span>(20)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label" for="material-silk">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="material"
                value="шелк"
                id="material-silk"
              >
              <span class="check-list__desc">
                шелк
                <span>(30)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">
          Коллекция
        </legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label" for="collection-summer">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="лето"
                checked=""
                id="collection-summer"
              >
              <span class="check-list__desc">
                лето
                <span>(2)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label" for="collection-winter">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="зима"
                id="collection-winter"
              >
              <span class="check-list__desc">
                зима
                <span>(53)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label" for="collection-spring">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="весна"
                id="collection-spring"
              >
              <span class="check-list__desc">
                весна
                <span>(24)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label" for="collection-autumn">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="осень"
                id="collection-autumn"
              >
              <span class="check-list__desc">
                осень
                <span>(30)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button class="filter__submit button button--primery" type="submit">
        Применить
      </button>
      <button class="filter__reset button button--second" type="button">
        Сбросить
      </button>
    </form>
  </aside>
</template>

<script>
export default {
  name: 'FilterItem'
};
</script>

<style scoped>

</style>
