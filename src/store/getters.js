var _ = require('lodash');

export const getters = {
  FILTER_SPESIFIC_DATA: (state) => (search) =>{
    return _.filter(state.contentSearched , (data) =>{
      return _.method('email.match', new RegExp(data.title, 'i'))
    });
  }
};
