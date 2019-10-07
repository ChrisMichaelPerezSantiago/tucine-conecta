import SingletonClass from "./pattern/SingletonClass";

class API extends SingletonClass{
  constructor(){
    super();
  }

  async getAllSeries(page){
    return this.get(`series/${page}`);
  }
}

export default API;
