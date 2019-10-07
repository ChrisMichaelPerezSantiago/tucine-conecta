const type = require('./types');
import API from '../API/API';

const api = new API();

export const actions = {
  GET_ALL_SERIES({commit} , page = 1){
    api.getAllSeries(page)
        .then(doc =>{
          console.log('doc: ' , doc);
          commit(type.SET_SERIES , doc);
          setTimeout(() =>{
            commit(type.IS_LOADING , false);
          } , 1000);
        }).catch(err =>{
          console.error(err);
        });
  }
};
