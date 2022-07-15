export default {
  state: {
    products: []
  },
  getters: {
    allProducts(state) {
      return state.products;
    }
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async getProducts(ctx) {
      const res = await fetch(
        'https://vue-moire.skillbox.cc/api/products?limit=12'
      );
      const products = await res.json();
      ctx.commit('updateProducts', products.items);
    }
  }
};
