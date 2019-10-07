const {get} = require('axios');

export default class SingletonClass{
  constructor(){
    if(!!SingletonClass.instance) {
      return SingletonClass.instance;
    }
    this.state = {
      base_url: 'https://cinemanight.chrismichael.now.sh/api/v1'
    };
    SingletonClass.instance = this;
    return this;
  }

  async get(endpoint) {
    return get(`${this.state.base_url}/${endpoint}`)
        .then(res => res.data)
  }
}
