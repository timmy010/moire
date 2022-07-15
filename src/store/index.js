import { createStore } from 'vuex';
import product from './modules/product';
import categories from './modules/categories';

export default createStore({
  modules: {
    product,
    categories
  }
});
