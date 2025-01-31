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
  },
  [type.SET_GENRES](state , payload){
    state.genres = payload;
  },
  [type.SET_EPISODES](state , payload){
    state.episodes = payload;
  },
  [type.SET_SEARCH](state , payload) {
    state.contentSearched = payload;
  },
};
