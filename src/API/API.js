import SingletonClass from "./pattern/SingletonClass";

class API extends SingletonClass{
  constructor(){
    super();
  }

  async getAllSeries(page){
    return this.get(`series/${page}`);
  };

  async getAllMovies(page){
    return this.get(`movies/${page}`);
  };

  async getSerieVideos(id){
    return this.get(`video_serie/${id}`);
  };

  async getMovieVideos(id){
    return this.get(`video_movie/${id}`);
  };

  async getAllGenres(info){
    return this.get(`genres/${info.genre}/${info.page}`);
  };
}

export default API;
