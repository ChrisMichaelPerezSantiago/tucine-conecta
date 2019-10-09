const type = require('./types');

export const mutations = {
  [type.SET_SERIES](state , payload){
    state.series = payload;
  },
  [type.IS_LOADING](state , payload){
    state.isLoading = payload;
  },
  [type.SET_VIDEO_SERIES](state , payload){
    state.video_series = payload;
  },
  [type.SET_MOVIES](state , payload){
    state.movies = payload;
  },
  [type.SET_VIDEO_MOVIES](state , payload){
    state.movie_video = payload;
  }
};
