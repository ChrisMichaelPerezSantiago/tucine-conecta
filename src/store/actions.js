const type = require('./types');
import API from '../API/API';

const api = new API();

export const actions = {
  GET_ALL_SERIES({commit} , page){
    api.getAllSeries(page)
        .then(doc =>{
          commit(type.SET_SERIES , doc.series);
          setTimeout(() =>{
            commit(type.IS_LOADING , false);
          } , 1000);
        }).catch(err =>{
          console.error(err);
        });
  },
  GET_ALL_MOVIES({commit} , page){
    api.getAllMovies(page)
      .then(doc =>{
        commit(type.SET_MOVIES , doc.movies);
        setTimeout(() =>{
          commit(type.IS_LOADING , false)
        } , 1000)
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_VIDEO_MOVIES({commit} , id){
    api.getMovieVideos(id)
      .then(doc =>{
        commit(type.SET_VIDEO_MOVIES , doc.video_iframe)
        setTimeout(() => {
          commit(type.IS_LOADING , false)
        } , 1000)
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_VIDEO_SERIES({commit} , id){
    api.getSerieVideos(id)
      .then(doc =>{
        commit(type.SET_VIDEO_SERIES , doc.video_iframe)
        setTimeout(() => {
          commit(type.IS_LOADING , false)
        } , 1000)
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_GENRES({commit} , info){
    api.getAllGenres(info)
      .then(doc =>{
        commit(type.SET_GENRES , doc.content);
        setTimeout(() =>{
          commit(type.IS_LOADING , false);
        } , 1000);
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_EPISODES({commit} , page){
    api.getAllLatestEpisodes(page)
      .then(doc =>{
        commit(type.SET_EPISODES , doc.episodes);
        setTimeout(() =>{
          commit(type.IS_LOADING , false);
        } , 1000);
      }).catch(err =>{
        console.log(err);
    });
  },
  GET_CONTENT_SEARCH({commit} , query){
    api.search(query)
      .then(doc =>{
        commit(type.SET_SEARCH , doc.content);
        setTimeout(() => {
          commit(type.IS_LOADING , false);
        } , 1000);
      }).catch(err =>{
        console.log(err);
      });
  }, 
};
