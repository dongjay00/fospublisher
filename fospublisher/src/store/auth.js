export default {
  namespaced: true,
  state: {
    token: null,
    refreshToken: null,
    userId: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
      localStorage.setItem("refreshToken", state.refreshToken);
    },
    setUserId(state, userId) {
      state.userId = userId;
      localStorage.setItem("userId", state.userId);
    },
  },
  actions: {},
};