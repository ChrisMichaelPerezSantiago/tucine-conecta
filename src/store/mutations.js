const type = require('./types');

export const mutations = {
  [type.SET_SERIES](state , payload){
    state.series = payload;
  },
  [type.IS_LOADING](state , payload){
    state.isLoading = payload;
  }
};
