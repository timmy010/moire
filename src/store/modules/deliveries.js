export default {
  state: {
    deliveries: []
  },
  getters: {
    allDeliveries(state) {
      return state.deliveries;
    }
  },
  mutations: {
    updateDeliveries(state, deliveries) {
      state.deliveries = deliveries;
    }
  },
  actions: {
    async getDeliveries(ctx) {
      const res = await fetch(
        'https://vue-moire.skillbox.cc/api/deliveries'
      );
      const deliveries = await res.json();
      ctx.commit('updateDeliveries', deliveries.items);
    }
  }
};
