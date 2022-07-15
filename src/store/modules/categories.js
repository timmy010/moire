export default {
  state: {
    categories: []
  },
  getters: {
    allCategories(state) {
      return state.categories;
    }
  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    async getCategories(ctx) {
      const res = await fetch(
        'https://vue-moire.skillbox.cc/api/productCategories'
      );
      const categories = await res.json();
      ctx.commit('updateCategories', categories.items);
    }
  }
};
