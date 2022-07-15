export default {
  state: {
    colors: []
  },
  getters: {
    allColors(state) {
      return state.colors;
    }
  },
  mutations: {
    updateColors(state, colors) {
      state.colors = colors;
    }
  },
  actions: {
    async getColors(ctx) {
      const res = await fetch(
        'https://vue-moire.skillbox.cc/api/colors'
      );
      const colors = await res.json();
      ctx.commit('updateColors', colors.items);
    }
  }
};
