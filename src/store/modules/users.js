export default {
  state: {
    users: []
  },
  getters: {
    usersGetter(state) {
      return state.users;
    }
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    async getUserKey(ctx) {
      const res = await fetch(
        'https://vue-moire.skillbox.cc/users/accessKey'
      );
      const userKey = await res.json();
      ctx.commit('updateUsers', userKey.accessKey);
    }
  }
};
