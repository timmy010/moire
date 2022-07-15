export default {
  state: {
    materials: []
  },
  getters: {
    allMaterials(state) {
      return state.materials;
    }
  },
  mutations: {
    updateMaterials(state, materials) {
      state.materials = materials;
    }
  },
  actions: {
    async getMaterials(ctx) {
      const res = await fetch(
        'https://vue-moire.skillbox.cc/api/materials'
      );
      const materials = await res.json();
      ctx.commit('updateMaterials', materials.items);
    }
  }
};
